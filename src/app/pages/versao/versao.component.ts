import { Component } from '@angular/core';
import { VersaoService } from 'src/app/services/versao.service';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-versao',
  templateUrl: './versao.component.html',
  styleUrls: ['./versao.component.scss']
})
export class VersaoComponent {
  versoes!: any[];
  visible: boolean = false;
  cols!: Column[];

  constructor(private versaoService: VersaoService) {}

  ngOnInit() {
    this.versoes = this.versaoService.getVersoesData()
      this.cols = [
          {field: 'ID', header: 'ID'},
          {field: 'Nome', header: 'Nome'},
          {field: 'Versao', header: 'Versao'},
          {field: 'Versao Minima Instalada', header: 'Versao Minima Instalada'},
          {field: 'Versao Minima Container', header: 'Versao Minima Container'},
          {field: 'Data Inclusao', header: 'Data Inclusao'},
          {field: 'Data Atualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate(){
    this.visible = false;
  }
  showDialogEdit(){
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
