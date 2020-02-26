import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NotesComponent } from './component/notes/notes.component';
import { UpdatenoteComponent } from './component/updatenote/updatenote.component';
import { CreatenoteComponent } from './component/createnote/createnote.component';



const routes: Routes = [
  // {path:'', redirectTo: '/login', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: "dashboard", component: DashboardComponent,
  children:[
    // { path:'', redirectTo:'notes', pathMatch:'full' },
    {path:'', component: NotesComponent},
    {path:'refresh', component: NotesComponent},
    { path: 'notes', component: NotesComponent},
    { path: 'updatenote', component: UpdatenoteComponent },
    {path:"createnote",component:CreatenoteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegistrationComponent, ForgetpasswordComponent, ResetpasswordComponent, DashboardComponent]
