import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() imgPath: string;
  @Input() imgAlt: string;
  @Input() imgName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
