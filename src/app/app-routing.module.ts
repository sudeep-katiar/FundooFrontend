import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './dashboard/notes/notes.component';
import { CreatenoteComponent } from './dashboard/notes/createnote/createnote.component';
import { UpdatenoteComponent } from './dashboard/notes/updatenote/updatenote.component';


const routes: Routes = [
  // {path:'', redirectTo: '/login', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: 'dashboard', component: DashboardComponent,
  children:[
    { path:'', redirectTo:'notes', pathMatch:'full' },
    { path: 'notes', component: NotesComponent },
    { path: 'createnote', component: CreatenoteComponent },
    { path: 'updatenote', component: UpdatenoteComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegistrationComponent, ForgetpasswordComponent, ResetpasswordComponent, DashboardComponent]
