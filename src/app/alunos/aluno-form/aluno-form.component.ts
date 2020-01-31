import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {
  aluno: any;
  inscricao: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
    });

    if(this.aluno === null) {
      this.aluno = {};
    }
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('Nome do aluno mudou...')
  }

  pudeMudarRota() {

    if(this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?!')

    }

    return true;

  }

}
