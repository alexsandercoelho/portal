import { Component } from '@angular/core';
import { MudancaService } from 'src/app/services/mudanca.service';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-mudanca',
  templateUrl: './mudanca.component.html',
  styleUrls: ['./mudanca.component.scss']
})
export class mudancaComponent {
  mudancas!: any[];
  visible: boolean = false;
  cols!: Column[];

  constructor(private mudancaService: MudancaService) {}

  ngOnInit() {
    this.mudancas = this.mudancaService.getMudancasData()
      this.cols = [
          {field: 'id', header: 'ID'},
          {field: 'nomeFlag', header: 'Nome'},
          {field: 'atributoAlterado', header: 'Versao'},
          {field: 'situacaoAtual', header: 'Versao Minima Instalada'},
          {field: 'situacaoAnterior', header: 'Versao Minima Container'},
          {field: 'dataInclusao', header: 'Data Inclusao'},
          {field: 'dataAtualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate(){
    this.visible = false;
  }
  showDialogEdit(){
    this.visible = true;
  }
  showDialogDelete(){
    this.visible = true;
    alert("Excluído com Sucesso!")
    this.visible = false;
  }
  save(){
    alert("Salvo com Sucesso!")
  }

}
