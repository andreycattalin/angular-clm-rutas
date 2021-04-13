import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  mForm: FormGroup
  isSend = false

  constructor(private fb: FormBuilder, private notifierService: NotifierService) {
    this.mForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$"
      )]]
    })
  }

  ngOnInit() {
  }

  get f() {
    return this.mForm.controls
  }

  onSave() {
    this.isSend = true
    console.log("Guardar!!", this.mForm);

    if(this.mForm.invalid) {
      console.error("El formulario NO es válido");
      return
    }

    console.log("El formulario es válido");
    // Atacar a API

    this.notifierService.notify('success', "Datos actualizados")

  }
}
