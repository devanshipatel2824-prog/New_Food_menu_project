import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
 protected Email="devanshi@gmal.com";
 protected Contact_No=5631478965;
 protected Address="Dungri Reliya Faliya";
 name?:string;

//  click(){
// console.log("Test");

//   console.log(this.Email);
// }
// change(value: string) {
// console.log(value);
// }
}
