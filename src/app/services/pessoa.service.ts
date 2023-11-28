
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})



export class PessoaService {
  constructor(private httpClient: HttpClient) {}
   getPessoasData(){
    return  [{
      "ID": 1,
      "Nome": "Alex",
      "dataInclusao": "2023-11-01T17:01:01Z",
      "dataAtualizacao": "2023-11-01T17:01:01Z"
      },
      {
      "ID": 2,
      "Nome": "Joao Paulo",
      "dataInclusao": "2023-11-01T17:01:01Z",
        "dataAtualizacao": "2023-11-01T17:01:01Z"
      },
      {
      "ID": 3,
      "Nome": "Jose da Silva",
      "dataInclusao": "2023-11-01T17:01:01Z",
      "dataAtualizacao": "2023-11-01T17:01:01Z"
    },
    {
      "ID": 4,
      "Nome": "Jose Pereira da Silva",
      "dataInclusao": "2023-11-01T17:01:01Z",
      "dataAtualizacao": "2023-11-01T17:01:01Z"
    },
    {
      "ID": 5,
      "Nome": "Enzo Gabriel",
      "dataInclusao": "2023-11-01T17:01:01Z",
      "dataAtualizacao": "2023-11-01T17:01:01Z"
    }

  ]}
  createPessoa(pessoa: any): Observable<any>{
    return this.httpClient.post<any>(environment.endPoint+ 'pessoas', pessoa);
}

updatePessoa(id : any, updatedPessoa: any): Observable<any>{
    return this.httpClient.put<any>(environment.endPoint + 'pessoas/' + id, updatedPessoa);
}

deletePessoa(id :any): Observable<any>{
    return this.httpClient.delete<any>(environment.endPoint + 'pessoas/' + id);
}



}
