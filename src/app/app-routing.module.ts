import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from './modulo/modulo.component';
import { RegistrofComponent } from './registrof/registrof.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {
    path:'inicio',
    component: ModuloComponent
  },
  {
    path:'registrar_factura',
    component: RegistrofComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: "**", redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
