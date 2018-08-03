//import '../rxjs/add/operator/toPromise';
import '../../node_modules/rxjs/add/operator/toPromise';
//import 'rxjs-compat/add/operator/toPromise';
//import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {CONFIG } from './../app/config/config';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  
  constructor(private http : HttpClient) { }

  register(username:string , email:string , Password:string){

     return this.http.post(`${CONFIG.API_URL}/restAPI/user`, {username:username, email:email, Password:Password})
       .toPromise().then((response)=>{
         console.log(response);
       })
  }
}

