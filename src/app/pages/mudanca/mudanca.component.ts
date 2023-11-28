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
  campoSalvo: string = '';
  mudancaSelecionado: any = {
    ID: "",
    Nome: "",
  }

  constructor(private mudancaService: MudancaService)
    {
 }

  ngOnInit() {
    this.mudancas = this.mudancaService.getMudancasData()
      this.cols = [
          {field: 'nomeFlag', header: 'Nome'},
          {field: 'atributoAlterado', header: 'Atributo Alterado'},
          {field: 'situacaoAtual', header: 'Situação Atual'},
          {field: 'situacaoAnterior', header: 'Situação Anterior'},
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
    this.mostrarCampoSalvo();
}
mostrarCampoSalvo() {
  this.campoSalvo = this.mudancaSelecionado.campoQueFoiSalvo; // Substitua pelo campo que foi salvo
}
}


