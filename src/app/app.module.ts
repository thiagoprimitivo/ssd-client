import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SystemAddComponent } from './system-add/system-add.component';
import { SystemEditComponent } from './system-edit/system-edit.component';
import { SystemSearchComponent } from './system-search/system-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemAddComponent,
    SystemEditComponent,
    SystemSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
