import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatRadioModule, MatSidenavModule, MatTabsModule, MatTableModule} from '@angular/material'

const MaterialComponments = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSnackBarModule,
  MatRadioModule,
  MatSidenavModule,
  MatTabsModule,
  MatTableModule
];


@NgModule({
  imports: [MaterialComponments],
  exports: [MaterialComponments]
})
export class MaterialModule { }
