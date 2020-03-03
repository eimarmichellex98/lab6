import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
studentData:any = [];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.getStudentData().subscribe(
      (data)=>{ 
        this.studentData = data;
        console.log(this.studentData);
      }
    );
  }

}
