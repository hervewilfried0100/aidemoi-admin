import {PrestataireDetailsDto} from '../prestataire/prestataire-details-dto';
import {VilleEssentielDto} from '../ville/ville-essentiel-dto';

export class CommuneDetailsDto {
  id: string;
  label: string;
  prestataires: PrestataireDetailsDto[];
  ville: VilleEssentielDto;
}
