import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { EspecieService } from 'src/app/shared/services/especie.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { PorteService } from 'src/app/shared/services/porte.service';
import { ViacepService } from 'src/app/dependencies/viacep.service';
import { IbgeUFService } from 'src/app/dependencies/ibge-uf.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

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

    this.uf.getUFs().subscribe(
      resp => {
        let ufs = resp
          .map(resp => resp.sigla)
          .sort();
        this.listUF = ufs;
        this.petCadForm.controls['uf'].patchValue('');
      }
    );

    this.petCadForm = this.formBuilder.group({
      nome: [''],
      categoria: [''],
      descricao: [''],
      porte: [''],
      especie: [''],
      sexo: [],
      cep: [''],
      cidade: [''],
      uf: []
    });
  }

  createPet() {
    const nome = this.petCadForm.get('nome').value;
    const categoria = this.petCadForm.get('categoria').value;
    const descricao = this.petCadForm.get('descricao').value;
    const porte = this.petCadForm.get('porte').value;
    const especie = this.petCadForm.get('especie').value;

    const imagem = this.selectedFile;

    this.authService
      .createPet(nome, categoria, descricao, porte, especie, imagem);
    /*.subscribe(
      () => console.log('sucesso'),
      err => {
        console.log(err);
        this.petCadForm.reset;
      }
    );*/
  }

  updateCidadeAndUF() {
    const cep = this.petCadForm.get('cep').value;
    if (cep != null) {
      this.cepService
        .getCidadeAndUF(cep)
        .subscribe(
          resp => {
            this.petCadForm.patchValue({
              cidade: resp.localidade,
              uf: resp.uf
            });

          }
        );
    }
  }

}
