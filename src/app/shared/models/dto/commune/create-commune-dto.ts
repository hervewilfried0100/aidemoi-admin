export class CreateCommuneDto {
  label: string;
  ville: string;

  constructor(data?: CreateCommuneDto) {
    this.label = (data && data?.label) ? data.label : null;
    this.ville = (data && data?.ville) ? data.ville : null;
  }
}
