import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ThemeConstantService } from './services/theme-constant.service';
import { SearchPipe } from './pipes/search.pipe';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCardModule} from 'ng-zorro-antd/card';
import {AmButtonComponent} from './components/am-button/am-button.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AmDialogComponent} from './components/am-dialog/am-dialog.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {MatMenuModule} from '@angular/material/menu';
import {TabColActionsComponent} from './components/tab-col-actions/tab-col-actions.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';

@NgModule({
    exports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      HttpClientJsonpModule,
      NzIconModule,
      PerfectScrollbarModule,
      SearchPipe,
      NzCardModule,
      NzTableModule,
      NzButtonModule,
      NzToolTipModule,
      MatDialogModule,
      AmButtonComponent,
      AmDialogComponent,
      TabColActionsComponent,
      NzFormModule,
      NzInputModule,
      NzSelectModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      ReactiveFormsModule
    ],
    imports: [
      RouterModule,
      CommonModule,
      NzIconModule,
      NzTableModule,
      NzButtonModule,
      NzCardModule,
      NzToolTipModule,
      MatDialogModule,
      PerfectScrollbarModule,
      NzFormModule,
      NzInputModule,
      NzSelectModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      ReactiveFormsModule,
      NzAvatarModule,
      NzIconModule
    ],
    declarations: [
      SearchPipe,
      AmButtonComponent,
      AmDialogComponent,
      TabColActionsComponent,
    ],
    providers: [
      ThemeConstantService,
      NzNotificationService
    ]
})

export class SharedModule { }
