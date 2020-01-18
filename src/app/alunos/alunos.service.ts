import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {
      id: 1,
      nome: 'Victor Vinicius Sued Flávio',
      email: 'visued@gmail.com'
    }, {
      id: 2,
      nome: 'Batman XPTO',
      email: 'batman@gmail.com'
    }, {
      id: 3,
      nome: 'Dart',
      email: 'dart@gmail.com'
    }, {
      id: 4,
      nome: 'Morcegao',
      email: 'morcego@gmail.com'
    },
  ]

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if(aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
  constructor() { }
}
