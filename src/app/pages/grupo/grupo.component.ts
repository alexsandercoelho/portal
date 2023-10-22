import { Component } from '@angular/core';
import { GrupoService } from 'src/app/services/grupo.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss']
})
export class GrupoComponent {
  grupos!: any[];
  cols!: Column[];
  visible: boolean = false;

  constructor(private grupoService: GrupoService) {}

  ngOnInit() {
    this.grupos = this.grupoService.getGruposData()
      this.cols = [
          {field: 'ID', header: 'ID'},
          {field: 'Nome', header: 'Nome'},
          {field: 'Quantidade Pessoas', header: 'Quantidade Pessoas'},
          {field: 'Versoes Associadas', header: 'Versoes Associadas'},
          {field: 'Propriedade Comparacao', header: 'Propriedade Comparacao'},
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
    this.visible = false;
    console.log(this.grupos)
    alert("Excluído com Sucesso!")
  }
}
