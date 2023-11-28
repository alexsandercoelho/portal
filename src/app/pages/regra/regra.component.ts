import { Grupo } from './../../models/Grupo';
import { Versao } from './../../models/Versao';
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
  selectedGrupos: any[] = [];
  displayDialog: boolean = false;
  regras: any[] = [];
  pacotes: any[] = ["Aplicacao Completa","Modulo de Login"];
  versoes: any[] = ["5.0.1","5.0.2"];
  grupoDistribuicao: any[] = ["Grupo A","Grupo B"];
  visible: boolean = false;
  regraSelecionado: any = {
    ID: "",
    Nome: "",
  }
  cols!: Column[];
  nextID: number = 42;


  constructor(private regraService: RegraService) {}

  ngOnInit() {
    this.regras = this.regraService.getRegrasData()
      this.cols = [
          {field: 'Nome', header: 'Nome'},
          {field: 'nomePacote', header: 'Nome Pacote'},
          {field: 'Versao', header: 'Versao Pacote'},
          {field: 'Grupo', header: 'Grupos Distribuicao'},
          {field: 'dataInclusao', header: 'Data Inclusao'},
          {field: 'dataAtualizacao', header: 'Data Atualizacao'}
      ];
  }
  showDialogCreate() {
    this.regraSelecionado = {
      ID: this.nextID.toString(),
      nome: 'Teste',
      dataInclusao: new Date().toISOString(),
      dataAtualizacao: new Date().toISOString(),
    };
    this.nextID++;
    this.displayDialog = true;
  }
  createRegra() {
    const newRegra = { ...this.regraSelecionado };
    this.regras.push(newRegra);
    console.log('Nova Regra criada:', newRegra);
    this.displayDialog = false;
    }
  showDialogEdit(item:any){
    this.regraSelecionado = {...item};
    this.visible = true;
  }
  deleteRegra(regra: any) {
    const index = this.regras.indexOf(regra);
    if (index !== -1) {
      this.regras.splice(index, 1);
      console.log('Regra excluído com sucesso');
    } else {
      console.log('Falha ao excluir a Regra');
    }
  }
  savenomePacote() {
    const nomePacote = this.regraSelecionado.nomePacote;
    console.log('Saving Nome Pacote', nomePacote);
    alert("Salvo com Sucesso!");
  }
  saveVersao() {
    const Versao = this.regraSelecionado.Versao;
    console.log('Saving Versão', Versao);
    alert("Salvo com Sucesso!");
  }
  saveGrupo() {
    const Grupo = this.regraSelecionado.Grupo;
    console.log('Saving Grupo', Grupo);
    alert("Salvo com Sucesso!");
  }
}

