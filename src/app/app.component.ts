import {Component, NgModule} from '@angular/core';
import { Contact} from "./classes/contact";
import {FormControl, FormGroup} from "@angular/forms";
import {AddressBuilder} from "./classes/builders/AddressBuilder";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'poc-angular-contact';
  carnets: Array<Contact> = new Array<Contact>();

  isCallable = true;

  jean = new Contact("Legros","Jean", new Date(2000,0,25));
  fabrice = new Contact("Leroux","Fabrice", new Date(1998,4,22));
  david = new Contact("Cohen","David", new Date(2001,8,24));
  emilie = new Contact("Dussieux","Emilie", new Date(2003,10,17));
  nina = new Contact("Leblanc","Nina", new Date(1990,2,23));
  init(){
    let jeanAddress = new AddressBuilder()
      .type("domicile")
      .rue("Avenue Henri Dunant")
      .numero(10)
      .ville("Sucy-en-Brie")
      .pays("Belgique")
      .phoneNumber("0671234567")
      .build()
    this.jean.addAddress(jeanAddress);

    let fabriceAddress = new AddressBuilder()
      .type("domicile")
      .rue("Rue de la victoire")
      .numero(10)
      .ville("Toronto")
      .pays("Canada")
      .phoneNumber("0606060606")
      .build()
    this.fabrice.addAddress(fabriceAddress);

    let davidAddress = new AddressBuilder()
      .type("domicile")
      .rue("rue du sabre")
      .numero(2)
      .ville("Shimotsuki")
      .pays("Japon")
      .phoneNumber("0799411663")
      .build()
    this.david.addAddress(davidAddress);

    let emilieAddress = new AddressBuilder()
      .type("domicile")
      .rue("Boulevard du baratie")
      .numero(3)
      .ville("Paris")
      .pays("France")
      .phoneNumber("0632417669")
      .build()
    this.emilie.addAddress(emilieAddress);

    let ninaAddress = new AddressBuilder()
      .type("domicile")
      .rue("Avenue de la floraison")
      .numero(6)
      .ville("Rome")
      .pays("Italie")
      .phoneNumber("0742122664")
      .build()
    this.nina.addAddress(ninaAddress);





    this.carnets.push(this.jean, this.fabrice, this.david, this.emilie, this.nina );
  }


  addContactForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    birthday: new FormControl('')
  });

  updateContactForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    birthday: new FormControl('')
  });
  initFormGroup(nom: string, prenom : string, birhtday: Date ){
    this.updateContactForm = new FormGroup({
      nom: new FormControl(nom),
      prenom: new FormControl(prenom),
      birthday: new FormControl(birhtday)
    });
  }

  constructor() {
    this.init();

  }
  addContact(){
    if(! this.isCallable) {
      return;
    }
    this.isCallable = false;

    var form = document.getElementById('form_add_contact');
    if(form!=null){
      form.style.visibility = 'visible';
    }
  }
  submitAddContact(){
    if(this.addContactForm != null ) {
      var nom = this.addContactForm.get("nom");
      var prenom = this.addContactForm.get("prenom");
      var birthday = this.addContactForm.get("birthday");
      if (nom != null && prenom != null && birthday != null) {
        this.carnets.push(
          new Contact(nom.value, prenom.value, birthday.value)
        );
        alert("vous ajoutez " + nom.value + " " + prenom.value + " à vos contacts");
      }

      var form = document.getElementById('form_add_contact');
      if (form != null) {
        form.style.visibility = 'hidden';
      }

    }
    this.isCallable = true;
  }

  removeContact(contact: Contact){
    if(! this.isCallable) {
      return;
    }
    this.isCallable = false;

    this.carnets.splice(this.carnets.indexOf(contact),1);

    alert("vous avez supprimé "+contact.nom + " "+ contact.prenom+" de vos contacts");
    this.isCallable = true;
  }
  contactToUpdate: Contact | undefined ;
  updateContact(contact: Contact){
    if(! this.isCallable) {
      return;
    }
    this.isCallable = false;
    this.initFormGroup(contact.nom,contact.prenom, contact.birthday);

    var form = document.getElementById('form_update_contact');
    if(form!=null){
      form.style.visibility = 'visible';
    }
    this.contactToUpdate = contact;

  }
  submitUpdateContact(){
    if(this.contactToUpdate != null && this.updateContactForm!=null){
      var nom = this.updateContactForm.get("nom");
      var prenom = this.updateContactForm.get("prenom");
      var birthday = this.updateContactForm.get("birthday");
      if (nom != null && prenom != null && birthday != null) {
        if(nom.value != this.contactToUpdate.nom){
          this.contactToUpdate.nom = nom.value
        }
        if(prenom.value != this.contactToUpdate.prenom){
          this.contactToUpdate.prenom = prenom.value
        }
        if(birthday.value != this.contactToUpdate.birthday){
          this.contactToUpdate.birthday = birthday.value
        }

        alert("le contact a été mis à jour");
      }
      var form = document.getElementById('form_update_contact');
      if (form != null) {
        form.style.visibility = 'hidden';

      }
      this.initFormGroup("","",new Date(Date.now()));
    }
    this.isCallable = true;
  }


  addAddressForm = new FormGroup({
    type: new FormControl(''),
    rue: new FormControl(''),
    numero: new FormControl(''),
    ville: new FormControl(''),
    pays: new FormControl(''),
    commentaire: new FormControl(''),
    phoneNumber: new FormControl('')
  })
  addAnAddress(contact: Contact){
    if(! this.isCallable) {
      return;
    }
    this.isCallable = false;
    var form = document.getElementById("form_add_address");
    if(form!=null){
      form.style.visibility = 'visible'
    }
  }
  submitAddAnAddress(contact: Contact){
    let addressBuilder = new AddressBuilder();
    var type = this.addAddressForm.get("type");
    if(type!=null){
      addressBuilder.type(type.value);
    }
    var rue = this.addAddressForm.get("rue");
    if(rue!= null){
      addressBuilder.rue(rue.value);
    }
    var numero = this.addAddressForm.get("numero");
    if(numero!=null){
      addressBuilder.numero(numero.value);
    }
    var ville = this.addAddressForm.get("ville");
    if(ville!=null){
      addressBuilder.ville(ville.value);
    }
    var pays = this.addAddressForm.get("pays");
    if(pays!=null){
      addressBuilder.pays(pays.value);
    }
    var commentaire = this.addAddressForm.get("commentaire");
    if (commentaire!=null){
      addressBuilder.commentaire(commentaire.value);
    }
    var phoneNumber = this.addAddressForm.get("phoneNumber");
    if(phoneNumber!=null){
      addressBuilder.phoneNumber(phoneNumber.value);
    }

    contact.addAddress(addressBuilder.build());
    alert("addresse ajoutée pour "+contact.prenom)

    var form = document.getElementById("form_add_address");
    if(form!=null){
      form.style.visibility = 'hidden'
    }
    this.isCallable = true;
  }


  contactToShowDetails: Contact | undefined;
  details(contact: Contact){
    if(! this.isCallable) {
      return;
    }
    this.isCallable = false;
    var pageCarnet = document.getElementById('carnets');
    if(pageCarnet!=null){
      pageCarnet.style.visibility = 'hidden';
    }

    var pageContact = document.getElementById('contact');
    if(pageContact!=null){
      pageContact.style.visibility = 'visible';
    }
    this.contactToShowDetails = contact;
    this.isCallable = true;
  }

}

