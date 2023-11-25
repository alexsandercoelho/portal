import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
    providedIn: 'root'
})

export class MudancaService {
  constructor(private httpClient: HttpClient) {}
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
  createMudanca(mudanca: any): Observable<any>{
    return this.httpClient.post<any>(environment.endPoint+ 'mudancas', mudanca);
  }

  updateMudanca(id : any, updatedMudanca: any): Observable<any>{
    return this.httpClient.put<any>(environment.endPoint + 'mudancas/' + id, updatedMudanca);
  }

  deleteMudanca(id :any): Observable<any>{
    return this.httpClient.delete<any>(environment.endPoint + 'mudancas/' + id);
  }
}
