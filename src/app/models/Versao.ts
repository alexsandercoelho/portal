export class Versao
{
    IdVersao: number;
    NomePacote: string;
    Versao: number;
    VersaoInst: number;  //Versao Instalada
    VersaoMinContainer: number; //Versao Minima Container
    DataAtualizacao: Date;
    DataInclusao: Date;
}
/*
Mock
{
  “id”: “xxxx”,
  “nome”:”Aplicacao Completa”
  “versao”:”5.4.2”,
  “versaoMinimaInstalada”: “5.4.1”,
  “versaoMinimaContainer”: “1.4.5”,
  “dataInclusao”: “2023-11-01T17:01:01Z”,
  “dataAtualizacao”: “2023-11-01T17:01:01Z”
 }
*/
