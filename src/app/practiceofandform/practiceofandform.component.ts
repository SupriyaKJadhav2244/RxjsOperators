import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-practiceofandform',
  templateUrl: './practiceofandform.component.html',
  styleUrls: ['./practiceofandform.component.css']
})
export class PracticeofandformComponent implements OnInit {
  msg: any;
  msg1: any;
  msg2: any;
  msg3: any;
  msg4: any;

  constructor() { }

  ngOnInit(): void {
    let data = of("Supriya","Sandhya","Shailaja");
    data.subscribe(res=>{
      // console.log(res);
      this.msg = res;
      this.onshow(this.msg);
    });

    let info = of([
      {'id':1,'name':'Supriya'},
      {'id':2,'name':'Sandhya'},
      {'id':3,'name':'Shailaja'}
    ]) 
    info.subscribe(res=>{
      // console.log(res); 
      this.msg1 = res;
      // console.log(this.msg1);
    });
    let information = of({"a":"Angular","b":"Php","c":" Core Java"});
    information.subscribe(objData=>{
      // console.log(res);
      this.msg2 = objData;
      // console.log(this.msg2);
    }); 
    let branch = of(["Computer","Mechanical","Civil"]);
    branch.subscribe(res=>{
      // console.log(res);
      this.msg3 = res;
    });
    
    let branch1 = from(["Computer","Mechanical","Civil"]);
    branch1.subscribe(res=>{ 
      // console.log(res);
      this.printArrayElement(res);
    });
    let fullname = from("Hii, I am Supriya Jadhav");
    fullname.subscribe(res=>{
      // console.log(res);
      this.printStringElement(res);
    }); 
  }
  
  onshow(value:any){
    let ele = document.createElement('li');
    ele.innerHTML = value;
    
    document.getElementById('FirstId')?.appendChild(ele);
  }
  printArrayElement(information:any){
    let strElement = document.createElement('li');
    strElement.innerText=information;
    document.getElementById('SecondId')?.appendChild(strElement);
  }
  printStringElement(information:any){
    let strElement = document.createElement('li');
    strElement.innerText=information;
    document.getElementById('ThirdId')?.appendChild(strElement);
  }

}
