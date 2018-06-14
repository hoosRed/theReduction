import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NarrativeComponent } from './narrative/narrative.component';
import { SignupRComponent } from './signup-r/signup-r.component';
import { LogoutComponent } from './logout/logout.component';
import { MemberComponent } from './members/member/member.component';
import { RepsComponent } from './members/reps/reps.component';
import { OddsComponent } from './odds/odds.component';
import { ResolverService } from './resolver.service';
import {OddsResolverService} from './odds.resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'politician', component: MemberComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignupRComponent},
  { path: 'narrative', component: NarrativeComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'theHouse', component: RepsComponent, resolve: {reps: ResolverService} },
  { path: 'theOdds', component: OddsComponent, resolve: {oddsAll: OddsResolverService} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
