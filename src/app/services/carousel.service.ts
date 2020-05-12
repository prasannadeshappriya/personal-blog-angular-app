import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable()
export class CarouselService {
  constructor() {
    console.log('Carousel Service Initialized');
  }
  getCarouselDetails(): Observable<any> {
    //Create image array
    const carouselItems = [
      'bg-header.jpg',
      'macbook-2617705_1280.jpg',
      'Blog-Photo.jpg'
    ]
    return of(carouselItems);
  }
}
