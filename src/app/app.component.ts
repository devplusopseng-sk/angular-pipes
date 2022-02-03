import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular Pipes';

  today = new Date();
  
  a = 0.2748;

  languages = ['Java', 'Spring', 'PHP', '.Net', 'JQuery', 'JavaScript', 'Angular', 'AngularJS', 'NodeJs']

  data = {
    'id': 20,
    'name': {
      'firstname': 'Angular',
      'lastname': 'Pipes'
    }
  };

  emogieMap = { 'happy': ':-)', 'sad': ':-(', 'other': ':-|' };

  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
}
