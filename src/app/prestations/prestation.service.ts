import {PrestationRepository} from '../shared/repositories/prestation-repository';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PrestationDetailsDto} from '../shared/models/dto/prestation/prestation-details-dto';
import {CreatePrestationDto} from '../shared/models/dto/prestation/create-prestation-dto';
import {MessageHandler} from '../shared/services/message-handler';
import {MessageConstants} from '../shared/constants/message-constants';
import {UpdatePrestationDto} from '../shared/models/dto/prestation/update-prestation-dto';

@Injectable({ providedIn: 'root' })
export class PrestationService {
  constructor(
    private messageHandler: MessageHandler,
    private prestationRepository: PrestationRepository) {}

  private prestations$ = new BehaviorSubject<PrestationDetailsDto[]>([]);
  public readonly prestations = this.prestations$.asObservable();

  creerPrestation(createPrestationDto: any): void {
    this.prestationRepository.createPrestation(createPrestationDto)
      .then(() => this.recupererPrestations())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.SAVE_SUCCESS))
      .catch((e) => this.messageHandler.handleSuccess(MessageConstants.SAVE_ERROR));
  }

  recupererPrestations(): void {
    this.prestationRepository.getAllPrestationDetails()
      .then((prestations) => this.prestations$.next(prestations))
      .catch((e) => {
        this.messageHandler.handleSuccess(MessageConstants.GET_ERROR);
        console.log('Erreur récupération données prestations', e);
      });
  }

  modifierPrestation(updatePrestationDto: UpdatePrestationDto, prestationId: string): void {
    this.prestationRepository.updatePrestation(updatePrestationDto, prestationId)
      .then(() => this.recupererPrestations())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.UPDATE_SUCCESS))
      .catch((e) => this.messageHandler.handleSuccess(MessageConstants.UPDATE_ERROR));
  }

  supprimerPrestation(prestationId: string): void {
    this.prestationRepository.deletePrestation(prestationId)
      .then(() => this.recupererPrestations())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.DELETE_SUCCESS))
      .catch((e) => this.messageHandler.handleSuccess(MessageConstants.DELETE_ERROR));
  }
}
