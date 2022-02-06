import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

// un service es una capa que añadimos para manejar los datos.
// Un servicio es un proveedor de dashCaseToCamelCase, que mantiene lógica de acceso lógica de un negocio
// los servicios serán consumidos por los componentes ytendran la responsabilidad de acceder a la información y manipularla

@Injectable({
  // propiedad , indica que es para toda la app
  providedIn: 'root'
})
export class ProductsService {
  private apiURL ='http://localhost:3000/products';
  constructor(private http: HttpClient) {  }

  getProducts():Observable<any>{
    return this.http.get<Product[]>(this.apiURL);
  }
}
// Observable es un flujo de datos en el tiempo
// los aobservables representan una colección de futuros valores o data
