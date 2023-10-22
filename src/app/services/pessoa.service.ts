
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})

export class PessoaService {
   getPessoasData(){
    return  [{
      "ID": 1,
      "Nome": "Alex",
      "Data Inclusao": "2023-11-01T17:01:01Z",
      "Data Atualizacao": "2023-11-01T17:01:01Z"
      },
      {
      "ID": 2,
      "Nome": "Joao Paulo",
      "Data Inclusao": "2023-11-01T17:01:01Z",
      "Data Atualizacao": "2023-11-01T17:01:01Z"
      },
      {
      "ID": 3,
      "Nome": "Jose da Silva",
      "Data Inclusao": "2023-11-01T17:01:01Z",
      "Data Atualizacao": "2023-11-01T17:01:01Z"
    },
    {
      "ID": 4,
      "Nome": "Jose Pereira da Silva",
      "Data Inclusao": "2023-11-01T17:01:01Z",
      "Data Atualizacao": "2023-11-01T17:01:01Z"
    },
    {
      "ID": 5,
      "Nome": "Enzo Gabriel",
      "Data Inclusao": "2023-11-02T20:01:01Z",
      "Data Atualizacao": "2023-11-02T20:01:01Z"
    }
  ]}
}
