import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { AjaxComponent } from './ajax/ajax.component';
import { ClothesComponent } from './clothes/clothes.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { Cros1Component } from './product/components/cros1/cros1.component';
import { Cros2Component } from './product/components/cros2/cros2.component';
import { Cros3Component } from './product/components/cros3/cros3.component';
import { Cloth1Component } from './clothes/components/cloth1/cloth1.component';
import { Cloth2Component } from './clothes/components/cloth2/cloth2.component';
import { Cloth3Component } from './clothes/components/cloth3/cloth3.component';
import { Acs1Component } from './accessories/components/acs1/acs1.component';
import { Acs2Component } from './accessories/components/acs2/acs2.component';
import { Acs3Component } from './accessories/components/acs3/acs3.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    AjaxComponent,
    ClothesComponent,
    AccessoriesComponent,
    Cros1Component,
    Cros2Component,
    Cros3Component,
    Cloth1Component,
    Cloth2Component,
    Cloth3Component,
    Acs1Component,
    Acs2Component,
    Acs3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"", component: MainComponent},
      {path:"goods", component: ProductComponent},
      {path:"ajax", component: AjaxComponent},
      {path:"t_shirts", component: ClothesComponent},
      {path:"trinkets", component: AccessoriesComponent},
      {path:"cros1", component: Cros1Component},
      {path:"cros2", component: Cros2Component},
      {path:"cros3", component: Cros3Component},
      {path:"cloth1", component: Cloth1Component},
      {path:"cloth2", component: Cloth2Component},
      {path:"cloth3", component: Cloth3Component},
      {path:"acs1", component: Acs1Component},
      {path:"acs2", component: Acs2Component},
      {path:"acs3", component: Acs3Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
