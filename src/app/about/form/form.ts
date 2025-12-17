import { Component, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './form.html',
  styleUrls: ['./form.css']
})
export class Form {
   nameInput = '';
  emailInput = '';
  passwordInput = '';
  addressInput = '';
  users: any[] = [];
  editingIndex: number | null = null;
  add() {
    if (this.editingIndex !== null) {
  
      this.users[this.editingIndex] = {
        name: this.nameInput,
        email: this.emailInput,
        password: this.passwordInput,
        address: this.addressInput
      };
      this.editingIndex = null; 
    } else {
  
      this.users.push({
        name: this.nameInput,
        email: this.emailInput,
        password: this.passwordInput,
        address: this.addressInput
      });
    }
    this.nameInput = '';
    this.emailInput = '';
    this.passwordInput = '';
    this.addressInput = '';
  }

  delete(index: number) {
    this.users.splice(index, 1);
    if (this.editingIndex === index) {
      this.editingIndex = null;
      this.nameInput = '';
      this.emailInput = '';
      this.passwordInput = '';
      this.addressInput = '';
    }
  }

  edit(index: number) {

    this.nameInput = this.users[index].name;
    this.emailInput = this.users[index].email;
    this.passwordInput = this.users[index].password;
    this.addressInput = this.users[index].address;
    this.editingIndex = index;
  }
}
