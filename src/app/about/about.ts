import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet} from "@angular/router";
import { Router } from 'express';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
