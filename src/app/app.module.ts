import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material';
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
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './components/notes/notes.component';
import { CreatenoteComponent } from './components/createnote/createnote.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { DeletenoteComponent } from './components/deletenote/deletenote.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { IconlistComponent } from './components/iconlist/iconlist.component';
import { PinNotesComponent } from './components/pin-notes/pin-notes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { LabelComponent } from './components/label/label.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { TrashComponent } from './components/trash/trash.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';
import { AmazingTimePickerModule } from 'amazing-time-picker'; 

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
    PinNotesComponent,
    ArchiveComponent,
    LabelComponent,
    ReminderComponent,
    TrashComponent,
    CollaboratorComponent
    
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
    MatTooltipModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDialogModule,
    AmazingTimePickerModule
  ],
  entryComponents: [ CollaboratorComponent],
  providers: [ { provide: MatDialogTitle, useValue: {} }, { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] } ],  bootstrap: [AppComponent]
})
export class AppModule { }
