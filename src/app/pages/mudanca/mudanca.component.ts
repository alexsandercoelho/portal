import { MudancaService } from './../../services/mudanca.service';
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

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
  displayDialogsalvar: boolean = false;
  displayDialogexcluir: boolean = false;
  items!: MenuItem[];
  messageService: any;

  constructor(private mudancaService: MudancaService)
    {
 }

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
    this.visible = true;
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
  showDialogsalvar() {
    this.displayDialogsalvar = true;
  }
  closeDialogsalvar() {
    this.displayDialogsalvar = false;
  }
  showDialogexcluir() {
    this.displayDialogexcluir = true;
  }
  closeDialogexcluir() {
    this.displayDialogexcluir = false;
  }
}

