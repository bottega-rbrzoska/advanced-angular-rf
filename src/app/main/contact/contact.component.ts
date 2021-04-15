import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/core/services/test.service';

@Component({
  selector: 'rf-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private testService: TestService) {
    testService.getCategories().subscribe( v => console.log(v))
   }

  ngOnInit(): void {
  }

}
