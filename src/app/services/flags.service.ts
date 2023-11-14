import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';



@Injectable({
    providedIn: 'root'
})

export class FlagsService {
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
  }

