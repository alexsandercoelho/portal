import { FuncionalidadeService } from './../../services/func.service';
import { Component } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  visible: boolean = false;
  perfilSelecionado: any = {
    Nome: "",
    dataInclusao: new Date().toISOString(),
    dataAtualizacao: new Date().toISOString(),

  };
  perfils: any[] = [];
  cols!: Column[];
  funcao!: any[];
  displayDialog: boolean = false;
  selectedFuncionalidades: any[] = [];

  constructor(
    private perfilService: PerfilService,
    private funcionalidadeService: FuncionalidadeService
    ) {}

  ngOnInit() {
    this.perfils = this.perfilService.getPerfilsData();
    this.funcao = this.funcionalidadeService
      .getFuncaoData()
      .map((perfil) => perfil['Nome'])



      this.cols = [
          {field: 'Nome', header: 'Nome'},
          {field: 'dataInclusao', header: 'Data Inclusao'},
          {field: 'dataAtualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate() {
    this.perfilSelecionado = {
      nome: '',
      dataInclusao: '2023-11-01T17:01:01Z',
      dataAtualizacao: '2023-11-01T17:01:01Z'
    };
    this.displayDialog = true;
  }
  createPerfil() {
    const newPerfil = { ...this.perfilSelecionado };
    this.perfils.push(newPerfil);
    console.log('Novo Perfil criada:', newPerfil);
    this.displayDialog = false;
  }



  showDialogEdit(rowData: any){
    this.perfilSelecionado = {...rowData};
    this.visible = true;
  }
  deletePerfil(perfil: any) {
    const index = this.perfils.indexOf(perfil);
    if (index !== -1) {
      this.perfils.splice(index, 1);
      console.log('Perfil excluído com sucesso');
    } else {
      console.log('Falha ao excluir o Perfil');
    }
  }
  save(){
    this.visible = false;
  }
  saveFuncionalidades() {
    const selectedFuncionalidades = this.perfilSelecionado.selectedFuncionalidades;
    console.log('Saving Funcionalidades', selectedFuncionalidades);
    alert("Salvo com Sucesso!");
  }



}


