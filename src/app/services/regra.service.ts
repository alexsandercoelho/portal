
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})

export class RegraService {
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
}
