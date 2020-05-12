import {Component, Input, OnInit} from "@angular/core";
import {CarouselService} from "../../services/carousel.service";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [CarouselService]
})
export class CarouselComponent implements OnInit{
  @Input() carouselHeader;
  @Input() carouselText;

  carouselService: CarouselService;
  carouselDetails: any;

  constructor(
    private _carouselService: CarouselService
  ){
    this.carouselService = _carouselService;
  }

  ngOnInit(): void {
    this.carouselService.getCarouselDetails().subscribe(
      (carouselDetails) => {
        console.log(carouselDetails);
        this.carouselDetails = carouselDetails;
      },
      (error) => {
        console.log("Unable to get carousel service information");
      }
    );
  }
}
