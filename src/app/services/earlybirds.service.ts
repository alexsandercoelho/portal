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
        "nome":"Grupo A",
        "quantidadePessoas": 50,
        "propriedadeComparacao": "codigoCliente",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {

        "id": "xxxx",
        "nome":"Grupo B",
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
  //getEarlysData(): Observable<Earlybirds[]> {
  //  return this.httpClient.get<Earlybirds[]>(`${environment.endPoint}earlys`);
 // }

  getEarlyById(id: string): Observable<Earlybirds> {
    return this.httpClient.get<Earlybirds>(`${environment.endPoint}api/EarlyBird/${id}`);
  }

  createEarly(early: Earlybirds): Observable<Earlybirds> {
    return this.httpClient.post<Earlybirds>(`${environment.endPoint}earlys`, early);
  }

  updateEarly(id: string, updatedEarly: Earlybirds): Observable<Earlybirds> {
    return this.httpClient.put<Earlybirds>(`${environment.endPoint}earlys/${id}`, updatedEarly);
  }

  deleteEarly(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.endPoint}earlys/${id}`);
  }
}
