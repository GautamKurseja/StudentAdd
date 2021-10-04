import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule, MatIconModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule, MatGridListModule } from '@angular/material';

import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderModule } from 'angular-image-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
 
  declarations: [
    AppComponent,
 
    PageNotFoundComponent,
   
   
    EmployeeAddComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    AppRoutingModule,
    MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTableModule,
		MatSelectModule,
		MatMenuModule,
		MatProgressBarModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDialogModule,
		MatTabsModule,
		MatNativeDateModule,
		MatCardModule,
		MatRadioModule,
		MatIconModule,
		MatDatepickerModule,
		MatExpansionModule,
		MatAutocompleteModule,
		MatSnackBarModule,
		MatTooltipModule,
		MatSlideToggleModule,
    MatGridListModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-center'
    })
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
