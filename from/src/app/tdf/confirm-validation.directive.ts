import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";


@Directive({

selector : '[appconfirmvalidation]',
providers : [{
    provide:NG_VALIDATORS,
    useExisting:confirmvalidationdirective,
    multi:true
}]

})
export class confirmvalidationdirective implements Validator{
   @Input() appconfirmvalidation:string;
    validate(control:AbstractControl) : {[Key:string]:any} | null {

        const controlToCompare = control.parent.get(this.appconfirmvalidation);
        if(controlToCompare && controlToCompare.value !== control.value){
         return{  'notEqual' : true };
        }
        return null;
   } 

}