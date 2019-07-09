import { Component, OnInit, HostBinding } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  fileGroup:FormGroup;

  State="You didnt send a message"


  ngOnInit() {
    this.fileGroup = new FormGroup({
      message:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      name:new FormControl('',Validators.required)
    })
  }
  
  
  onSubmit(){
    this.State="You sent a message"
  }
}
