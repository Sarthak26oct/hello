import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { BedComponent } from './pages/bed/bed.component';
import { CarpetsComponent } from './pages/carpets/carpets.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DiningComponent } from './pages/dining/dining.component';
import { LightingComponent } from './pages/lighting/lighting.component';
import { PaintingComponent } from './pages/painting/painting.component';
import { SofaComponent } from './pages/sofa/sofa.component';
import { WallAccessoriesComponent } from './pages/wall-accessories/wall-accessories.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CheckoutComponent } from './shared/checkout/checkout.component';
import { ProductDetailComponent } from './shared/product-detail/product-detail.component';
import { ThankYouComponent } from './shared/thank-you/thank-you.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'bed',
    component: BedComponent,
  },
  {
    path: 'painting',
    component: PaintingComponent,
  },
  {
    path: 'carpets',
    component: CarpetsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'dining',
    component: DiningComponent,
  },
  {
    path: 'lighting',
    component: LightingComponent,
  },
  {
    path: 'wall-accessories',
    component: WallAccessoriesComponent,
  },
  {
    path: 'sofa',
    component: SofaComponent,
  },
  {
    path: 'products/:productid',
    component: ProductDetailComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
  },
  {
    path: 'checkout',
    canActivate: [AuthGuardService],
    component: CheckoutComponent,
  },
  {
    path: 'success',
    component: ThankYouComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
