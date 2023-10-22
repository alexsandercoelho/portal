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
  perfils!: any[];
  cols!: Column[];
  funcao!: any[];

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
          {field: 'Nome Perfil', header: 'Nome Perfil'},
          {field: 'Data Inclusao', header: 'Data Inclusao'},
          {field: 'Data Atualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate(){
    this.visible = true;

  }
  showDialogEdit(){
    this.visible = false;
  }
  showDialogDelete(){
    this.visible = true;
    console.log(this.perfils)
    alert("Excluído com Sucesso!")
  }
  save(){
    alert("Salvo com Sucesso!")
  }


}


