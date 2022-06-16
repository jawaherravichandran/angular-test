import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  page ;
  activeIndex: number = 1;
  private destroy = new Subject<void>();

  constructor(private fb: FormBuilder) {}
  
  userForm: FormGroup;

  userValueHistory = [];
  surnameValueHistory = [];

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['firstname'],
      surname: ['lastname']
    });
    this.page = [{
      label: 'comp1',
      },{
        label: 'comp2',
        }
];
  }

  submit() {
    let mess = 'name :'+this.userForm.get('name').value+'_'+this.userForm.get('surname').value;
    window.alert(mess);
  }
}
