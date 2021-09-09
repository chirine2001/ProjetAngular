import {Address} from "../address";

export class AddressBuilder{
  private _type: string = "";
  private _rue: string = "";
  private _numero: number = -1;
  private _ville: string = "";
  private _pays: string = "";
  private _commentaire: string = "";
  private _phoneNumber: string = "";


  type(type: string): AddressBuilder{
    this._type= type;
    return this;
  }

  rue(rue: string): AddressBuilder{
    this._rue=rue;
    return this;
  }

  numero(numero: number): AddressBuilder{
    this._numero=numero;
    return this;
  }

  ville(ville: string): AddressBuilder{
    this._ville=ville;
    return this;
  }

  pays(pays: string): AddressBuilder{
    this._pays=pays;
    return this;
  }

  commentaire(commentaire: string): AddressBuilder{
    this._commentaire=commentaire;
    return this;
  }

  phoneNumber(phoneNumber: string): AddressBuilder{
    if(phoneNumber.length==10){
      this._phoneNumber=phoneNumber;
    }else{
      console.log("numéro pas au bon format")
    }
    return this;
  }

  build(): Address{
    return new Address(
      this._type,
      this._rue,
      this._numero,
      this._ville,
      this._pays,
      this._commentaire,
      this._phoneNumber
      );
  }
}
