
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})

export class GrupoService {
  getGruposData(){
    return [
      {
        "ID": 10,
        "Nome":"Grupo A",
        "Quantidade Pessoas": 50,
        "Versoes Associadas":"5.4.2,5.4.1,5.0.0",
        "Propriedade Comparacao": "codigoCliente",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z",
        },
        {
        "ID": 20,
        "Nome":"Grupo B",
        "Quantidade Pessoas": 50,
        "Versoes Associadas":"5.4.2,5.4.1,5.0.0",
        "Propriedade Comparacao": "codigoCliente",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "ID": 30,
        "Nome":"Grupo C",
        "Quantidade Pessoas": 50,
        "Versoes Associadas":"5.4.2,5.4.1,5.0.0",
        "Propriedade Comparacao": "codigoCliente",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
        }
      ]
  }
}

