import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggingService } from './logging.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CustomDirective } from './custom.directive';
import { CustomDirectiveUsingRendererDirective } from './custom-directive-using-renderer.directive';
import { CustomStructuralDirectiveDirective } from './custom-structural-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NewUserComponent,
    CustomDirective,
    CustomDirectiveUsingRendererDirective,
    CustomStructuralDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
