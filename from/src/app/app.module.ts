import { routes } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TDFComponent } from './tdf/tdf.component';
import { confirmvalidationdirective } from './tdf/confirm-validation.directive';
import { RFComponent } from './rf/rf.component';
import { RegistationTDFComponent } from './registation-tdf/registation-tdf.component';
import {AuthserviceService } from './authservice.service';
import {HttpClientModule} from '@angular/common/http';

import { Routes , RouterModule } from '@angular/router';

// export const appRoutes: Routes = [
  
//   { path: 'reg',
//     component:RegistationTDFComponent
//   },
//   { path: '',
//   redirectTo: 'reg',
//   pathMatch: 'full'
// },
// { path: '**', component: RegistationTDFComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
    confirmvalidationdirective,
    TDFComponent,
    RFComponent,
    RegistationTDFComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
 
  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
