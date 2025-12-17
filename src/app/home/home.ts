import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,          // ⭐ MUST
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'], // ⭐ plural
})
export class Home {
protected imageurl1 = "/image/home_page_2.jpg";
protected imageurl2 = "/image/home_page_1.jpg";
protected imageurl3 = "/image/home_page_3.jpg";

slides = [
    this.imageurl1,
    this.imageurl2,
    this.imageurl3
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

}
