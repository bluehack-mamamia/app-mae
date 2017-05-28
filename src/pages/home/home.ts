import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {ProductProvider} from "../../providers/product/product";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {AngularFireDatabase} from "angularfire2/database/database";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  productList: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public product: ProductProvider) {

    this.productList = product.get();
  }

  loadProducts() {
    this.productList = this.product.get();
  }

  openSearch() {
    this.navCtrl.push('ProductSearchPage');
  }

  openDetails(product: any) {
    this.navCtrl.push('ProductPage', {
      product: product
    });
  }

  loadMore($event: any) {
    this.productList = this.product.get();
    this.productList.subscribe(() => $event.complete());
  }

}
