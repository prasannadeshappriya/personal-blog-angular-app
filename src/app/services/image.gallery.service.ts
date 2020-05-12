import {Injectable} from "@angular/core";
import {Observable,of} from "rxjs";

@Injectable()
export class ImageGalleryService {
  constructor() {}
  getImageListForGallery(): Observable<any> {
    const imageSet = [
      '20171217_142934.jpg',
      '20191026_160530.jpg',
      'DSC_0030.JPG',
      'DSC_0117.JPG'
    ]
    return of(imageSet);
  }
}
