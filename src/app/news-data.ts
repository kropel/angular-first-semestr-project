const getRandom = (length: number) => Math.floor(Math.random() * length);

export class NewsData {
  public id: number;
  public title: string;
  public content: string;
  public imageUrl: string;
  public votes: number;
  private images: string[] = [
    "https://i.imgur.com/gEiXpUrb.jpg",
    "https://i.imgur.com/iFcNFLFb.jpg",
    "https://i.imgur.com/CcDqGmob.jpg",
    "https://i.imgur.com/4sXQHbJb.jpg",
    "https://i.imgur.com/I5l4HQSb.jpg",
    "https://i.imgur.com/fvbQaFGb.jpg",
    "https://i.imgur.com/bvqvRa0b.jpg",
    "https://i.imgur.com/NAjsGwbb.jpg",
    "https://i.imgur.com/cOCcKXlb.jpg",
    "https://i.imgur.com/uw2QVbfb.jpg",
    "https://i.imgur.com/OBbz9IJb.jpg"
  ];

  constructor(
    id: number,
    title: string,
    content: string,
    imageUrl: string = ""
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    !!imageUrl
      ? (this.imageUrl = imageUrl)
      : (this.imageUrl = this.images[getRandom(this.images.length)]);
    this.votes = getRandom(10);
  }
}
