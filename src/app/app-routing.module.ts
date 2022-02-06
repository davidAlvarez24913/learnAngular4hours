import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// espera un objeto propiedades ruta y component para renderizarla 
// las rutas es de entrada secuencial, por eso el capturador de rutas erroneas va siempre al final
const routes: Routes = [
  // lazy loading
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  {path:'**', redirectTo: '', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
