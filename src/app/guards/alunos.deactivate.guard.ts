import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent>{
    canDeactivate(
        component: AlunoFormComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean>|boolean {
        console.log('Chamou o deactivate!')
        return component.pudeMudarRota();
    }
}