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
  pessoas!: any[];
  perfils!: any[];
  cols!: Column[];

  constructor(
    private pessoaService: PessoaService,
    private perfilService: PerfilService
    ) {}

  ngOnInit() {
    this.pessoas = this.pessoaService.getPessoasData();
    this.perfils = this.perfilService
      .getPerfilsData()
      .map((pessoa) => pessoa['Nome Perfil']);


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
  showDialogEdit(){
    this.visible = false;
  }
  showDialogDelete(){
    this.visible = true;
    console.log(this.pessoas)
    alert("Excluído com Sucesso!")
  }
  save(){
    alert("Salvo com Sucesso!")
  }

}


