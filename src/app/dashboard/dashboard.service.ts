import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {DashboardRepository} from '../shared/repositories/dashboard-repository';
import {MessageHandler} from '../shared/services/message-handler';
import {MessageConstants} from '../shared/constants/message-constants';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private totalPrestataire$ = new BehaviorSubject<number>(0);
  private totalPrestatairePayer$ = new BehaviorSubject<number>(0);
  private totalPrestataireNonPayer$ = new BehaviorSubject<number>(0);
  private totalPrestation$ = new BehaviorSubject<number>(0);

  readonly prestataire = this.totalPrestataire$.asObservable();
  readonly prestatairePayer = this.totalPrestatairePayer$.asObservable();
  readonly prestataireNonPayer = this.totalPrestataireNonPayer$.asObservable();
  readonly totalPrestation = this.totalPrestation$.asObservable();

  constructor(
    private messageHandler: MessageHandler,
    private dashboardRepository: DashboardRepository) {}

  recupererTotalPrestataire(): void {
    this.dashboardRepository
      .recupererTotalPrestataire()
      .then((totalPrestataire => this.totalPrestataire$.next(totalPrestataire.nombrePrestataires)))
      .catch((e) => this.messageHandler.handleSuccess(MessageConstants.GET_ERROR));
  }

  recupererTotalPrestatairePayer(): void {
    this.dashboardRepository
      .recupererTotalPrestataireNonPayer()
      .then((totalPrestatairePayer) => {
        this.totalPrestataireNonPayer$.next(totalPrestatairePayer.nombrePrestataires);
      })
      .catch((e) => this.messageHandler.handleSuccess(MessageConstants.GET_ERROR));
  }

  recupererTotalPrestataireNonPayer(): void {
    this.dashboardRepository
      .recupererTotalPrestataireNonPayer()
      .then((totalPrestataireNonPayer) => {
        this.totalPrestataireNonPayer$.next(totalPrestataireNonPayer.nombrePrestataires);
      }).catch((e) => this.messageHandler.handleSuccess(MessageConstants.GET_ERROR));
  }

  recupererTotalPrestations(): void {
    this.dashboardRepository
      .recupererTotalPrestations()
      .then((totalPrestation) => {
        this.totalPrestation$.next(totalPrestation.totalPrestations);
      }).catch((e) => this.messageHandler.handleSuccess(MessageConstants.GET_ERROR));
  }
}
