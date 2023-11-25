import { PerfilService } from './../../services/perfil.service';
import { PessoaService } from './../../services/pessoa.service';
import { Component } from '@angular/core';



interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent {
  visible: boolean = false;
  pessoaSelecionado: any = {
    ID: "",
    Nome: ""
  };
  pessoas!: any[];
  perfils!: any[];
  cols!: Column[];

  constructor(
    private pessoaService: PessoaService,
    private perfilService: PerfilService,
    ) {}

  ngOnInit() {
    this.pessoas = this.pessoaService.getPessoasData();
    this.perfils = this.perfilService
      .getPerfilsData()
      .map((pessoa) => pessoa['Nome']);


    this.cols = [
          {field: 'ID', header: 'ID'},
          {field: 'Nome', header: 'Nome'},
          {field: 'Data Inclusao', header: 'Data Inclusao'},
          {field: 'Data Atualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate(){
    this.visible = true;
  }
  showDialogEdit(item:any){
    this.pessoaSelecionado = {...item};
    this.visible = true;
  }

  showDialogDelete(){
    this.visible = false;
    alert("Excluído com Sucesso!")
  }
  save(){
  }

}



