import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams} from "ionic-angular";
import {ProductProvider} from "../../providers/product/product";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Http} from "@angular/http";

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

  products: any = [
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/776be53f3d0abfa30b863363567673a2.png",
      "name": "Arroz Agulhinha Ouro Nobre 5kg "
    },
    {
      "price": "11,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/862ed249f2986bd4767dbb4c3ff6a700_2.png",
      "name": "Arroz Agulhinha Rei do Sul 5kg"
    },
    {
      "price": "13,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/9dee70e5bdee6750d5507aa977b646f9.png",
      "name": "Arroz Agulhinha Brejeiro 5kg"
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/776be53f3d0abfa30b863363567673a2.png",
      "name": "Arroz Agulhinha Ouro Nobre 5kg "
    },
    {
      "price": "11,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/862ed249f2986bd4767dbb4c3ff6a700_2.png",
      "name": "Arroz Agulhinha Rei do Sul 5kg"
    },
    {
      "price": "13,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/9dee70e5bdee6750d5507aa977b646f9.png",
      "name": "Arroz Agulhinha Brejeiro 5kg"
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/776be53f3d0abfa30b863363567673a2.png",
      "name": "Arroz Agulhinha Ouro Nobre 5kg "
    },
    {
      "price": "11,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/862ed249f2986bd4767dbb4c3ff6a700_2.png",
      "name": "Arroz Agulhinha Rei do Sul 5kg"
    },
    {
      "price": "13,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/9dee70e5bdee6750d5507aa977b646f9.png",
      "name": "Arroz Agulhinha Brejeiro 5kg"
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/776be53f3d0abfa30b863363567673a2.png",
      "name": "Arroz Agulhinha Ouro Nobre 5kg "
    },
    {
      "price": "11,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/862ed249f2986bd4767dbb4c3ff6a700_2.png",
      "name": "Arroz Agulhinha Rei do Sul 5kg"
    },
    {
      "price": "13,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/9dee70e5bdee6750d5507aa977b646f9.png",
      "name": "Arroz Agulhinha Brejeiro 5kg"
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/776be53f3d0abfa30b863363567673a2.png",
      "name": "Arroz Agulhinha Ouro Nobre 5kg "
    },
    {
      "price": "11,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/862ed249f2986bd4767dbb4c3ff6a700_2.png",
      "name": "Arroz Agulhinha Rei do Sul 5kg"
    },
    {
      "price": "13,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/9dee70e5bdee6750d5507aa977b646f9.png",
      "name": "Arroz Agulhinha Brejeiro 5kg"
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/776be53f3d0abfa30b863363567673a2.png",
      "name": "Arroz Agulhinha Ouro Nobre 5kg "
    },
    {
      "price": "11,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/862ed249f2986bd4767dbb4c3ff6a700_2.png",
      "name": "Arroz Agulhinha Rei do Sul 5kg"
    },
    {
      "price": "13,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/9dee70e5bdee6750d5507aa977b646f9.png",
      "name": "Arroz Agulhinha Brejeiro 5kg"
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/776be53f3d0abfa30b863363567673a2.png",
      "name": "Arroz Agulhinha Ouro Nobre 5kg "
    },
    {
      "price": "11,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/862ed249f2986bd4767dbb4c3ff6a700_2.png",
      "name": "Arroz Agulhinha Rei do Sul 5kg"
    },
    {
      "price": "13,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/9dee70e5bdee6750d5507aa977b646f9.png",
      "name": "Arroz Agulhinha Brejeiro 5kg"
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/112dd3fe99fa7a360cc1f2a4b71847c1.png",
      "name": "Arroz Parboilizado Ouro Nobre 5kg "
    },
    {
      "price": "12,90",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/776be53f3d0abfa30b863363567673a2.png",
      "name": "Arroz Agulhinha Ouro Nobre 5kg "
    },
    {
      "price": "11,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/862ed249f2986bd4767dbb4c3ff6a700_2.png",
      "name": "Arroz Agulhinha Rei do Sul 5kg"
    },
    {
      "price": "13,95",
      "image": "http://www.supermercadosguanabara.com.br/out_files/img_produtos/9dee70e5bdee6750d5507aa977b646f9.png",
      "name": "Arroz Agulhinha Brejeiro 5kg"
    }
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public product: ProductProvider) {

    this.productList = product.get();
  }

  loadProducts() {
    // this.productList = this.product.get();
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
    $event.complete();
    //this.productList = this.product.get();
    //this.productList.subscribe(() => $event.complete());
  }



}
