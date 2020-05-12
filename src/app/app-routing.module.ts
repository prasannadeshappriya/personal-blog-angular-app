import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./components/HomePage/home-page.component";
import {ProfessionalComponent} from "./components/ProfessionalPage/professional.component";
import {ProjectPageComponent} from "./components/ProjectPage/project-page.component";
import {Project01Component} from "./components/ProjectPage/projects/project1/project-01.component";
import {Project02Component} from "./components/ProjectPage/projects/project2/project-02.component";
import {Project03Component} from "./components/ProjectPage/projects/project3/project-03.component";
import {Project04Component} from "./components/ProjectPage/projects/project4/project-04.component";
import {Project05Component} from "./components/ProjectPage/projects/project5/project-05.component";
import {ArticlePageComponent} from "./components/ArticlePage/article-page.component";
import {Article01Component} from "./components/ArticlePage/articles/article1/article-01.component";
import {ContactComponent} from "./components/ContactPage/contact.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'professional', component: ProfessionalComponent},
  {path: 'projects', component: ProjectPageComponent},
  {path: 'projects/automatic-fabric-defect-detection', component: Project01Component},
  {path: 'projects/chat-bot-project', component: Project02Component},
  {path: 'projects/moodle-mobile-app', component: Project03Component},
  {path: 'projects/train-schedule-app', component: Project04Component},
  {path: 'projects/slt-usage-meter-app', component: Project05Component},
  {path: 'articles', component: ArticlePageComponent},
  {path: 'articles/host-nodejs-server', component: Article01Component},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
