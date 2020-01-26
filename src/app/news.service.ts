import { Injectable, EventEmitter } from "@angular/core";
import { NewsData } from "./news-data";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  public onChange = new EventEmitter();

  private news: NewsData[] = [
    new NewsData(
      0,
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean magna nulla, facilisis at lectus et, suscipit hendrerit nisi. Vestibulum placerat vestibulum felis ac lacinia. Morbi ornare dolor convallis, sagittis orci quis, pellentesque risus. Phasellus eget sagittis risus. Praesent fermentum porttitor erat, non efficitur velit dapibus quis."
    ),
    new NewsData(
      1,
      "In sit amet fringilla ligula",
      "Maecenas id tortor at erat vehicula laoreet. Aliquam quis ipsum a mi elementum mattis. Vivamus eu hendrerit libero, sed laoreet magna. Etiam elementum velit mauris, at tempus augue varius a. Donec placerat ultricies ex, vitae accumsan urna aliquam ac. In non turpis eu augue efficitur convallis."
    ),
    new NewsData(
      2,
      "Curabitur scelerisque at metus et blandit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in leo sollicitudin erat fermentum tempor. Proin eleifend erat volutpat erat mattis, sed varius dui sodales. Fusce hendrerit nisi vel euismod tincidunt. Praesent hendrerit enim nunc, eget sodales ante varius vitae. Donec porttitor lacinia dolor. Vestibulum ac convallis enim."
    ),
    new NewsData(
      3,
      "In sed posuere est",
      "Donec euismod posuere leo, vel lobortis felis. Donec ultrices feugiat nisi. Cras a augue posuere, blandit nunc non, finibus urna. Ut elementum accumsan ex. Duis ac metus sit amet metus convallis eleifend quis nec urna. Nulla porta vestibulum purus, sit amet imperdiet lorem lobortis sed. Nam tristique congue tortor, sit amet laoreet ante consequat quis."
    ),
    new NewsData(
      4,
      "Cras nulla neque, scelerisque at libero id, semper iaculis sem",
      "Nullam vehicula rutrum efficitur. Sed pharetra enim eu mattis consequat. Sed pharetra leo justo, sit amet auctor enim ullamcorper et. Nulla nec est id dolor vulputate tempus."
    )
  ];

  getNewsList(): NewsData[] {
    return this.news.slice();
  }

  getId(): number {
    return !!this.news ? this.news[this.news.length - 1].id + 1 : 0;
  }

  removeItem(id: number) {
    this.news.splice(
      this.news.findIndex(elem => elem.id === id),
      1
    );
    this.onChange.emit();
  }

  addItem(title: string, content: string, imageUrl: string) {
    this.news.push(new NewsData(this.getId(), title, content, imageUrl));
    this.onChange.emit();
  }
  rankigUp(id: number) {
    this.news.find(elem => elem.id === id).votes++;
    this.onChange.emit();
  }
  rankingDown(id: number) {
    const elem = this.news.find(elem => elem.id === id);
    if (elem.votes > 0) {
      elem.votes--;
      this.onChange.emit();
    }
  }
}
