import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  constructor() { }
  segmentModel = "all";
  segmentChanged(event) {
    console.log(this.segmentModel);

    console.log(event);
  }
  ngOnInit() {
  }

}
