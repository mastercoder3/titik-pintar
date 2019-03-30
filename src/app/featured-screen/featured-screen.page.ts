import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-screen',
  templateUrl: './featured-screen.page.html',
  styleUrls: ['./featured-screen.page.scss'],
})
export class FeaturedScreenPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  ClicktoBack(){
    this.router.navigate(['home']);
  }
}
