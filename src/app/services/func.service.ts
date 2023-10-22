
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})

export class FuncionalidadeService {
    getFuncaoData(){
      return [{
        "ID": 1,
        "Nome": "Visualizar Regras de Distribuição",
        },
        {
        "ID": 2,
        "Nome": "Criar Regras de Distribuição",
        },
        {
        "ID": 3,
        "Nome": "Excluir Regras de Distribuição",
      },
      {
        "ID": 4,
        "Nome": "Editar Regras de Distribuição",
      }
    ]
  }
}
