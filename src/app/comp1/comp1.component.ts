import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  page = [{
    label: 'comp1',
    },{
      label: 'comp2',
      }
];
activeIndex =0;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navMethod() {
    console.log('sfs');
    this.router.navigate(['/comp2']);
  }

}
