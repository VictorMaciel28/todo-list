import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})

export class ItemsService {

    constructor(
        private http: HttpClient,
    ) { }

    getData(productURL: string){
        let url = 'https://api.jsonbin.io/b/' + productURL;
        return this.http.get<Data>(url);
    }
}

export interface Data {
    items: []
}
