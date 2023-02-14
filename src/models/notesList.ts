import { Status, Types } from "../types";
import { Note } from "./note";

export class NoteList {
  notes: Note[] = [];
  sort: {
    type: Types;
    status: Status;
  };

  constructor() {
    this.sort = {
      type: Types.None,
      status: Status.Unsorted,
    };
  }

  addNote(
    title: string,
    date: Date = new Date(Date.now()),
    isCompleted: boolean,
    files: string[] = []
  ) {
    // this.status.byComplete = 0;
    this.sort.type = Types.None;
    this.sort.status = Status.Unsorted;

    title = title == "" ? "Empty" : title;

    const newNote = new Note(title, date, isCompleted, files);
    this.notes.push(newNote);
  }

  updateNote() {}

  deleteNote(id: number) {
    const pos = this.notes.findIndex((note) => note.id == id);

    this.notes.splice(pos, 1);
  }

  // filterListByComplete() {
  //   if (this.sort.type !== Types.ByComplete) {
  //     this.sort.type = Types.ByComplete;
  //     this.sort.status = Status.Unsorted;
  //   }

  //   if (this.sort.status === Status.Decrease) {
  //     this.notes.sort((note1, note2) =>
  //       Number(Number(note2.isCompleted) - Number(note1.isCompleted))
  //     );

  //     this.sort.status = Status.Increase;
  //   } else {
  //     this.notes.sort((note1, note2) =>
  //       Number(Number(note1.isCompleted) - Number(note2.isCompleted))
  //     );

  //     this.sort.status = Status.Decrease;
  //   }
  // }

  filterList(type: Types, func: (note: Note) => number) {
    if (this.sort.type !== type) {
      this.sort.type = type;
      this.sort.status = Status.Unsorted;
    }

    if (this.sort.status === Status.Decrease) {
      this.notes.sort((note1, note2) => func(note2) - func(note1));

      this.sort.status = Status.Increase;
    } else {
      this.notes.sort((note1, note2) => func(note1) - func(note2));

      this.sort.status = Status.Decrease;
    }
  }

  filterListByDate() {
    this.filterList(Types.ByDate, (note: Note) => {
      const parsed = Date.parse(note.date);
      return Number.isNaN(parsed) ? Number.POSITIVE_INFINITY : parsed;
    });
  }

  filterListByComplete() {
    this.filterList(Types.ByComplete, (note: Note) => Number(note.isCompleted));
  }
}

export const noteList = new NoteList();
