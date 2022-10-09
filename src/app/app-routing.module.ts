import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component'
import { AlterarComponent } from './components/alterar/alterar.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch:'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'add', component: AdicionarComponent},
  { path: 'edit/:id', component: AlterarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
