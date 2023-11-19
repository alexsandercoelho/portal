import { Earlybirds } from '../models/Earlybirds';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';



@Injectable({
    providedIn: 'root'
})

export class EarlybirdsService {
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
}

