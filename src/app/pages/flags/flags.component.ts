import { Component } from '@angular/core';
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
  flags!: any[];
  visible: boolean = false;
  flagSelecionado: any = {
    ID: "",
    Nome: "",
    Chave: "",
    earlyBirds: "",
    Situação: "",
    dataInclusao: "",
    dataAtualizacao: ""
  };
  cols!: Column[];
  checked: boolean = false;

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
  showDialogCreate(){
    this.visible = true;
  }
  showDialogEdit(item:any){
    this.flagSelecionado = {...item};
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

}
