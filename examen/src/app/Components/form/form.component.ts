import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { SaveRegisterService } from 'src/app/Service/save-register.service';
import { ApiConsume } from '../table/table.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formExamen:FormGroup;
  first = new FormControl('', [Validators.required]);
  last = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  address = new FormControl('', [Validators.required]);
  created = new FormControl('', [Validators.required]);
  balance = new FormControl('', [Validators.required]);
  
  constructor(private _formBuilder: FormBuilder,private saveRegisterService: SaveRegisterService) { 
    this.formExamen = this._formBuilder.group({
      first: this.first,
      last: this.last,
      email: this.email,
      address: this.address,
      created: this.created,
      balance: this.balance
    });
  }

  ngOnInit(): void {
  }
  get f(){ 
    return this.formExamen.controls;
  }

  saveRegister(){
    let objeto = this.collect();
    this.formExamen.reset();
    this.saveRegisterService.setRegister(objeto);
  }

  collect():ApiConsume{
    return {
      first: this.f.first.value,
      last: this.f.last.value,
      email: this.f.email.value,
      address: this.f.address.value,
      balance: this.f.balance.value,
      created: this.f.created.value,
    };
  }

}
