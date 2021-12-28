import {PrestataireEssentielDto} from '../prestataire/prestataire-essentiel-dto';

export class PrestationDetailsDto {
  id: string;
  label: string;
  prestataires: Array<PrestataireEssentielDto>;

  constructor(data?: PrestationDetailsDto) {
    this.id = (data && data?.id) ? data.id : null;
    this.label = (data && data?.label) ? data.label : null;
    this.prestataires = (data && data?.prestataires) ? data.prestataires : [];
  }
}
