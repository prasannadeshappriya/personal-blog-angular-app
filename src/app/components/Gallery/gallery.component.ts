import {Component, Input, OnInit} from "@angular/core";
import {MatDialog} from '@angular/material/dialog';
import {GalleryPreviewComponent} from "./gallery.preview.component";
import {ImageGalleryService} from "../../services/image.gallery.service";

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ImageGalleryService]
})
export class GalleryComponent implements OnInit{
  @Input() previewHeight: any;
  @Input() previewWidth: any;
  imageList;

  constructor(
    public dialog: MatDialog,
    private galleryService: ImageGalleryService) {
    this.init();
  }

  init() {
    if (!this.previewHeight) {
      this.previewHeight = 'auto';
    }
    if (!this.previewWidth) {
      this.previewWidth = 'auto';
    }
  }

  openImageModel(imageName) {
    const dialogRef = this.dialog.open(GalleryPreviewComponent, {
      width: this.previewWidth,
      height: this.previewHeight,
      data: {
        dataKey: imageName
      }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  ngOnInit(): void {
    this.galleryService.getImageListForGallery().subscribe(
      (imageGalleryData) => {
        this.imageList = imageGalleryData;
      },
      (error) => {
        console.log("Unable to get the image gallery data");
      }
    )
  }
}
