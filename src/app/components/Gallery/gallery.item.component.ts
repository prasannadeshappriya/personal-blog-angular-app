import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery.item.component.html',
  styleUrls: ['./gallery.item.component.css']
})
export class GalleryItemComponent {
  @Input() imageName: any;
  @Output() previewCallBack = new EventEmitter();

  constructor() {
    console.log(this.previewCallBack);
  }

  preview(event) {
    this.previewCallBack.emit(this.imageName);
  }
}
