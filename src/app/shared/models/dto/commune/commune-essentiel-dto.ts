export class CommuneEssentielDto {
  id: string;
  label: string;

  constructor(data?: CommuneEssentielDto) {
    this.id = (data && data?.id) ? data.id : null;
    this.label = (data && data?.label) ? data.label : null;
  }
}

