import { Component } from '@angular/core';
// import { HardDriveComponent } from './components/hard-drive/hard-drive.component';
import {Auth} from './components/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app works!';
  constructor(private auth:Auth){
    
  }
}
