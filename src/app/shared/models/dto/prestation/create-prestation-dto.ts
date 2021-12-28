export class CreatePrestationDto {
  label: string;

  constructor(data?: CreatePrestationDto) {
    this.label = (data && data?.label) ? data.label : null;
  }
}
