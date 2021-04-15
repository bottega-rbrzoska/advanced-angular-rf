import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { TestService } from 'src/app/core/services/test.service';


@Directive({
  selector: '[rfTestStr]'
})
export class TestStrDirective implements OnInit {

 // @Input() rfTestStr: number

  constructor(private template: TemplateRef<any>, private vcr: ViewContainerRef, private testService: TestService) {
  }

  ngOnInit() {
    for (let index = 0; index < this.testService.counter; index++) {

    this.vcr.createEmbeddedView(this.template, {
      $implicit: index
    })

    }
  }

}
