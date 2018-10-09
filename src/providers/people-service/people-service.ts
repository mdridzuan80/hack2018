import {HttpClient} from '@angular/common/http';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from ‘@angular/common/http’;
// import {PeopleService} from '../../providers/people-service/people-service';


/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {
    apiUrl = 'http://localhost:3000';
    // apiUrl = 'http://103.75.190.110/api';

    constructor(public http: HttpClient) {
        console.log('Hello PeopleServiceProvider Provider');
    }

    getUsers() {
        // if (this.data)
        {
            // already loaded data
            // let headers = {'Accept': 'Application/json', 'Authorization': 'Bearer $2y$10$R3L2u4/rnoV0ajF6Fiq6AeP2FFmtvkS0.9AwkxpWF.3NksFvACFk2'};
            return new Promise(resolve => {
                // this.http.get(this.apiUrl + '/pelajar/950416145457', {headers})
                this.http.get(this.apiUrl + '/PELAJAR')

                    .subscribe(data => {
                        resolve(data);
                    },
                    err => {
                        console.log(err);
                    });
            });
        }
    }
    saveUser(data) {
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl+'/pelajar/950416145457', JSON.stringify(data)).subscribe(res => {
                resolve(res);
            }, (err) => {
                reject(err);
            });
        });
    }
}


