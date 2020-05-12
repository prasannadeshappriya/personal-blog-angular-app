import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'card-item',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  CARD_LOW_ELEVATION = 4;
  CARD_HIGH_ELEVATION = 16;
  cardElevation;

  //Input values
  @Input() cardTitle;
  @Input() cardImage;
  @Input() cardNavigatePath;
  @Input() lastUpdatedDate;
  @Input() cardContent;
  @Input() cardTechnologies;
  @Input() isEnableMarginTop = true;
  @Input() isClickable = false;

  constructor() {}
  onMouseEnter() {
    if(this.isClickable) {
      this.cardElevation = this.CARD_HIGH_ELEVATION;
    }
  }
  onMouseExit() {
    if(this.isClickable) {
      this.cardElevation = this.CARD_LOW_ELEVATION;
    }
  }
  ngOnInit(): void {
    this.cardElevation = this.CARD_LOW_ELEVATION;
  }
}
