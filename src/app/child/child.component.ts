import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
// , OnChanges, AfterContentInit,AfterContentChecked,
// AfterViewInit,AfterViewChecked
{

  @Input() myinput!: string; 
  name: string="Supriya";

  constructor() {
    // console.log("Constructor is working");
  }

  // ngOnChanges(change:SimpleChanges){
  //   // console.log("ngOnChanges is working");
  //   console.log("ngOnChanges is working : "+change.myinput.currentValue); 
  // }

  ngOnInit(): void {
    // console.log(this.myinput);
    // console.log("ngOnInit is working");
  }

  // ngDoCheck(){
  //   console.log("ngDoCheck is working");
  // }

  // ngAfterContentInit(){ 
  //   console.log("ngAfterContentInit is working");
  // }

  // ngAfterContentChecked(){ 
  //   console.log("ngAfterContentChecked is working");
  // }

  // ngAfterViewInit(){ 
  //   console.log("ngAfterViewInit is working");
  // }

  // ngAfterViewChecked(){ 
  //   console.log("ngAfterViewChecked is working");
  // }

  clickMe(){  
    alert("My Name Is : "+this.name);
  }

}
