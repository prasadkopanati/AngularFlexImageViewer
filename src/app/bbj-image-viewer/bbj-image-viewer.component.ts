import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bbj-image-viewer',
  templateUrl: './bbj-image-viewer.component.html',
  styleUrls: ['./bbj-image-viewer.component.scss']
})
export class BbjImageViewerComponent implements OnInit {

  imgPaths = [
    '/assets/imgs/cards/2C.jpg',
    '/assets/imgs/cards/2D.jpg',
    '/assets/imgs/cards/2H.jpg',
    '/assets/imgs/cards/2S.jpg',
    '/assets/imgs/cards/3C.jpg',
    '/assets/imgs/cards/4C.jpg',
    '/assets/imgs/cards/3S.jpg',
    '/assets/imgs/cards/4D.jpg',
    '/assets/imgs/cards/4H.jpg',
    '/assets/imgs/cards/3S.jpg',
    '/assets/imgs/cards/4D.jpg',
    '/assets/imgs/cards/4H.jpg',
    '/assets/imgs/cards/3S.jpg',
    '/assets/imgs/cards/4D.jpg',
    '/assets/imgs/cards/4H.jpg',
    '/assets/imgs/cards/3S.jpg',
    '/assets/imgs/cards/4D.jpg',
    '/assets/imgs/cards/4H.jpg',
    '/assets/imgs/cards/3S.jpg',
    '/assets/imgs/cards/4D.jpg',
    '/assets/imgs/cards/4H.jpg',
  ];
  itemsPerRow = 8;
  rows = [];
  isImgResizing=true;
  isChart=true;
  isLoading = true;

  constructor() { }

  ngOnInit() {
    this.createRowGrid();
  }

  createRowGrid() {
    // Create a grid of imgs
    // [ 1: imgs[],
    //   2: imgs[],
    //   ...
    // ]
    this.rows = []; // init
    let rowIdx = 0;
    for ( let j=0; j < Math.ceil( this.imgPaths.length / this.itemsPerRow); j++ ) {
      let newRow = { 'rowIdx': rowIdx, imgs: [] };
      for(let i=0; i < this.itemsPerRow; i++) {
        let imgIdx = j*this.itemsPerRow + i;
        let imgPath = imgIdx < (this.imgPaths.length) ? this.imgPaths[ imgIdx ]: '';
        newRow['imgs'].push( imgPath );
      }
      this.rows.push( newRow );
      rowIdx++;
    }

    setTimeout(() => {
      this.isLoading = false;
      this.isImgResizing = true;
      this.isChart = true;
    }, 700);

  }

  onRowCountChange( $e) {
    this.itemsPerRow =  $e;
    this.isLoading = true;
    this.isImgResizing = false;
    this.isChart = false;
    this.createRowGrid();
  }

  toggleTasks( showStr ) {
    this.isImgResizing = (showStr == 'image') ? !this.isImgResizing: this.isImgResizing;
    this.isChart = (showStr == 'chart') ? !this.isChart  : this.isChart ;
  }

}
