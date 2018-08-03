import { Component, OnInit } from '@angular/core';
import { FormControl, Validators , FormGroup , FormBuilder} from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';


@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RFComponent implements OnInit {
  formGroup:FormGroup;
  constructor(fb:FormBuilder) {
    this.formGroup = fb.group({
   
       fname : [ '' , [Validators.required,Validators.minLength(5)]],
       lname : ['' , [Validators.required,Validators.minLength(5)]],
       email : ['',Validators.required],
       password :['',Validators.required],
       city : ['',Validators.required],
       state :['',Validators.required],
       pincode:['',Validators.required],
       cpassword :['',Validators.required]


    });
  }
  submit(){
  console.log(this.formGroup);
  }
 

  ngOnInit() {
  }
 

}
//FormControl
//fname:FormControl;
//this.fname = new FormControl('' , [Validators.required,Validators.minLength(5)]);
//this.formGroup = new FormGroup({
  //fname : new FormControl('' , [Validators.required,Validators.minLength(5)]),
  //lname : new FormControl('' , [Validators.required,Validators.minLength(5)]),
  //email : new FormControl('',Validators.required),
  //password : new FormControl('',Validators.required)

//});
// isBangalore():ValidatorFn{
  //return (control:AbortController):{[key:string]:any} |null{

    //console.log("controls value is" , control);
    //return (controlNameBinding.value.indexof('Bangalore')!=-1)?null:{'citykey':value:control.value}
  //}

  //}