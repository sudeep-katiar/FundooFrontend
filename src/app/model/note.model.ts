export class Note {
    [x: string]: any;
    id:number;
    title:string;
    content:string;
    is_deleted:boolean;
    is_pinned:boolean;
    is_archived:boolean;
    note_color:string;
    reminder:string;
    user_id:number;
}