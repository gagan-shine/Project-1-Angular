import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class APIService {
    public host = "http://localhost:3000/";
    private api = this.host+"users";
    constructor(private http: Http) { }

    create_transaction(data:any) {
      return new Promise((resolve, reject) => {
          this.http
          .post(this.api + '/create_transaction', data)
          .map(res => res.json())
          .catch((err: Response) => {
            console.log((err.statusText || "Can't join the server."));
            reject((err.statusText || "Can't join the server."));
            return Observable.throw(err);
          })
          .subscribe(transaction => { 
              if(transaction.status==1){
                resolve(transaction.data);
              }else{
                reject(transaction.msg);
                return;
              }
          });
      });
  }

}