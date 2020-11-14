import { Component, Input, OnInit, Sanitizer,Output, EventEmitter } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { CommonUtils } from "../../utils/common.utils";

@Component({
  selector: 'video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit{
  @Input() imageSrc;
  @Input() cardTitle;
  @Input() cardDesHeader;
  @Input() cardDescription;
  @Input() videoSrc;
  @Input() user;
  @Input() duration;

  @Output() previewCallBack = new EventEmitter

  VideotList;

  CARD_LOW_ELEVATION = 4;
  CARD_HIGH_ELEVATION = 16;
  cardElevation;

  constructor(public sanitizer: DomSanitizer) {}

  showVideo(event) {
    this.previewCallBack.emit(event);
  }
  
  ngOnInit(): void {
    CommonUtils.smoothScroll();
    this.cardElevation = this.CARD_LOW_ELEVATION;
  }

  onMouseEnter() {
    this.cardElevation = this.CARD_HIGH_ELEVATION;
  }
  onMouseExit() {
    this.cardElevation = this.CARD_LOW_ELEVATION;
  }
}
