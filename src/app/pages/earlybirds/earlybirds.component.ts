import { ValoresService } from './../../services/valores.service';
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
    dataInclusao: new Date().toISOString(),
    dataAtualizacao: new Date().toISOString(),
 };
  cols!: Column[];
  earlys!: any[];
  displayDialog: boolean = false;
  selectedValores: string[] = [];
  valores: string[] =  ["valorA","valorB","valorC","valorD"];
  novoValor: string = '';

  constructor(
    private earlybirdsService: EarlybirdsService,
    private valoresService: ValoresService
    ) {}

  ngOnInit() {
    this.earlys = this.earlybirdsService.getEarlysData();


      this.cols = [
          {field: 'nome', header: 'Nome Grupo'},
          {field: 'quantidadePessoas', header: 'Quantidade Pessoas'},
          {field: 'propriedadeComparacao', header: 'Propriedade Comparacao'},
          {field: 'dataInclusao', header: 'Data Inclusao'},
          {field: 'dataAtualizacao', header: 'Data Atualizacao'}
      ];

  }
  showDialogCreate() {
    this.earlySelecionado = {
      nome: '',
      propriedadeComparacao: '',
      dataInclusao: '2023-11-01T17:01:01Z',
      dataAtualizacao: '2023-11-01T17:01:01Z'
    };
    this.displayDialog = true;
  }
  createEarly() {
    const newEarly = { ...this.earlySelecionado };
    this.earlys.push(newEarly);
    console.log('Novo Early criada:', newEarly);
    this.displayDialog = false;
  }
  showDialogEdit(item:any){
    this.earlySelecionado = {...item};
    this.visible = true;
  }
  deleteEarly(early: any) {
    const index = this.earlys.indexOf(early);
    if (index !== -1) {
      this.earlys.splice(index, 1);
      console.log('Early excluído com sucesso');
    } else {
      console.log('Falha ao excluir o Early');
    }
  }
  adicionarValor() {
    if (this.novoValor && !this.selectedValores.includes(this.novoValor)) {
      this.selectedValores = [...this.selectedValores, this.novoValor];
      this.novoValor = ''; // Limpar o campo de entrada depois de adicionar
    }
  }
  removerValor(valor: string) {
    this.selectedValores = this.selectedValores.filter(item => item !== valor);
  }

  save(){
    alert("Salvo com Sucesso!")
  }

}
