import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-intervalandtimer',
  templateUrl: './intervalandtimer.component.html',
  styleUrls: ['./intervalandtimer.component.css']
})
export class IntervalandtimerComponent implements OnInit {

  video: any; 
  num: any;
  videoSubscription!: Subscription;
  videoSub!: Subscription;

  constructor() { }

  ngOnInit(): void {
    let count = interval(3000);
    let time = timer(4000,5000);
    this.videoSubscription = count.subscribe(res=>{
      // console.log(res);
      this.num = res+1;  
      this.video = "video "+this.num; 
      // console.log(this.video);
      this.print(this.video);
      if(this.num >=10){
        this.videoSubscription.unsubscribe(); 
       } 
    });

    this.videoSub = time.subscribe(res=>{
      // console.log(res);
      this.num = res+1;  
      this.video = "video "+this.num; 
      // console.log(this.video);
      this.printdata(this.video);
      if(this.num >=10){
        this.videoSub.unsubscribe(); 
       } 
    });
  }

  print(val:any){
    let element = document.createElement('li');
    element.innerText=val;

    document.getElementById('videoList')?.appendChild(element);
   }
   printdata(val:any){
    let element = document.createElement('li');
    element.innerText=val;

    document.getElementById('videoListTime')?.appendChild(element);
   }

}
