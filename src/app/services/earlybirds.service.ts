import { Earlybirds } from '../models/Earlybirds';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
    providedIn: 'root'
})

export class EarlybirdsService {
  constructor(private httpClient: HttpClient) {}
  getEarlysData(){
    return [
      {
        "Nome":"Grupo A",
        "quantidadePessoas": 50,
        "propriedadeComparacao": "codigoCliente",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {

        "id": "xxxx",
        "Nome":"Grupo B",
        "quantidadePessoas": 50,
        "propriedadeComparacao": "codigoCliente",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "nome":"Grupo C",
        "quantidadePessoas": 50,
        "propriedadeComparacao": "codigoCliente",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
      }
    ]
  }
createeEarly(early: any): Observable<any>{
  return this.httpClient.post<any>(environment.endPoint+ 'earlys', early);
}

updateEarly(id : any, updatedEarly: any): Observable<any>{
  return this.httpClient.put<any>(environment.endPoint + 'earlys/' + id, updatedEarly);
}

deleteEarly(id :any): Observable<any>{
  return this.httpClient.delete<any>(environment.endPoint + 'earlys/' + id);
}
}
