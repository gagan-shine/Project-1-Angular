import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule,MatTooltipModule,MatRadioModule,MatSliderModule,MatCardModule,MatProgressSpinnerModule,MatProgressBarModule,MatChipsModule,MatIconModule,MatTabsModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }	 from '@angular/forms';
import { HttpModule } 	 from '@angular/http';
import { DataTableModule } from "angular2-datatable";

/*import {RlTagInputModule} from 'angular2-tag-input';*/

//SERVICES
import { APIService } from './services/api.service'
import { LoaderService } from './services/loader.service';
//COMPONENTS
import { AppComponent } from './app.component';
import { TransactionsComponent } from './components/transactions.component';
//INCLUDED COMPONENTS
import { SidebarComponent } from './components/includes/sidebar.component';
//ROUTING
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,SidebarComponent,TransactionsComponent
  ],
  imports: [
    MatFormFieldModule,MatTooltipModule,MatRadioModule,MatSliderModule,MatCardModule,MatProgressSpinnerModule,MatProgressBarModule,MatChipsModule,MatIconModule,MatTabsModule,BrowserModule,FormsModule,HttpModule,routing,BrowserAnimationsModule,DataTableModule
  ],
  providers: [APIService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
