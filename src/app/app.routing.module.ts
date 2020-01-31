import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes  = [
    { path: 'cursos', loadChildren: 'src/app/cursos/cursos.module#CursosModule', canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad: [AuthGuard]},
    { path: 'alunos', loadChildren: 'src/app/alunos/alunos.module#AlunosModule', canActivate: [AuthGuard], canActivateChild: [AlunosGuard], canLoad: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PaginaNaoEncontradaComponent },

    // { path: 'cursos', component: CursosComponent },
    // { path: 'curso/:id', component: CursoDetalheComponent },
    // { path: 'nao-encontrado', component: CursoNaoEncontradoComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
