import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColfondosComponent } from './colfondos/colfondos.component';
import { FormsModule } from '@angular/forms';
import { ColfondosserviceService } from './service/colfondosservice.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ColfondosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ColfondosserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
