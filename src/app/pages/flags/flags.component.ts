import { Component } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { FlagsService } from 'src/app/services/flags.service';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent {
  checkboxTrueChecked: boolean = false;
  checkboxFalseChecked: boolean = false;
  flagSelecionado: any = {
    ID: "",
    Nome: "",
    Chave: "",
    earlyBirds: "",
    Situação: "",
    dataInclusao: "",
    dataAtualizacao: ""
  };
  flags: any[] = [];
  visible: boolean = false;
  cols!: Column[];
  displayDialog: boolean = false;



  constructor(private flagsService: FlagsService) {}

  ngOnInit() {
    this.flags = this.flagsService.getFlagsData()
      this.cols = [
          {field: 'id', header: 'ID'},
          {field: 'nome', header: 'Nome'},
          {field: 'chave', header: 'Chave'},
          {field: 'earlyBirds', header: 'Earlys Birds'},
          {field: 'situacao', header: 'Situação'},
          {field: 'dataInclusao', header: 'Data Inclusao'},
          {field: 'dataAtualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogEdit(item:any){
    this.flagSelecionado = {...item};
    this.visible = true;
  }

    showDialogCreate() {
    this.flagSelecionado = {
      nome: 'Flag para a funcionalidade  D',
      chave: 'FL_FUNC_D',
      situacao: 'false',
      earlybirds: 'Grupo D',
      dataInclusao: '2023-11-01T17:01:01Z',
      dataAtualizacao: '2023-11-01T17:01:01Z'
    };
    this.displayDialog = true;
  }

  createFlag() {
    const newFlag = { ...this.flagSelecionado }; // Copia os dados do formulário
    this.flags.push(newFlag); // Adiciona a nova flag à lista de flags
    console.log('Nova flag criada:', newFlag);
    this.displayDialog = false;
    // Reinicia os campos do formulário após a criação da flag
  }


  deleteFlag(flag: any) {
    // Lógica para exclusão de uma flag específica
    const index = this.flags.indexOf(flag);
    if (index !== -1) {
      this.flags.splice(index, 1);
      console.log('Flag excluída com sucesso');
    } else {
      console.log('Falha ao excluir a flag');
    }
  }


  saveNome() {
    console.log('Saving Nome:', this.flagSelecionado.nome);
  }
  saveEarlyBirds() {
    console.log('Saving Early Birds:', this.flagSelecionado.earlybirds);
  }

  save() {
    if (this.checkboxTrueChecked) {
      this.saveSelected(); // Chama a função para salvar quando checkboxTrue está marcado
    } else if (this.checkboxFalseChecked) {
      this.saveNotSelected(); // Chama a função para salvar quando checkboxFalse está marcado
    } else {
      // Caso nenhum checkbox esteja marcado
      console.log('Please select a checkbox');
    }
  }

  saveSelected() {
    // Lógica para salvar quando checkboxTrue está marcado
    console.log('Saving selected checkbox');
  }

  saveNotSelected() {
    // Lógica para salvar quando checkboxFalse está marcado
    console.log('Saving not selected checkbox');
  }

  updateCheckboxStates() {
    this.checkboxFalseChecked = !this.checkboxTrueChecked;
    this.checkboxTrueChecked = !this.checkboxFalseChecked;
  }

}
