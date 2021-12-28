import {Injectable} from '@angular/core';
import {MessageHandler} from '../shared/services/message-handler';
import {PrestataireRepository} from '../shared/repositories/prestataire-repository';
import {BehaviorSubject} from 'rxjs';
import {PrestataireDetailsDto} from '../shared/models/dto/prestataire/prestataire-details-dto';
import {MessageConstants} from '../shared/constants/message-constants';
import {CreatePrestataireDto} from '../shared/models/dto/prestataire/create-prestataire-dto';
import {UpdatePrestataireDto} from '../shared/models/dto/prestataire/update-prestataire-dto';

@Injectable({ providedIn: 'root' })
export class PrestataireService {
  constructor(
    private messageHandler: MessageHandler,
    private prestataireRepository: PrestataireRepository
  ) {}

  private prestataires$ = new BehaviorSubject<PrestataireDetailsDto[]>([]);
  public readonly prestataires = this.prestataires$.asObservable();

  creerPrestataire(createPrestataire: CreatePrestataireDto): void {
    this.prestataireRepository.createPrestataire(createPrestataire)
      .then(() => this.recupererPrestataires())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.SAVE_SUCCESS))
      .catch((e) => this.messageHandler.handleSuccess(MessageConstants.SAVE_ERROR));
  }

  recupererPrestataires(): void {
    this.prestataireRepository.getAllPrestataireDetails()
      .then((prestataires => this.prestataires$.next(prestataires)))
      .catch((e) => {
        this.messageHandler.handleSuccess(MessageConstants.GET_ERROR);
        console.log('Erreur récupération données prestataires', e);
      });
  }

  modifierPrestataire(updatePrestataire: UpdatePrestataireDto, prestataireId: string): void {
    this.prestataireRepository.updatePrestataire(updatePrestataire, prestataireId)
      .then(() => this.recupererPrestataires())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.UPDATE_SUCCESS))
      .catch((e) => this.messageHandler.handleSuccess(MessageConstants.UPDATE_ERROR));
  }

  supprimerPrestataire(prestataireId: string): void {
    this.prestataireRepository.deletePrestataire(prestataireId)
      .then(() => this.recupererPrestataires())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.DELETE_SUCCESS))
      .catch((e) => this.messageHandler.handleSuccess(MessageConstants.DELETE_ERROR));
  }
}
