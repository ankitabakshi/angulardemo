import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { ProductComponent} from './product/product/product.component'
import { ProductdetailsComponent }  from './product/productdetails/productdetails.component';
import { PagenotfoundComponent } from './product/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'product', component: ProductComponent, canActivate: [AuthGuard]  },
    { path: 'detail/:id', component: ProductdetailsComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/product', pathMatch:'full' },
    { path: '**', component: PagenotfoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes);