import { Injectable } from '@angular/core';
import {Course} from './course';

@Injectable()
export class CourseService {

  private courses:Course[];
  
  constructor() { 
  this.courses=[{
           image: "angular2.png",
           name:" Angular 2",
           price:24000,
           description:"Googles Javascript framework"
       },
       {
        image: "asp.png",
        name:" ASP NET",
        price:14000,
        description:"DOT NET Web language"
    },
    {
      image: "CSS3.png",
      name:"CSS3",
      price:10000,
      description:"www standard for web styling"
  },
  {
    image: "html5.png",
    name:" HTML %",
    price:10000,
    description:"Latest Available version for HTML"
  },
  {
    image: "react.png",
    name:"React",
    price:24000,
    description:"Facebooks answer for component based frameworks"
},
{
  image: "redhat.png",
  name:" Red Hat Linux",
  price:14000,
  description:"Enterprise Grade Linux OS"
},
{
  image: "SQL.png",
  name:" SQL",
  price:11000,
  description:"Standard Database query language"
},
];
  }

  getCourses():Course[]{
    return this.courses;
  }



}
