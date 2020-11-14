import { Component, Input, OnInit, Sanitizer, Output, EventEmitter } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';
import { CommonUtils } from "../../utils/common.utils";

@Component({
  selector: 'video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.css']
})
export class VideoSectionComponent implements OnInit{
  VideotList;
  videoSrc;

  CARD_LOW_ELEVATION = 4;
  CARD_HIGH_ELEVATION = 16;
  cardElevation;

  @Input() dataObject;
  @Output() previewCallBack = new EventEmitter

  constructor(public sanitizer: DomSanitizer) {}

  showVideo(event) {
    this.previewCallBack.emit(event);
  }

  ngOnInit(): void {
    CommonUtils.smoothScroll();
    this.videoSrc  = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/2u9nudpHNPk');
    this.cardElevation = this.CARD_LOW_ELEVATION;
  }

  onMouseEnter() {
    this.cardElevation = this.CARD_HIGH_ELEVATION;
  }
  onMouseExit() {
    this.cardElevation = this.CARD_LOW_ELEVATION;
  }
}
