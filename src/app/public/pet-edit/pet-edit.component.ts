import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.scss', '../pet-cad/pet-cad.component.scss']
})
export class PetEditComponent implements OnInit {
  editarPetForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editarPetForm = this.formBuilder.group({});
  }

}
