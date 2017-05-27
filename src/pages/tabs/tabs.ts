import { IonicPage } from 'ionic-angular';
import {Component} from "@angular/core";

import {HomePage} from "../home/home";


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'MyListPage';
  tab3Root = 'ComparatorPage';

  constructor() {

  }
}
