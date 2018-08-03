import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {
  model:any={};
  constructor() { }

  ngOnInit() {
  }
  submitform(form){

      console.log(this.model);
      console.log(form);
  }

}
