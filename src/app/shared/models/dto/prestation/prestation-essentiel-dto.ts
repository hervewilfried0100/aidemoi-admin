export class PrestationEssentielDto {
  id: string;
  label: string;

  constructor(data?: PrestationEssentielDto) {
    this.id = (data && data?.id) ? data.id : null;
    this.label = (data && data?.label) ? data.label : null;
  }
}
