import {CommuneEssentielDto} from '../commune/commune-essentiel-dto';

export class QuartierDetailsDto {
  id: string;
  label: string;
  commune: CommuneEssentielDto;
}
