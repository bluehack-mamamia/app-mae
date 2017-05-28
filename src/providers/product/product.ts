import {Injectable} from "@angular/core";
import {Http, RequestOptions, URLSearchParams, Headers} from "@angular/http";
import "rxjs/add/operator/map";

/*
 Generated class for the ProductProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ProductProvider {

  private API_URL = 'http://nori-us-east-1.searchly.com/products/_search?q=name=Kani';

  constructor(public http: Http) {

  }

  get(params?: any) {
    const options = new RequestOptions();
    const p = new URLSearchParams();

    for (let k in params) {
      p.set(k, params[k]);
    }

    options.params = !options.params && p || options.params;
    options.headers = new Headers();
    options.headers.append("Authorization", "Basic " + btoa('bluemix' + ":" + '73de6dc581b6d56cbf95111f252ca3bb'));
    options.headers.append('Content-Type', "application/json");

    return this.http.get(this.API_URL, options)
      .map(resp => resp.json().hits.hits);
  }

}
