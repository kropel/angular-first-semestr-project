import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-editor",
  templateUrl: "./news-editor.component.html",
  styleUrls: ["./news-editor.component.css"]
})
export class NewsEditorComponent implements OnInit {
  createdTitle: string;
  createdImgUrl: string;
  createdContent: string;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.createdTitle = "";
  }

  addNews() {
    if (this.createdTitle) {
      this.newsService.addItem(
        this.createdTitle,
        this.createdContent,
        this.createdImgUrl
      );
      // this.createdTitle = '';
    }
  }
}
