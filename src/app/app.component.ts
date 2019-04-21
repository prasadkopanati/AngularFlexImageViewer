import {Component, OnInit, NgZone, OnDestroy, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private zone: NgZone) {
  }

}
