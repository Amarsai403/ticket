import { AuthserviceService } from './../authservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registation-tdf',
  templateUrl: './registation-tdf.component.html',
  styleUrls: ['./registation-tdf.component.css']
})
export class RegistationTDFComponent implements OnInit {
 
   
  //private authserviceService = new AuthserviceService();
  constructor(private authserviceService:AuthserviceService) { }

  ngOnInit() {
  }

  onSubmit(form){
    // console.log(form.value);
    // alert("Registration is Done")

    this.authserviceService.register(form.value.username , form.value.email, form.value.Password);
    console.log(form.value );
  }
}
