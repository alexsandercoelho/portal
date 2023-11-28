import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
    providedIn: 'root'
})

export class PerfilService {
  constructor(private httpClient: HttpClient) {}
    getPerfilsData(){
      return [{
        "Nome": "Administrador",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "Nome": "Consultores",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "Nome": "Usuarios",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
      },
      {
        "Nome": "Desenvolvedores",
        "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
      }
    ]
  }
  createPerfil(perfil: any): Observable<any>{
    return this.httpClient.post<any>(environment.endPoint+ 'perfils', perfil);
  }

  updatePerfil(id : any, updatedPerfil: any): Observable<any>{
    return this.httpClient.put<any>(environment.endPoint + 'perfils/' + id, updatedPerfil);
  }

  deletePerfil(id :any): Observable<any>{
    return this.httpClient.delete<any>(environment.endPoint + 'perfils/' + id);
  }

}
