import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-ofandfrom',
  templateUrl: './ofandfrom.component.html',
  styleUrls: ['./ofandfrom.component.css']
})
export class OfandfromComponent implements OnInit {
  objData:any;

  constructor() { }

  ngOnInit(): void {
    let ofVariable = of("Supriya","Sandhya","Shailaja");
    ofVariable.subscribe(res=>{console.log(res);
      this.printElement(res);
    });

    let objVariable = of({"a":"Angular","b":"Php","c":" Core Java"});
    objVariable.subscribe(data=>{
      // console.log(data);
      this.objData=data;
      console.log(this.objData); 
    });

    let ArrayVariable = from(["Computer","Mechanical","Civil"]);
    // let ArrayVariable = of(["Computer","Mechanical","Civil"]);
    ArrayVariable.subscribe(res=>{
      console.log(res);
      this.printArrayElement(res);
    });

    let stringVariable = from("Hii, I am Supriya Jadhav");
    stringVariable.subscribe(res=>{
      // console.log(res);
      this.printStringElement(res);
    });
  } 

  printStringElement(information:any){
    let strElement = document.createElement('li');
    strElement.innerText=information;
    document.getElementById('stringId')?.appendChild(strElement);
  }

  printArrayElement(info:any){ 
    let el1 = document.createElement('li');
    el1.innerText=info;

    document.getElementById("arrayId")?.appendChild(el1);
  }

  printElement(val:any){ 
    let element = document.createElement('li');
    element.innerText = val;

    document.getElementById('listData')?.appendChild(element);
  }

} 