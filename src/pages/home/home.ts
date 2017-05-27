import {Component} from "@angular/core";
import {IonicPage, ModalController, NavController, NavParams} from "ionic-angular";

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

  produtos: any = [
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
    },
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

  }

  abrirPesquisar() {
    this.navCtrl.push('PesquisarProdutoPage', {

    });
  }

}
