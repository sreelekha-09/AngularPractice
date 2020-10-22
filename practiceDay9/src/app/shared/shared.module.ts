import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { ColorDirective } from './color.directive';



@NgModule({
  declarations: [ServerComponent, ColorDirective],
  imports: [
    CommonModule
  ],
  exports:[
    ServerComponent,
    ColorDirective
  ]
})
export class SharedModule { }
