import { Component,OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet><span *ngIf="showLoader" class="loading"></span></router-outlet>`,
  styleUrls: ['./app.component.css'],
  /*templateUrl: './app.component.html',*/
})
export class AppComponent implements OnInit {
	showLoader: boolean;
  	constructor(
        private loaderService: LoaderService) {
    }

    ngOnInit() {
        this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
        });
    }
  
}
