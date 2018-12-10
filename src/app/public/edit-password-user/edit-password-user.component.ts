import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-password-user',
  templateUrl: './edit-password-user.component.html',
  styleUrls: ['./edit-password-user.component.scss']
})
export class EditPasswordUserComponent implements OnInit {

  editarSenhaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editarSenhaForm = this.formBuilder.group({});
  }

}
