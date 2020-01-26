import { Component, OnInit } from "@angular/core";
import { NewsData } from "../news-data";
import { NewsService } from "../news.service";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"]
})
export class NewsListComponent implements OnInit {
  private news: NewsData[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();

    this.newsService.onChange.subscribe(() => this.loadNews());
  }

  loadNews() {
    this.news = [];

    this.news = this.newsService.getNewsList();
  }
}
