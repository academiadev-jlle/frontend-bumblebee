import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-pet-cad',
  templateUrl: './pet-cad.component.html',
  styleUrls: ['./pet-cad.component.scss']
})
export class PetCadComponent implements OnInit {

  petCadForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  selectedFile: File = null;
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    // console.log(event);
  }

  ngOnInit() {
    this.petCadForm = this.formBuilder.group({
      nome: [''],
      categoria: ['perdido'],
      descricao: [''],
      porte: ['pequeno'],
      especie: ['cao'],
      sexo: []
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

}
