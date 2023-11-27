import { Component } from '@angular/core';
import { EarlybirdsService } from 'src/app/services/earlybirds.service';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-earlybirds',
  templateUrl: './earlybirds.component.html',
  styleUrls: ['./earlybirds.component.scss']
})
export class EarlybirdsComponent {
  visible: boolean = false;
  earlySelecionado: any = {
    Nome: "",
    quantidadePessoas: "",
    propriedadeComparacao: "",
    dataInclusao: "",
    dataAtualizacao: ""
 };
  cols!: Column[];
  earlys!: any[];

  constructor(
    private earlybirdsService: EarlybirdsService
    ) {}

  ngOnInit() {
    this.earlys = this.earlybirdsService.getEarlysData()
      this.cols = [
          {field: 'Nome', header: 'Nome'},
          {field: 'quantidadePessoas', header: 'quantidadePessoas'},
          {field: 'propriedadeComparacao', header: 'propriedadeComparacao'},
          {field: 'dataInclusao', header: 'dataInclusao'},
          {field: 'dataAtualizacao', header: 'dataAtualizacao'}
      ];
  }
  showDialogCreate(){
    this.visible = false;
  }
  showDialogEdit(item:any){
    this.earlySelecionado = {...item};
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
