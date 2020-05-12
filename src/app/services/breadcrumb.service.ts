import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class BreadcrumbService {
  //Create the item array
  items = {
    'nav_home': { name: 'Home', route: '/home'},
    'nav_projects': { name: 'Projects', route: '/projects'},
    'nav_cv': { name: 'CV', route: '/professional'},
    'nav_articles': { name: 'Articles', route: '/articles'},
    'nav_contact': { name: 'Contact', route: '/contact'},
  };

  constructor() {
    console.log('BreadCrumb Service Initialized');
  }

  getBreadCrumbItemList(): Observable<any> {
    return of(this.items);
  }

  getBreadCrumbItemByName(itemName): Observable<any> {
    let itemReturnValue = null;
    Object.keys(this.items).forEach(
      value => {
        if (itemReturnValue) {
          return;
        }
        if (value === itemName) {
          itemReturnValue = this.items[value];
          return;
        }
      }
    )
    if (!itemReturnValue) {
      console.log("Unable to get value for breadcrumb item: ", itemName);
    }
    //Return the breadcrumb item to the caller
    return of(itemReturnValue);
  }
}

