import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
    providedIn: 'root'
})

export class VersaoService {
  constructor(private httpClient: HttpClient) {}
  getVersoesData(){
    return [
      {
          "ID": 1,
          "Nome":"Aplicacao Completa",
          "Versao":"5.4.2",
          "versaoMinimaInstalada": "5.4.1",
          "versaoMinimaContainer": "1.4.5",
          "dataInclusao": "2023-11-01T17:01:01Z",
          "dataAtualizacao": "2023-11-01T17:01:01Z",
          "destino": "\\server\devops"
          },
          {
          "ID": 2,
          "Nome":"Modulo de Login",
          "Versao":"1.0.0",
          "versaoMinimaInstalada": "0.0.0",
          "versaoMinimaContainer": "1.4.5",
          "dataInclusao": "2023-11-01T17:01:01Z",
          "dataAtualizacao": "2023-11-01T17:01:01Z",
          "destino": "\\server\devops\api"
          }
        ]
      }
      createVersao(versao: any): Observable<any>{
        return this.httpClient.post<any>(environment.endPoint+ 'versoes', versao);
      }

      updateVersao(id : any, updatedVersao: any): Observable<any>{
        return this.httpClient.put<any>(environment.endPoint + 'versoes/' + id, updatedVersao);
      }

      deleteVersao(id :any): Observable<any>{
        return this.httpClient.delete<any>(environment.endPoint + 'versoes/' + id);
      }

  }

