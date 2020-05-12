import {Component, Inject, Input, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'gallery-img-preview',
  templateUrl: './gallery.preview.component.html',
  styleUrls: ['./gallery.preview.component.css']
})
export class GalleryPreviewComponent implements OnInit{
  imageName;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  ngOnInit(): void {
    if(this.data) {
      this.imageName = this.data.dataKey;
    } else {
      console.log("Unable to preview data image");
    }
  }
}
