import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'; 
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit{ 

  name: any;
  @ViewChild('parentBox') parentBox!: ElementRef;

  @ViewChild(ChildComponent) child!: ChildComponent;
 
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // console.log(this.parentBox);
    // this.parentBox.nativeElement.style.backgroundColor="blue";
    // this.parentBox.nativeElement.innerHTML="View Child Example Practice";
    // this.parentBox.nativeElement.style.height="30px";
    // this.parentBox.nativeElement.style.border="2px solid black";

    console.log(this.child); 
  }

  callProperty(){
    this.child.name="Sandhya";
  }

  callMethod(){
    this.child.clickMe();
  }

  onclick(val:any){
    // console.log(val.value);
    this.name=val.value;
  }

}
