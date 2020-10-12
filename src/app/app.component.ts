import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngclassdemo';
  newName = 'abc';
  isItalic = false;
  isHidden = false;
  secondColor = 'blue';
  doClick = function() {
    this.isItalic = !this.isItalic;
    this.secondColor = 'red';
  }
  doHidden = function() {
    this.isHidden = !this.isHidden;
  }
  updateName = function(p: Person) {
    this.newName = p.firstName + ' ' + p.lastName;
  }
}
