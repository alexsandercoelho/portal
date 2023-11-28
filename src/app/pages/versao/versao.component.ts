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
  versaoSelecionado: any ={
    ID: "",
    Nome: "",
    Versao: "",
    VersaoMinimaInstalada: "",
    VersaoMinimaContainer: "",
  };
  cols!: Column[];

  constructor(private versaoService: VersaoService) {}

  ngOnInit() {
    this.versoes = this.versaoService.getVersoesData()
      this.cols = [
          {field: 'ID', header: 'ID'},
          {field: 'Nome', header: 'Nome'},
          {field: 'Versao', header: 'Versao'},
          {field: 'versaoMinimaInstalada', header: 'Versao Minima Instalada'},
          {field: 'versaoMinimaContainer', header: 'Versao Minima Container'},
          {field: 'destino', header: 'Destino'},
          {field: 'dataInclusao', header: 'Data Inclusao'},
          {field: 'dataAtualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogEdit(item:any){
    this.versaoSelecionado = {...item};
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
  saveVersaoMinInstal() {
    console.log('Saving Versao Minima Instalada:', this.versaoSelecionado.versaoMinimaInstalada);
  }
  saveVersaoMinCont() {
    console.log('Saving Versao Minima Container:', this.versaoSelecionado.versaoMinimaContainer);
  }
  saveDestino() {
    console.log('Saving Destino:', this.versaoSelecionado.destino);
  }
}
