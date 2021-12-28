export class CreateQuartierDto {
  label: string;
  commune: string;

  constructor(data?: CreateQuartierDto) {
    this.label = (data && data?.label) ? data.label : null;
    this.commune = (data && data?.commune) ? data.commune: null;
  }
}
