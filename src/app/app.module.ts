import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { PoliticianComponent } from './politician/politician.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NarrativeComponent } from './narrative/narrative.component';
import { PoliticianDetailComponent } from './politician-detail/politician-detail.component';
import { PoliticianListComponent } from './politician-list/politician-list.component';
import { SignupRComponent} from './signup-r/signup-r.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignupService } from './signup/signup.service';
import { LogoutComponent } from './logout/logout.component';
import { DataSharingService } from './data-sharing.service';
import { MemberComponent } from './members/member/member.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {CdkTableModule} from '@angular/cdk/table';
import {fadeAnimation} from '../animations';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { TwitterPoliticsComponent } from './twitter-politics/twitter-politics.component';
import { RepsComponent } from './members/reps/reps.component';
import { MapComponent } from './map/map.component';
import { OddsComponent } from './odds/odds.component';
import { OddsGridComponent } from './odds/odds-grid/odds-grid.component';
import { ResolverService } from './resolver.service';
import { OddsResolverService } from './odds.resolver.service';

// material design components actually being used must be in imports below
@NgModule({
  declarations: [
    AppComponent,
    PoliticianComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    SignupComponent,
    AboutComponent,
    HomeComponent,
    NarrativeComponent,
    PoliticianDetailComponent,
    PoliticianListComponent,
    SignupRComponent,
    LogoutComponent,
    MemberComponent,
    MemberDetailComponent,
    TwitterPoliticsComponent,
    RepsComponent,
    MapComponent,
    OddsComponent,
    OddsGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [DataService, SignupService, DataSharingService, ResolverService, OddsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
