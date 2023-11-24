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
  earlys!: any[];
  visible: boolean = false;
  cols!: Column[];

  constructor(private earlybirdsService: EarlybirdsService) {}

  ngOnInit() {
    this.earlys = this.earlybirdsService.getEarlysData()
      this.cols = [
          {field: 'Nome', header: 'Nome'},
          {field: 'quantidadePessoas', header: 'Quantidade Pessoas'},
          {field: 'propriedadeComparacao', header: 'Propriedade Comparacao'},
          {field: 'dataInclusao', header: 'Data Inclusao'},
          {field: 'dataAtualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate(){
    this.visible = true;
  }
  showDialogEdit(){
    this.visible = false;
  }
  showDialogDelete(){
    this.visible = false;
    alert("Excluído com Sucesso!")
    this.visible = false;
  }
  save(){
    alert("Salvo com Sucesso!")
  }

}
