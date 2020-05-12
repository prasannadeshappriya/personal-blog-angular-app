import {Component} from "@angular/core";
import {ArticleService} from "../../services/App/article.service";
import {CommonUtils} from "../../utils/common.utils";

@Component({
  selector: 'article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
  providers: [ArticleService]
})
export class ArticlePageComponent {
  articleList;
  constructor(private articleService: ArticleService) {}
  ngOnInit(): void {
    CommonUtils.smoothScroll();

    this.articleService.getArticleList().subscribe(
      (articleDataList) => {
        this.articleList = articleDataList;
      },
      (error) => {
        console.log("Unable to get the article list");
      }
    )
  }
}
