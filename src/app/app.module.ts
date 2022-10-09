import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { AlterarComponent } from './components/alterar/alterar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AdicionarComponent,
    AlterarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfigFunction),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
