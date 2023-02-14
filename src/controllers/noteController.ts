import { Request, Response } from "express";
import { noteList } from "../models/notesList";

export class NoteController {
  constructor() {}

  addNote({ body }: Request, res: Response) {
    console.log("[POST] Add Note with data: ");
    console.log(body);
    const isCompleted = body?.isCompleted == "on" ? true : false;

    noteList.addNote(body?.title, body?.date, isCompleted);
    console.log(noteList.notes);

    res.redirect("/");
  }

  removeNote(req: Request, res: Response) {
    console.log("Remove Note Controller");
    noteList.deleteNote(req.body.id);

    res.redirect("/");
  }

  createMainPage(req: Request, res: Response) {
    res.render("notes.pug", { notes: noteList.notes });
  }

  sortByComplete(req: Request, res: Response) {
    console.log("Sort by Complete");
    noteList.filterListByComplete();
    res.redirect("/");
  }

  sortByDate(req: Request, res: Response) {
    console.log("Sort by Date");
    noteList.filterListByDate();
    res.redirect("/");
  }
}

export const noteController = new NoteController();
