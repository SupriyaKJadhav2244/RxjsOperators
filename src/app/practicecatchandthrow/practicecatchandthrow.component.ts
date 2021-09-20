import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-practicecatchandthrow',
  templateUrl: './practicecatchandthrow.component.html',
  styleUrls: ['./practicecatchandthrow.component.css']
})
export class PracticecatchandthrowComponent implements OnInit {

  constructor(private service:MyserviceService) { }

  errorMsg : any;


  ngOnInit(): void {
    this.service.onShow().subscribe(res=>{
      console.log(res);
    },error=>{
    console.log(error);
    this.errorMsg = error;
  });
  }

}
