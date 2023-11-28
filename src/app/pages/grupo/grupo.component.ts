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
  displayDialog: boolean = false;
  grupos!: any[];
  cols!: Column[];
  visible: boolean = false;
  grupoSelecionado: any = {
    Nome: "",
    propriedadeComparacao: "",
   };
   nextID: number = 60;
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
  showDialogCreate() {
    this.grupoSelecionado = {
      ID: this.nextID.toString(),
      nome: 'Teste',
      dataInclusao: '2023-11-01T17:01:01Z',
      dataAtualizacao: '2023-11-01T17:01:01Z'
    };
    this.nextID++;
    this.displayDialog = true;
  }
  createGrupo() {
    const newGrupo = { ...this.grupoSelecionado };
    this.grupos.push(newGrupo);
    console.log('Novo Grupo criado:', newGrupo);
    this.displayDialog = false;
    }
  showDialogEdit(item:any){
    this.grupoSelecionado = {...item};
    this.visible = true;
  }
  deleteGrupo(grupo: any) {
    // Lógica para exclusão de uma flag específica
    const index = this.grupos.indexOf(grupo);
    if (index !== -1) {
      this.grupos.splice(index, 1);
      console.log('Grupo excluído com sucesso');
    } else {
      console.log('Falha ao excluir o Grupo');
    }
  }
  saveComparacao(){
    console.log('Saving Nome:', this.grupoSelecionado.propriedadeComparacao);
  }
  save(){
    alert("Salvo com Sucesso!")
   }
}
