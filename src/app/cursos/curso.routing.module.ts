import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursosRoutes: Routes  = [
    { path: '', component: CursosComponent },
    { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cursosRoutes)
  ],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
