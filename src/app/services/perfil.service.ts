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
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "Nome": "Consultores",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "Nome": "Usuarios",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
      },
      {
        "Nome": "Desenvolvedores",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
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
