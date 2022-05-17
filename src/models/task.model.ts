let increment = 0;
export class TaskModel {
  id: string;
  text: string;
  created: Date;
  done?: boolean;

  constructor(text: string) {
    this.text = text;
    this.created = new Date();
    this.done = false;
    this.id = this.created.toTimeString() + increment;
    increment++;
  }
}
