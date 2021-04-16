import { Component, OnInit } from '@angular/core';
import { AfterViewInit, QueryList, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectableDirective } from '../../shared/directives/selectable.directive';
import { Product } from '../Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'rf-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit{

  selectedElements = [];
  @ViewChild(SelectableDirective) selectable: QueryList<SelectableDirective>;
  products$: Observable<Product[]>


  constructor(private productsService: ProductsService) {
    this.products$ = productsService.getProducts()
  }

  ngAfterViewInit() {
  }

  selectAll() {
    this.selectable.forEach(el => {
      el.isSelected = false;
      el.toggleSelection();
    })
  }
}
