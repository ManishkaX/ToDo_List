export class Note {
  id: number = Note.i++;
  title: string;
  date: string;
  isCompleted: boolean;
  files: string[];
  private static i = 1;

  constructor(
    title: string,
    date: Date,
    isCompleted: boolean,
    files: string[]
  ) {
    this.title = title;
    this.date = date.toString();
    this.isCompleted = isCompleted;
    this.files = files;
  }
}
