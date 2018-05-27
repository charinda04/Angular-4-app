import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:String;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor(private dataService:DataService) {
    console.log('constructor ran ...');
   }

  ngOnInit() {
    console.log('ngOnInit ran ...');

    this.name = 'Charinda';
    this.age = 30;
    this.email = 'charinda04@gmail.com';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Write code', 'Watch Movies', 'Listen to music'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
    });
  }

  onClick(){
    this.name = 'Jon Doe';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    for(let i = 0 ; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  

}

interface Address{
  street:string,
  city:string,
  state:string
}
