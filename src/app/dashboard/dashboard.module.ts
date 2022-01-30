import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from './dashboard.component';

/** Import any ng-zorro components as the module required except icon module */
import { NzButtonModule } from 'ng-zorro-antd/button';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';

/** Assign all ng-zorro modules to this array*/
const antdModule = [
    NzButtonModule,
]

@NgModule({
    imports: [
        SharedModule,
        DashboardRoutingModule,
        ...antdModule,
        NzAvatarModule
    ],
    exports: [],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
