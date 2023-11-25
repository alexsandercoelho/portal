import { Component } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent {
  grupos!: any[];
  cols!: Column[];
  visible: boolean = false;
  grupoSelecionado: any = {
    Nome: "",
    propriedadeComparacao: "",
   };

  constructor(private grupoService: GrupoService) {}

  ngOnInit() {
    this.grupos = this.grupoService.getGruposData()
      this.cols = [
          {field: 'ID', header: 'ID'},
          {field: 'Nome', header: 'Nome'},
          {field: 'quantidadePessoas', header: 'Quantidade Pessoas'},
          {field: 'versoesAssociadas', header: 'Versoes Associadas'},
          {field: 'propriedadeComparacao', header: 'Propriedade Comparacao'},
          {field: 'dataInclusao', header: 'Data Inclusao'},
          {field: 'dataAtualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate(){
    this.visible = true;
  }
  showDialogEdit(item:any){
    this.grupoSelecionado = {...item};
    this.visible = true;
  }
  showDialogDelete(){
    this.visible = false;
    alert("Excluído com Sucesso!")
  }
  save(){
    alert("Salvo com Sucesso!")
   }
}
