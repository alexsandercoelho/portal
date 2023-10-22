import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';



@Injectable({
    providedIn: 'root'
})

export class VersaoService {
  getVersoesData(){
    return [
      {
          "ID": 1,
          "Nome":"Aplicacao Completa",
          "Versao":"5.4.2",
          "Versao Minima Instalada": "5.4.1",
          "Versao Minima Container": "1.4.5",
          "Data Inclusao": "2023-11-01T17:01:01Z",
          "Data Atualizacao": "2023-11-01T17:01:01Z"
          },
          {
          "ID": 2,
          "Nome":"Modulo de Login",
          "Versao":"1.0.0",
          "Versao Minima Instalada": "0.0.0",
          "Versao Minima Container": "1.4.5",
          "Data Inclusao": "2023-11-01T17:01:01Z",
          "Data Atualizacao": "2023-11-01T17:01:01Z"
          }
        ]
      }
  }

