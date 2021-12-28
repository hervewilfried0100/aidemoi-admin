import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {VilleDetailsDto} from '../shared/models/dto/ville/ville-details-dto';
import {CommuneDetailsDto} from '../shared/models/dto/commune/commune-details-dto';
import {QuartierDetailsDto} from '../shared/models/dto/quartier/quartier-details-dto';
import {CreateVilleDto} from '../shared/models/dto/ville/create-ville-dto';
import {UpdateVilleDto} from '../shared/models/dto/ville/update-ville-dto';
import {VilleRepository} from '../shared/repositories/ville-repository';
import {MessageHandler} from '../shared/services/message-handler';
import {MessageConstants} from '../shared/constants/message-constants';
import {CommuneRepository} from '../shared/repositories/commune-repository';
import {QuartierRepository} from '../shared/repositories/quartier-repository';
import {UpdateCommuneDto} from '../shared/models/dto/commune/update-commune-dto';
import {CreateCommuneDto} from '../shared/models/dto/commune/create-commune-dto';
import {UpdateQuartierDto} from '../shared/models/dto/quartier/update-quartier-dto';
import {CreateQuartierDto} from '../shared/models/dto/quartier/create-quartier-dto';

@Injectable({ providedIn: 'root' })
export class LocalisationsService {
  villes$ = new BehaviorSubject<VilleDetailsDto[]>([]);
  villes = this.villes$.asObservable();

  communes$ = new BehaviorSubject<CommuneDetailsDto[]>([]);
  communes = this.communes$.asObservable();

  quartiers$ = new BehaviorSubject<QuartierDetailsDto[]>([]);
  quartiers = this.quartiers$.asObservable();

  constructor(
    private messageHandler: MessageHandler,
    private communeRepository: CommuneRepository,
    private quartierRepository: QuartierRepository,
    private villeRepository: VilleRepository) {
  }

  creerVille(createVilleDto: CreateVilleDto): void {
    this.villeRepository.createVille(createVilleDto)
      .then(() => this.recupererVilles())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.SAVE_SUCCESS))
      .catch((e) => console.log(e));
  }

  modifierVille(updateVilleDto: UpdateVilleDto): void {
    this.villeRepository.updateVille(updateVilleDto)
      .then(() => this.recupererVilles())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.UPDATE_SUCCESS))
      .catch((e) => console.log(e));
  }

  recupererVilles(): void {
    this.villeRepository.getAllVilleDetails()
      .then((villeData) => {
        this.villes$.next(villeData);
      })
      .catch((e) => console.log('Ville get error', e));
  }

  supprimerVille(id: string): void {
    this.villeRepository.deleteVille(id)
      .then(() => this.recupererVilles())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.DELETE_SUCCESS))
      .catch((e) => console.log('Error suppression ville', e));
  }

  // COMMUNE
  creerCommune(createCommuneDto: CreateCommuneDto): void {
    this.communeRepository.createCommune(createCommuneDto)
      .then(() => this.recupererCommunes())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.SAVE_SUCCESS))
      .catch((e) => console.log(e));
  }

  modifierCommune(updateCommuneDto: UpdateCommuneDto): void {
    this.communeRepository.updateCommune(updateCommuneDto)
      .then(() => this.recupererCommunes())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.UPDATE_SUCCESS))
      .catch((e) => console.log(e));
  }

  recupererCommunes(): void {
    this.communeRepository.getAllCommuneDetails()
      .then((communeData) => {
        this.communes$.next(communeData);
      })
      .catch((e) => console.log('Commune get error', e));
  }

  supprimerCommune(id: string): void {
    this.communeRepository.deleteCommune(id)
      .then(() => this.recupererCommunes())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.DELETE_SUCCESS))
      .catch((e) => console.log('Error suppression commune', e));
  }

  // QUARTIERS
  creerQuartier(createQuartierDto: CreateQuartierDto): void {
    this.quartierRepository.createQuartier(createQuartierDto)
      .then(() => this.recupererQuartiers())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.SAVE_SUCCESS))
      .catch((e) => console.log(e));
  }

  modifierQuartier(updateQuartierDto: UpdateQuartierDto): void {
    this.quartierRepository.updateQuartier(updateQuartierDto)
      .then(() => this.recupererQuartiers())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.UPDATE_SUCCESS))
      .catch((e) => console.log(e));
  }

  recupererQuartiers(): void {
    this.quartierRepository.getAllQuartierDetails()
      .then((quartierData) => {
        this.quartiers$.next(quartierData);
      })
      .catch((e) => console.log('Quartier get error', e));
  }

  supprimerQuartier(id: string): void {
    this.quartierRepository.deleteQuartier(id)
      .then(() => this.recupererQuartiers())
      .then(() => this.messageHandler.handleSuccess(MessageConstants.DELETE_SUCCESS))
      .catch((e) => console.log('Error suppression quartier', e));
  }
}
