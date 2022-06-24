import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SearchComponent } from './shared/search/search.component';
import { HomeComponent } from './home/home.component';
import { BedComponent } from './pages/bed/bed.component';
import { WallAccessoriesComponent } from './pages/wall-accessories/wall-accessories.component';
import { CarpetsComponent } from './pages/carpets/carpets.component';
import { SofaComponent } from './pages/sofa/sofa.component';
import { PaintingComponent } from './pages/painting/painting.component';
import { DiningComponent } from './pages/dining/dining.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { LightingComponent } from './pages/lighting/lighting.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { ProductDetailComponent } from './shared/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartBadgeComponent } from './shared/shopping-cart-badge/shopping-cart-badge.component';
import { BadgeModule } from 'primeng/badge';
import { CheckoutComponent } from './shared/checkout/checkout.component';
import { ThankYouComponent } from './shared/thank-you/thank-you.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './shared/user/user.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    BedComponent,
    WallAccessoriesComponent,
    CarpetsComponent,
    SofaComponent,
    PaintingComponent,
    DiningComponent,
    ContactComponent,
    AboutComponent,
    LightingComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    ShoppingCartBadgeComponent,
    CheckoutComponent,
    ThankYouComponent,
    LoginComponent,
    UserComponent,
    SignupComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BadgeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
