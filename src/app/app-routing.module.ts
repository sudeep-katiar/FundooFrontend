import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { LabelComponent } from './components/label/label.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { TrashComponent } from './components/trash/trash.component';



const routes: Routes = [
  // {path:'', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: 'dashboard', component: DashboardComponent,
  children:[
    // { path:'', redirectTo:'notes', pathMatch:'full' },
    {path:'', component: NotesComponent},
    { path: 'notes', component: NotesComponent},
    { path: 'updatenote', component: UpdatenoteComponent },
    {path:'createnote',component:CreatenoteComponent},
    {path:'reminder',component:ReminderComponent},
    {path:'label',component:LabelComponent},
    {path:'archive',component:ArchiveComponent},
    {path:'trash',component:TrashComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegistrationComponent, ForgetpasswordComponent, ResetpasswordComponent, DashboardComponent]
