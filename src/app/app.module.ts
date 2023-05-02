import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {SuperComponent} from './super/super.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    LesAmisComponent,
    UnAmiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
