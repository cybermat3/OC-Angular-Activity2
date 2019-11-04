export class Post {
  created_at: Date;

  constructor(
    public title: string,
    public content: string,
    public loveIts: number
  ) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }
}
