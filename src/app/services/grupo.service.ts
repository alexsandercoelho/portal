
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
    providedIn: 'root'
})

export class GrupoService {
  constructor(private httpClient: HttpClient) {}
  getGruposData(){
    return [
      {
        "ID": 10,
        "Nome":"Grupo A",
        "quantidadePessoas": 50,
        "versoesAssociadas":"5.4.2,5.4.1,5.0.0",
        "propriedadeComparacao": "codigoCliente",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z",
        },
        {
        "ID": 20,
        "Nome":"Grupo B",
        "quantidadePessoas": 50,
        "versoesAssociadas":"5.4.2,5.4.1,5.0.0",
        "propriedadeComparacao": "codigoCliente",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "ID": 30,
        "Nome":"Grupo C",
        "quantidadePessoas": 50,
        "versoesAssociadas":"5.4.2,5.4.1,5.0.0",
        "propriedadeComparacao": "codigoCliente",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        }
      ]
  }
  createGrupo(grupo: any): Observable<any>{
    return this.httpClient.post<any>(environment.endPoint+ 'grupos', grupo);
  }

  updateGrupo(id : any, updatedGrupo: any): Observable<any>{
    return this.httpClient.put<any>(environment.endPoint + 'grupos/' + id, updatedGrupo);
  }

  deleteGrupo(id :any): Observable<any>{
    return this.httpClient.delete<any>(environment.endPoint + 'grupos/' + id);
  }

}

