import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { ColorComponent } from './color/color.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AllUserComponent } from './all-user/all-user.component';


const routes : Routes = [
  {path: 'index', component: PrincipalComponent},
  {path: 'adduser', component: AdduserComponent},
  {path: 'alluser', component: AllUserComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    FooterComponent,
    HeaderComponent,
    PrincipalComponent,
    ColorComponent,
    SidebarComponent,
    AdduserComponent,
    AllUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

