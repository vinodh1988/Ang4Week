import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../../course.service';
import {Course} from '../../../course';

@Component({
  selector: 'courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {
courses:Course[];

  constructor(private cs:CourseService) {
       this.courses=cs.getCourses();
   }

  ngOnInit() {
  }

}
