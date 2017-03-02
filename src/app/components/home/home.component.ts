import { Component } from '@angular/core';
import {Auth} from '../../components/services/auth.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
//   styleUrls: ['.../app.component.css']
})
export class HomeComponent {
//   title = 'app works!';
  constructor(private auth:Auth){
    
  }
}