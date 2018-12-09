import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { EspecieService } from 'src/app/shared/services/especie.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { PorteService } from 'src/app/shared/services/porte.service';
import { ViacepService } from 'src/app/dependencies/viacep.service';
import { IbgeUFService } from 'src/app/dependencies/ibge-uf.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

import { ViaCep } from '../../shared/options/viacep.options';

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

    private cepService: ViacepService
  ) { }

  selectedFile: File = null;
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    // console.log(event);
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

    const imagem = this.selectedFile;

    const cep = this.petCadForm.get('cep').value;
    const rua = this.petCadForm.get('rua').value;
    const referencia = this.petCadForm.get('referencia').value;
    const bairro = this.petCadForm.get('bairro').value;
    const cidade = this.petCadForm.get('cidade').value;
    const uf = this.petCadForm.get('uf').value;

    this.authService
      .createPet(nome, categoria, descricao,
        porte, especie, sexo,
        imagem,
        cep, rua, referencia, bairro, cidade, uf)
    .subscribe(
      good => console.log(good),
      err => {
        console.log(err);
        this.petCadForm.reset();
      }
    );
  }

  updateCidadeAndUF() {
    const cep = this.petCadForm.get('cep').value;
    if (cep != null) {
      this.cepService
        .getCidadeAndUF(cep)
        .subscribe(
          (resp: ViaCep) => {
            this.petCadForm.patchValue({
              cidade: resp.localidade,
              uf: resp.uf,
              bairro: resp.bairro,
              rua: resp.logradouro
            });

          }
        );
    }
  }

}
