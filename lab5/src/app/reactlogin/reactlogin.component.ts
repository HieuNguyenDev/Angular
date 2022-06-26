import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup , Form, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactlogin',
  templateUrl: './reactlogin.component.html',
  styleUrls: ['./reactlogin.component.css']
})
export class ReactloginComponent implements OnInit {

  constructor( private fbuilder:FormBuilder ) { }
  login!: FormGroup;
  frm1!: FormGroup;
  ngOnInit(): void {
    this.frm1 =  this.fbuilder.group({
      tenlt:['', Validators.required],
      gialt: ['', [Validators.min(0), Validators.max(1000000000)]],
      nhasx:['', Validators.min(1)],
      status:['', Validators.required],
      kmbalo:[true],   kemoffile:[false],  kmchuot:[true]
    })
    this.login = new FormGroup({
      username: new FormControl('teonv' , [Validators.minLength(3), Validators.maxLength(10)]),
      password: new FormControl('123', [Validators.minLength(8)]),
    });
  }
  ngDoCheck(){ console.log(this.frm1);}

}
