export class CreateVilleDto {
  label: string;

  constructor(data?: CreateVilleDto) {
    this.label = (data && data?.label) ? data?.label : null;
  }
}
