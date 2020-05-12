import {Component, OnInit} from "@angular/core";
import {ProjectService} from "../../services/App/project.service";
import {CommonUtils} from "../../utils/common.utils";

@Component({
  selector: 'project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  providers: [ProjectService]
})
export class ProjectPageComponent implements OnInit{
  projectList;
  constructor(private projectService: ProjectService) {}
  ngOnInit(): void {
    CommonUtils.smoothScroll();

    this.projectService.getProjectList().subscribe(
      (projectDataList) => {
        this.projectList = projectDataList;
      },
      (error) => {
        console.log("Unable to get the project list");
      }
    )
  }
}
