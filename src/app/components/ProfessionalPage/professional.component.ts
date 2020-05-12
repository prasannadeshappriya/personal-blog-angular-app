import {Component, OnInit} from "@angular/core";
import {CommonUtils} from "../../utils/common.utils";

@Component({
  selector: 'professional-page',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit{
  ngOnInit(): void {
    CommonUtils.smoothScroll();
  }
}
