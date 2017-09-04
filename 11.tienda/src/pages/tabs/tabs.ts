import { Component } from '@angular/core';
import { HomePage, CategoriasPage, OrdenesPage} from '../index.paginas';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  public tab1 = HomePage;
  public tab2 = CategoriasPage;
  public tab3 = OrdenesPage;
}
