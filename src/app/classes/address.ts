export class Address {
  private _type: string;
  private _rue: string;
  private _numero: number;
  private _ville: string;
  private _pays: string;
  private _commentaire: string;
  private _phoneNumber: string;


  constructor(type: string, rue: string, numero: number, ville: string, pays: string, commentaire: string, phoneNumber: string) {
    this._type = type;
    this._rue = rue;
    this._numero = numero;
    this._ville = ville;
    this._pays = pays;
    this._commentaire = commentaire;
    this._phoneNumber = phoneNumber;
  }


  get type(): string {
    return this._type;
  }

  get rue(): string {
    return this._rue;
  }

  get numero(): number {
    return this._numero;
  }

  get ville(): string {
    return this._ville;
  }

  get pays(): string {
    return this._pays;
  }

  get commentaire(): string {
    return this._commentaire;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }
}
