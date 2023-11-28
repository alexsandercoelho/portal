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
  displayDialog: boolean = false;

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
  showDialogCreate() {
    this.pessoaSelecionado = {
      nome: 'Teste',
      dataInclusao: '2023-11-01T17:01:01Z',
      dataAtualizacao: '2023-11-01T17:01:01Z'
    };
    this.displayDialog = true;
  }
  createPessoa() {
    const newPessoa = { ...this.pessoaSelecionado };
    this.pessoas.push(newPessoa);
    console.log('Nova Pessoa criada:', newPessoa);
    this.displayDialog = false;
    }



  showDialogEdit(item:any){
    this.pessoaSelecionado = {...item};
    this.visible = true;
  }

  deletePessoa(pessoa: any) {
    // Lógica para exclusão de uma flag específica
    const index = this.pessoas.indexOf(pessoa);
    if (index !== -1) {
      this.pessoas.splice(index, 1);
      console.log('Pessoa excluída com sucesso');
    } else {
      console.log('Falha ao excluir a Pessoa');
    }
  }
  save(){
  }

}



