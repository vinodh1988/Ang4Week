import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LefthomeComponent } from './lefthome/lefthome.component';
import { RighthomeComponent } from './righthome/righthome.component';
import { BannerComponent } from './banner/banner.component';
import { ContactformComponent } from './contactform/contactform.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { OffersComponent } from './routes/offers/offers.component';
import {CourseService} from './course.service';
import { CourseComponent } from './routes/home/course/course.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';


const routes=[
  {path:"",component: HomeComponent},
  {path:"Offices",component: OfficesComponent},
  {path:"NewCourses",component: NewcoursesComponent},
  {path:"Reviews",component: ReviewsComponent},
  {path:"Offers", component: OffersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LefthomeComponent,
    RighthomeComponent,
    BannerComponent,
    ContactformComponent,
    HomeComponent,
    OfficesComponent,
    ReviewsComponent,
    NewcoursesComponent,
    OffersComponent,
    CourseComponent,
    CourselistComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
