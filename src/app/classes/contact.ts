import { Address} from "./address";

export class Contact {
  private _nom: string;
  private _prenom: string;
  private _birthday: Date
  private _addresses: Array<Address>;


  constructor(nom: string, prenom: string, birthday: Date) {
    this._nom = nom;
    this._prenom = prenom;
    this._birthday = birthday;
    this._addresses = new Array<Address>();
  }


  get nom(): string {
    return this._nom;
  }

  get prenom(): string {
    return this._prenom;
  }

  get birthday(): Date {
    return this._birthday;
  }

  get addresses(): Array<Address> {
    return this._addresses;
  }


  set nom(value: string) {
    this._nom = value;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  set birthday(value: Date) {
    this._birthday = value;
  }

//cette méthode permet d'ajouter une addresse,
  // elle gère aussi l'unicité d'un type d'adresse
  // en effet, dans la consigne ils demandent que le type d'adresse soit unique,
  // c'est à dire que on ne peut avoir qu'une adresse domicile, une seule 'travail', etc, etc
  public addAddress(address: Address ) : boolean {
    for(var add of this._addresses){
      //donc là si ce type existe déjà, je le signale
      // et n'ajouter pas la nouvelle adresse au contact
      if(address.type == add.type) {
        console.log("can not add this address\nbecause an address with the type " + address.type + " already exists");
        return false;
      }
    }
    // et si une fois qu'on a fait tout le tour de la boucle,
    // le type d'adresse n'existe pas déjà, bah on ajoute la nouvelle adresse
    // à la liste d'adresse du contact, en utilisant la méthode push de la classe Array
    this._addresses.push(address);
    return true;
  }
}
