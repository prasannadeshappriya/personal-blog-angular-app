import {Component, Input, OnInit} from "@angular/core";
import {BreadcrumbService} from "../../services/breadcrumb.service";

@Component({
  selector: 'breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css'],
  providers: [BreadcrumbService]
})
export class BreadcrumbItemComponent implements OnInit {
  @Input() itemName;

  itemNameValue: string;
  itemRouteValue: string;

  breadCrumbService: BreadcrumbService;
  isEnableSubMenu: boolean;
  breadCrumbItem: any;

  constructor(
    private _breadcrumbService: BreadcrumbService
  ) {
    this.breadCrumbService = _breadcrumbService;
  }

  init() {
    this.isEnableSubMenu = false;
  }

  initBreadcrumbValues() {
    this.itemNameValue =  this.breadCrumbItem.name;
    this.itemRouteValue =  this.breadCrumbItem.route;
  }

  ngOnInit() {
    this.init();
    this.breadCrumbService.getBreadCrumbItemByName(this.itemName)
      .subscribe(
        (breadCrumbItemInfo) => {
          if(breadCrumbItemInfo) {
            this.breadCrumbItem = breadCrumbItemInfo;
            this.initBreadcrumbValues();
          }
        },
        (error) => {
          console.log("Error on getting breadcrumb item details: ", error);
        }
      );
  }
}
