import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './component/dashboard/notes/notes.component';
import { CreatenoteComponent } from './component/dashboard/notes/createnote/createnote.component';
import { UpdatenoteComponent } from './component/dashboard/notes/updatenote/updatenote.component';
import { DisplaynoteComponent } from './component/dashboard/notes/displaynote/displaynote.component';
import { DeletenoteComponent } from './component/dashboard/notes/deletenote/deletenote.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { IconlistComponent } from './component/iconlist/iconlist.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NotesComponent,
    CreatenoteComponent,
    UpdatenoteComponent,
    DisplaynoteComponent,
    DeletenoteComponent,
    SidenavComponent,
    IconlistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
