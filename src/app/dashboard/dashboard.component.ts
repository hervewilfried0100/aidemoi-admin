import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    totalPrestataire: Observable<number>;
    totalPrestatairePayer: Observable<number>;
    totalPrestataireNonPayer: Observable<number>;
    totalPrestation: Observable<number>;

    constructor(
      private dashboardService: DashboardService
    ) { }

    ngOnInit(): void {
      this.recupererStats();
      this.recupererTotalStats();
    }

    recupererTotalStats(): void {
      this.totalPrestataire = this.dashboardService.prestataire;
      this.totalPrestatairePayer = this.dashboardService.prestatairePayer;
      this.totalPrestataireNonPayer = this.dashboardService.prestataireNonPayer;
      this.totalPrestation = this.dashboardService.totalPrestation;
    }

    recupererStats(): void {
      this.dashboardService.recupererTotalPrestataire();
      this.dashboardService.recupererTotalPrestatairePayer();
      this.dashboardService.recupererTotalPrestataireNonPayer();
      this.dashboardService.recupererTotalPrestations();
    }
}
