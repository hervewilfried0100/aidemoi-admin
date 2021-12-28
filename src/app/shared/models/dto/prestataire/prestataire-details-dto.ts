export class PrestataireDetailsDto {
  id: string;
  nom: string;
  prenoms: string;
  genre: string;
  telephone: string;
  ville: string;
  commune: string;
  quartier: string;
  adresse: string;
  aPayer: boolean;
  prestation: string;
  dateCreation: Date;

  constructor(data?: PrestataireDetailsDto) {
    this.id = (data && data.id) ? data.id : null;
    this.nom = (data && data.nom) ? data.nom : null;
    this.prenoms = (data && data.prenoms) ? data.prenoms : null;
    this.genre = (data && data.genre) ? data.genre : null;
    this.telephone = (data && data.telephone) ? data.telephone : null;
    this.ville = (data && data.ville) ? data.ville : null;
    this.commune = (data && data.commune) ? data.commune : null;
    this.quartier = (data && data.quartier) ? data.quartier : null;
    this.adresse = (data && data.adresse) ? data.adresse : null;
    this.aPayer = (data && data.aPayer) ? data.aPayer : false;
    this.prestation = (data && data.prestation) ? data.prestation : null;
    this.dateCreation = (data && data.dateCreation) ? data.dateCreation : new Date();
  }
}
