
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
    FooterComponent,
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
   
  ],
  exports: [
    NavigatorComponent,
    FooterComponent,
    
  ]
})
export class CoreModule { }
