import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';



@Injectable({
    providedIn: 'root'
})

export class MudancaService {
  getMudancasData(){
    return [
      {
        "id": "xxxx",
        "nomeFlag":"Flag para a funcionalidade A",
        "atributoAlterado":"Situação",
        "situacaoAtual": "Desativado", 
        "situacaoAnterior": "Ativado",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "id": "xxxx",
        "nomeFlag":"Flag para a funcionalidade B",
        "atributoAlterado":"Situação",
        "situacaoAtual": "Desativado", 
        "situacaoAnterior": "Ativado",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "id": "xxxx",
        "nomeFlag":"Flag para a funcionalidade B",
        "atributoAlterado":"Early Birds",
        "situacaoAtual": "Grupo A, Grupo B", 
        "situacaoAnterior": "Grupo A",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
      }
    ]
  }
}
