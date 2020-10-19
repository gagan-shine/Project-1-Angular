import { Component,OnInit } from '@angular/core';
import { APIService } from '../services/api.service';
import { LoaderService } from '../services/loader.service';
import {Http} from "@angular/http";
@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
})
export class TransactionsComponent implements OnInit  { 
	public loading		:boolean;
	public loading_text	:string;
	public edit_error 	:any;
	public edit_success :any;
	public user_edit_error 	:any;
	public user_edit_success :any;
	public curindex		:any;
	public params:any;
	public data:any;
	public balance_amount:any=0;
	

	constructor(private api : APIService,private loaderService: LoaderService, private http: Http){
		this.loading=true;		
		this.loading_text="Loading Data...";
		this.params = {
			type:'1',
			amount:'',
			description:''
		}
	}
	ngOnInit(){
		this.http.get("http://localhost:3000/users/transactions_list")
            .subscribe((data)=> {
                setTimeout(()=> {
					var list = data.json();
					this.data = list.data;
					this.balance_amount = list.data[0].balance;
					console.log("this.balance_amount=====",this.balance_amount)
                }, 2000);
			});
			

	}

	create_transaction(data){
		console.log(this.balance_amount,"===data=======",data)
		if(this.balance_amount > 0){
			if(data.type=="0"){
				data.balance = parseFloat(this.balance_amount) - parseFloat(data.amount);
			}else{
				data.balance = parseFloat(this.balance_amount) + parseFloat(data.amount);
			}				
		}else{
			data.balance = data.amount;
		}
		console.log("data.balance====",data.balance)
		this.api.create_transaction(data).then(list => {
			this.user_edit_error = "";
			this.user_edit_success = "Transaction saved successfully";
			this.loaderService.display(false);
			this.ngOnInit();
		},err=>{
			this.user_edit_success = "";
			this.user_edit_error = err;
			this.loaderService.display(false);
		});
	}
}
