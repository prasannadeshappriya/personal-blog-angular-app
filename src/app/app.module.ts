import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from "./components/BreadCrumb/breadcrumb.component";
import { BreadcrumbItemComponent } from "./components/BreadCrumb/breadcrumb-item.component";
import { HomePageComponent } from "./components/HomePage/home-page.component";
import { MaterialModule } from "./core/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselComponent } from "./components/Carousel/carousel.component";
import { FooterComponent } from "./components/Footer/footer.component";
import { GalleryComponent } from "./components/Gallery/gallery.component";
import { GalleryItemComponent } from "./components/Gallery/gallery.item.component";
import { MatDialogModule } from "@angular/material/dialog";
import { GalleryPreviewComponent } from "./components/Gallery/gallery.preview.component";
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";
import { ProfessionalComponent } from "./components/ProfessionalPage/professional.component";
import { ProjectPageComponent } from "./components/ProjectPage/project-page.component";
import { CardComponent } from "./components/Card/card.component";
import { MatCardModule } from "@angular/material/card";
import { Project01Component } from "./components/ProjectPage/projects/project1/project-01.component";
import { Project02Component } from "./components/ProjectPage/projects/project2/project-02.component";
import { Project03Component } from "./components/ProjectPage/projects/project3/project-03.component";
import { Project04Component } from "./components/ProjectPage/projects/project4/project-04.component";
import { Project05Component } from "./components/ProjectPage/projects/project5/project-05.component";
import { ArticlePageComponent } from "./components/ArticlePage/article-page.component";
import { Article01Component } from "./components/ArticlePage/articles/article1/article-01.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { ContactComponent } from "./components/ContactPage/contact.component";
import { AlertDialogComponent } from "./components/Common/alert-dialog.component"
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { AuthComponent } from "./components/Dashboard/auth.component";
import { DashboardComponent } from "./components/Dashboard/dashboard.component";
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../app/services/App/auth.service';
import { ErrorInterceptor } from './utils/error.interceptor';
import { JwtInterceptor } from './utils/jwt.interceptor';
import { VideoPageComponent } from './components/VideoPage/video-page.component';
import { VideoSectionComponent } from './components/VideoPage/video-section.component';
import { VideoCardComponent } from './components/VideoPage/video-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
    HomePageComponent,
    CarouselComponent,
    FooterComponent,
    GalleryComponent,
    GalleryItemComponent,
    GalleryPreviewComponent,
    ProfessionalComponent,
    ProjectPageComponent,
    CardComponent,
    Project01Component,
    Project02Component,
    Project03Component,
    Project04Component,
    Project05Component,
    ArticlePageComponent,
    Article01Component,
    ContactComponent,
    AuthComponent,
    AlertDialogComponent,
    DashboardComponent,
    VideoPageComponent,
    VideoSectionComponent,
    VideoCardComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatDialogModule,
        PdfViewerModule,
        NgxExtendedPdfViewerModule,
        MatCardModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSelectModule,
        FormsModule,
        MatProgressBarModule
    ],
  entryComponents: [AlertDialogComponent],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [
    AppComponent,
    BreadcrumbComponent
  ]
})
export class AppModule { }
