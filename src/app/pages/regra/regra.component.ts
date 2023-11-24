import { RegraService } from './../../services/regra.service';
import { Component } from '@angular/core';
import { Message } from 'primeng/api'

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-regra',
  templateUrl: './regra.component.html',
  styleUrls: ['./regra.component.scss']
})
export class RegraComponent {
  regras!: any[];
  visible: boolean = false;
  cols!: Column[];


  constructor(private regraService: RegraService) {}

  ngOnInit() {
    this.regras = this.regraService.getRegrasData()
      this.cols = [
          {field: 'ID', header: 'ID'},
          {field: 'Nome', header: 'Nome'},
          {field: 'Nome Pacote', header: 'Nome Pacote'},
          {field: 'Versao Pacote', header: 'Versao Pacote'},
          {field: 'Grupos Distribuicao', header: 'Grupos Distribuicao'},
          {field: 'Data Inclusao', header: 'Data Inclusao'},
          {field: 'Data Atualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate(){
    this.visible = true;
  }
  showDialogEdit(){
    this.visible = true;
  }
  showDialogDelete(){
    console.log(this.regras)
    alert("Excluído com Sucesso!")
  }
  save(){
   alert("Salvo com Sucesso!")
  }

}

