
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})

export class PerfilService {
    getPerfilsData(){
      return [{
        "Nome Perfil": "Administrador",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "Nome Perfil": "Consultores",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
        },
        {
        "Nome Perfil": "Usuarios",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
      },
      {
        "Nome Perfil": "Desenvolvedores",
        "Data Inclusao": "2023-11-01T17:01:01Z",
        "Data Atualizacao": "2023-11-01T17:01:01Z"
      }
    ]
  }
}
