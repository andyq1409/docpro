import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  GendocService {

  private url = "http://localhost:8080/raport";

	constructor(private http: HttpClient) {}

	downloadFile(pack: string, prod: string): Observable<any> {
    const pars = new HttpParams()
      .set("pack", pack)
      .set("prod", prod);
    return this.http.get(this.url, {params: pars, responseType: "blob"} );
    //return this.http.post(this.url, { pack, prod},{ headers:{ 'content-type': 'application/pdf'} , observe: 'body'});


}}

