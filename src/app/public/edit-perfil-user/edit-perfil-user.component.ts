import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-perfil-user',
  templateUrl: './edit-perfil-user.component.html',
  styleUrls: ['./edit-perfil-user.component.scss']
})
export class EditPerfilUserComponent implements OnInit {
  editarPerfilForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editarPerfilForm = this.formBuilder.group({});
  }

}
