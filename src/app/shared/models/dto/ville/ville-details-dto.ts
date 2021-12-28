import {PrestataireDetailsDto} from '../prestataire/prestataire-details-dto';
import {CommuneEssentielDto} from '../commune/commune-essentiel-dto';

export class VilleDetailsDto {
  id: string;
  label: string;
  communes: CommuneEssentielDto[];
  prestataires: PrestataireDetailsDto[];
}
