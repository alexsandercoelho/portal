
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';

@Injectable({
    providedIn: 'root'
})

export class ValoresService {
    getValorData(){
      return [{
        "ID": 1,
        "Nome": "Valor A",
        },
        {
        "ID": 2,
        "Nome": "Valor B",
        },
        {
        "ID": 3,
        "Nome": "Valor C",
      },
      {
        "ID": 4,
        "Nome": "Valor D",
      }
    ]
  }
}
