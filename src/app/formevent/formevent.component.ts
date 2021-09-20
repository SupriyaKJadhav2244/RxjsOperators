import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-formevent',
  templateUrl: './formevent.component.html',
  styleUrls: ['./formevent.component.css']
})
export class FormeventComponent implements OnInit, AfterViewInit{


  @ViewChild("addButton") addButton!: ElementRef;

  constructor() { }

  ngOnInit(): void { 
  }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addButton.nativeElement,"click").subscribe(ref=>{
      let video = "video "+count++;
      console.log(video);
      this.print(video);
    });
   }

   print(val:any){ 
     let liEl = document.createElement("li");
     liEl.innerText=val;

     document.getElementById("list")?.appendChild(liEl);
   }
}
