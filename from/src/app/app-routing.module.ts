import { RegistationTDFComponent } from './registation-tdf/registation-tdf.component';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

export const routes : Routes = [
    {path : 'reg', component:RegistationTDFComponent }];

@NgModule({
 imports :[RouterModule.forRoot(routes)],
 exports : [RouterModule]
})
export class AppRoutingModule { }
