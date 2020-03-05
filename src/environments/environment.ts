// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl:'http://localhost:8080/users/',
  notesApiUrl:'http://localhost:8080/',
  labelApiUrl:'http://localhost:8080/',

  registerURL:'register/',
  loginURL:'login/',
  forgotPasswordURL:'forgotpassword/',
  resetPasswordURL:'resetpassword/',

  createNoteURL:'notes/create/',
  allNoteURL:'notes/allnotes/',
  updateNoteURL:'notes/updatenote/',
  deleteNoteURL:'notes/deleteORrestore/',
  restoreNoteURL:'notes/deleteORrestore/',
  pinNoteURL:'notes/pinunpin/',
  archiveNoteURL:'notes/archive',
  colorNoteURL:'notes/addcolor/',
  reminderNoteURL:'notes/reminder/',
  allReminderNoteURL:'notes/getallreminder',
  emptyBinURL:'notes/emptybin/',
  allPinnedNoteURL:'notes/allpinnednotes',
  allUnpinnedNoteURL:'notes/allunpinnednotes',
  allTrashedNoteURL:'notes/alltrashednotes',
  allArchivedNoteURL:'notes/getallarchived',
  allUnarchivedURL:'notes/getallunarchived',

  getLabels:'label/maptonote',
  getLabelsList:'label/alllabel'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
