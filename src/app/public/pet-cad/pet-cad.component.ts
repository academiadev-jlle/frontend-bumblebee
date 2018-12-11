import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { EspecieService } from 'src/app/shared/services/especie.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { PorteService } from 'src/app/shared/services/porte.service';
import { ViacepService } from 'src/app/dependencies/viacep.service';
import { IbgeUFService } from 'src/app/dependencies/ibge-uf.service';

import { ViaCep } from '../../shared/options/viacep.options';
import { ListaCidades } from '../../shared/options/cidade.options';
import { DadosabertosbrCidadesService } from 'src/app/dependencies/dadosabertosbr-cidades.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-pet-cad',
  templateUrl: './pet-cad.component.html',
  styleUrls: ['./pet-cad.component.scss']
})
export class PetCadComponent implements OnInit {
  listCategorias = [];
  listEspecies = [];
  listPortes = [];
  listUF = [];
  listCidades = [];

  petCadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,

    private categorias: CategoriaService,
    private especies: EspecieService,
    private portes: PorteService,
    private uf: IbgeUFService,

    private cidadeService: DadosabertosbrCidadesService,
    private cepService: ViacepService
  ) { }

  selectedFileIds: Array<number> = [];

  onFileSelected(event) {
    const files = event.target.files;
    const formData: FormData = new FormData();

    for (const file of files) {
      formData.append('file', file, file.id);
      this.sendFiles(formData);
      formData.delete('file');
    }
  }

  sendFiles(formData) {
    this.authService.trocaFotoPorId(formData)
      .subscribe(
        (good: number) => {
          console.log(good);
          this.selectedFileIds.push( good );
          console.log(this.selectedFileIds);
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit() {
    this.listCategorias = this.categorias.getCategorias();
    this.listEspecies = this.especies.getEspecies();
    this.listPortes = this.portes.getPortes();
    this.listUF = this.uf.getUFs();

    this.petCadForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      descricao: ['', Validators.required],
      porte: ['', Validators.required],
      especie: ['', Validators.required],
      sexo: [, Validators.required],
      cep: [''],
      uf: [''],
      rua: [''],
      referencia: [''],
      bairro: [],
      cidade: ['']
    });
  }

  createPet() {
    const nome = this.petCadForm.get('nome').value;
    const categoria = this.petCadForm.get('categoria').value;
    const descricao = this.petCadForm.get('descricao').value;

    const porte = this.petCadForm.get('porte').value;
    const especie = this.petCadForm.get('especie').value;
    const sexo = this.petCadForm.get('sexo').value;

    const imagemId = this.selectedFileIds;

    const cep = this.petCadForm.get('cep').value;
    const rua = this.petCadForm.get('rua').value;
    const referencia = this.petCadForm.get('referencia').value;
    const bairro = this.petCadForm.get('bairro').value;
    const cidade = this.petCadForm.get('cidade').value;
    const uf = this.petCadForm.get('uf').value;

    this.authService
      .createPet(nome, categoria, descricao,
        porte, especie, sexo,
        imagemId,
        cep, rua, referencia, bairro, cidade, uf)
    .subscribe(
      good => console.log(good),
      err => {
        console.log(err);
        this.petCadForm.reset();
      }
    );
  }

  updateCidade() {
    const unidadeFederativa = this.petCadForm.get('uf').value;
    if (unidadeFederativa != null) {
      this.cidadeService.getCidades(unidadeFederativa)
      .subscribe(
        (resp: Array<ListaCidades>) => {
            this.listCidades = resp.map(lista => lista.nome);
          }
        );
    }
  }

  updateCidadeAndUF() {
    const cep = this.petCadForm.get('cep').value;
    if (cep != null) {
      this.cepService
        .getCidadeAndUF(cep)
        .subscribe(
          (resp: ViaCep) => {
            this.petCadForm.patchValue({
              uf: resp.uf
            });
            this.updateCidade();
            this.petCadForm.patchValue({
              cidade: resp.localidade,
              bairro: resp.bairro,
              rua: resp.logradouro
            });
          }
        );
    }
  }

}
