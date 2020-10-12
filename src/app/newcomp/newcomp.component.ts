import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  @Input() header = "Starting Header";
  @Output() callParent = new EventEmitter<Person>(); // asynchronous events
  firstName = "George";
  lastName = "Washington";
  constructor() { }

  ngOnInit(): void {
  }

  clickResults = function() {
    //alert(`Welcome ${this.firstName} ${this.lastName}`);
    // We could build a person object
    let p: Person = { firstName: this.firstName, lastName: this.lastName };
    //this.callParent.emit(`${this.firstName} ${this.lastName}`);
    this.callParent.emit(p);
  }

  clickTest = function() {
    this.firstName = 'Please enter first name';
    this.lastName = 'Please enter last name';
  }

}
