import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
    providedIn: 'root'
})

export class FlagsService {
  constructor(private httpClient: HttpClient) {}
  getFlagsData(){
    return [
      {
        "id": "xxxx",
        "nome":"Flag para a funcionalidade A",
        "chave":"FL_FUNC_A",
        "earlyBirds": "Grupo A, Grupo B",
        "situacao": true,
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "id": "xxxx",
        "nome":"Flag para a funcionalidade  B",
        "chave":"FL_FUNC_B",
        "earlyBirds": null,
        "situacao": false,
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "nome":"Flag para a funcionalidade  C",
        "chave":"FL_FUNC_C",
        "earlyBirds": "Grupo C",
        "situacao": true,
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
          }
        ]
      }
      createFlag(flag: any): Observable<any>{
        return this.httpClient.post<any>(environment.endPoint+ 'flags', flag);
      }

      updateFlag(id : any, updatedFlag: any): Observable<any>{
        return this.httpClient.put<any>(environment.endPoint + 'flags/' + id, updatedFlag);
      }

      deleteFlag(id :any): Observable<any>{
        return this.httpClient.delete<any>(environment.endPoint + 'flags/' + id);
      }
  }

