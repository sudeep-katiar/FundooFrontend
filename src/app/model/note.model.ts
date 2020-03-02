export class Note {
    [x: string]: any;
    id:number;
    title:string;
    content:string;
    deleted:boolean;
    pinned:boolean;
    archived:boolean;
    noteColor:string;
    reminder:string;
    createdBy:number;
    reminderStatus:boolean;
}