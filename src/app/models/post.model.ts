export class Post {
  created_at: Date;

  constructor(
    public id: number,
    public title: string,
    public content: string,
    public loveIts?: number
  ) {
    this.loveIts = (!isNaN(loveIts)) ? loveIts : 0;
    this.created_at = new Date();
  }
}
