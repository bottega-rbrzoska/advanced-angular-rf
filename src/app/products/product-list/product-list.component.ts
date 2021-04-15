import { Component, OnInit } from '@angular/core';
import { AfterViewInit, QueryList, ViewChild } from '@angular/core';
import { SelectableDirective } from '../../shared/directives/selectable.directive';

@Component({
  selector: 'rf-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements AfterViewInit{

  selectedElements = [];
  @ViewChild(SelectableDirective) selectable: QueryList<SelectableDirective>;
  products = [
    {
      id: '1',
      price: 1.99,
      description: 'prod Descr1',
      name: 'prod1',
      category: 'food'
    },
    {
      id: '2',
      price: 2.99,
      description: 'prod Descr2',
      name: 'prod2',
      category: 'food'
    },
    {
      id: '3',
      price: 3.99,
      description: 'prod Descr3',
      name: 'prod3',
      category: 'food'
    }
  ]
  constructor() { }

  ngAfterViewInit() {
  }

  selectAll() {
    this.selectable.forEach(el => {
      el.isSelected = false;
      el.toggleSelection();
    })
  }
}
