import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})
export class Project1Component implements OnInit {
  imgs;

  constructor() {
    this.imgs = {
      row1: [
        {
          imgPath: 'assets/1.PNG',
          imgAlt: 'Forest',
          name: 'The interview'
        },
        {
          imgPath: 'assets/2.PNG',
          imgAlt: 'Forest',
          name: 'Friends'
        },
        {
          imgPath: 'assets/3.PNG',
          imgAlt: 'Forest',
          name: 'The Croods'
        },
      ],
      row2: [
        {
          imgPath: 'assets/4.PNG',
          imgAlt: 'Forest',
          name: 'Futurama'
        },
        {
          imgPath: 'assets/5.PNG',
          imgAlt: 'Forest',
          name: 'Gilmore Girls'
        }
      ]
    };
  }

  ngOnInit(): void {
  }

}
