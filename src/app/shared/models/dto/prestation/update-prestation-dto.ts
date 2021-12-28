export class UpdatePrestationDto {
  label: string;

  constructor(data?: UpdatePrestationDto) {
    this.label = (data && data?.label) ? data.label : null;
  }
}
