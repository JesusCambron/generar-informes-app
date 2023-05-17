import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InformesComponent } from './components/informes/informes.component';
import { InformesFormComponent } from './components/informes/informes-form/informes-form.component';
import { TableComponent } from './utils/table/table.component';
import { ButtonComponent } from './utils/forms/button/button.component';
import { InputDateComponent } from './utils/forms/input-date/input-date.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InformesComponent,
    InformesFormComponent,
    TableComponent,
    HomeComponent,
    ButtonComponent,
    InputDateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
