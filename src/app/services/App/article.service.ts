import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class ArticleService {
  public getArticleList(): Observable<any> {
    return of(this.getArticleListData());
  }
  private getArticleListData(){
    return [
      {
        title: 'How to host NodeJS Express server on Alwaysdata.net',
        imageName: 'articles/notejs-hosting.jpg',
        navigationPath: '/articles/host-nodejs-server',
        lastUpdatedDate: 'September 22, 2018',
        content: 'Express is one of the best-known Node.js frameworks. ' +
          'This article is about creating a simple express server and host it on alwaysdata servers. ' +
          'Node.js allows for fast development, which increases productivity. ' +
          'NodeJS also has high-scalability, meaning that you spend less on infrastructure as less hardware is ' +
          'needed to handle the same amount of load. Alwaysdata Web Services allows you to deploy a ' +
          'high-availability NodeJS web application within short period of time. ' +
          'It also makes extremely easy to push packaged applications for the projects. ' +
          'You have full control over the server on which your NodeJS application is run, ' +
          'and allows you to run multiple applications on the same server.',
        isContentMode: true
      }
    ];
  }
}
