import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { TestAttrDirective } from 'src/app/shared/directives/test-attr.directive';
import { ExampleService } from '../example.service';

@Component({
  selector: 'rf-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit, AfterViewInit {

  @ViewChildren(TestAttrDirective) directives: QueryList<TestAttrDirective>
  constructor(private exampleService: ExampleService) {
    console.log(exampleService)
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.directives.forEach(d => d.rfTestAttr = 'yellow');
    })

  }

}
