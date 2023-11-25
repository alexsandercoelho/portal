
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class RegraService {
  constructor(private httpClient: HttpClient) {}
    getRegrasData(){
      return [
        {
              "ID": 40,
              "Nome": "Regra A",
              "Nome Pacote":"Aplicacao Completa",
              "Versao Pacote": "5.0.0",
              "Grupos Distribuicao":"Grupo A, Grupo B",
              "Data Inclusao": "2023-11-01T17:01:01Z",
              "Data Atualizacao": "2023-11-01T17:01:01Z"
              },
              {
              "ID": 41,
              "Nome": "Regra B",
              "Nome Pacote":"Aplicacao Completa",
              "Versao Pacote": "5.0.0",
              "Grupos Distribuicao": "Grupo A, Grupo B, Grupo C",
              "Data Inclusao": "2023-11-01T17:01:01Z",
              "Data Atualizacao": "2023-11-01T17:01:01Z"
              },
              {
              "ID": 42,
              "Nome": "Regra C",
              "Nome Pacote":"Modulo de Login",
              "Versa oPacote": "5.0.0",
              "Grupos Distribuicao":"Grupo A, Grupo B, Grupo C",
              "Data Inclusao": "2023-11-01T17:01:01Z",
              "Data Atualizacao": "2023-11-01T17:01:01Z"
            }
        ]
      }
      createRegra(regra: any): Observable<any>{
        return this.httpClient.post<any>(environment.endPoint+ 'regras', regra);
      }

      updateRegra(id : any, updatedRegra: any): Observable<any>{
        return this.httpClient.put<any>(environment.endPoint + 'regras/' + id, updatedRegra);
      }

      deleteRegra(id :any): Observable<any>{
        return this.httpClient.delete<any>(environment.endPoint + 'regras/' + id);
      }
}
