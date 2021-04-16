import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
import * as yup from 'yup';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productSchemaValidator = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    category: yup.string().required()
  })


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products').pipe(tap(prods => {
      prods.forEach(prod => {
        this.productSchemaValidator.validateSync(prod)
      })
    }))
  }
}
