import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import {AngularFireDatabase} from "angularfire2/database/database";

/*
 Generated class for the ProductProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ProductProvider {

  private API_URL = '';

  constructor(public http: Http,
              private db: AngularFireDatabase) {

  }

  get(params?: any) {
    /*const options = new RequestOptions();
     const p = new URLSearchParams();

     for (let k in params) {
     p.set(k, params[k]);
     }

     options.params = !options.params && p || options.params;
     options.headers = new Headers();
     options.headers.append('Content-Type', "application/json");*/

    /* return this.http.get(this.API_URL, options)
     .map(resp => resp.json());*/
    return this.db.list('/produtos', {

    });
  }

}
