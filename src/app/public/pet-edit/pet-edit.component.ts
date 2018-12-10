import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { EspecieService } from 'src/app/shared/services/especie.service';
import { PorteService } from 'src/app/shared/services/porte.service';
import { IbgeUFService } from 'src/app/dependencies/ibge-uf.service';
import { ViacepService } from 'src/app/dependencies/viacep.service';
import { ViaCep } from 'src/app/shared/options/viacep.options';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss', '../pet-cad/pet-cad.component.scss']
})
export class PetEditComponent implements OnInit {
  listCategorias = [];
  listEspecies = [];
  listPortes = [];
  listUF = [];
  listCidades = [];

  editarPetForm: FormGroup;

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

    this.editarPetForm = this.formBuilder.group({
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

  editPet() {
    const nome = this.editarPetForm.get('nome').value;
    const categoria = this.editarPetForm.get('categoria').value;
    const descricao = this.editarPetForm.get('descricao').value;

    const porte = this.editarPetForm.get('porte').value;
    const especie = this.editarPetForm.get('especie').value;
    const sexo = this.editarPetForm.get('sexo').value;

    const imagem = this.selectedFile;

    const cep = this.editarPetForm.get('cep').value;
    const rua = this.editarPetForm.get('rua').value;
    const referencia = this.editarPetForm.get('referencia').value;
    const bairro = this.editarPetForm.get('bairro').value;
    const cidade = this.editarPetForm.get('cidade').value;
    const uf = this.editarPetForm.get('uf').value;

    // this.authService
    //   .editPet(nome, categoria, descricao,
    //     porte, especie, sexo,
    //     imagem,
    //     cep, rua, referencia, bairro, cidade, uf)
    // .subscribe(
    //   good => console.log(good),
    //   err => {
    //     console.log(err);
    //     this.editarPetForm.reset();
    //   }
    // );
  }

  updateCidadeAndUF() {
    const cep = this.editarPetForm.get('cep').value;
    if (cep != null) {
      this.cepService
        .getCidadeAndUF(cep)
        .subscribe(
          (resp: ViaCep) => {
            this.editarPetForm.patchValue({
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