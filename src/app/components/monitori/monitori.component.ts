import { Component } from '@angular/core';
import { MonitoriService } from '../services/monitori.service';
import {Auth} from '../services/auth.service';
import {Input} from '@angular/core';
@Component({
  selector: 'monitori',
  templateUrl: './monitori.html',
  // styleUrls: ['.../app.component.css'],
  providers: [MonitoriService]
})
export class MonitoriComponent {
  title = 'neki monitori';
  monitor: Monitor[];
  name: string;
  img: string;
  tip: string;
  dijagonala: string;
  rezolucija: string;
  osvetljenje: string;
  kontrast: string;
  vidljivo: boolean;

  constructor(private monitoriService: MonitoriService){
      this.monitoriService.getMonitori().subscribe(monitor =>{
          this.monitor = monitor;
      });
  }
  // @Input()vidljivo;

  


  
  showMonitors(){
  this.vidljivo= !this.vidljivo;
  console.log(this.vidljivo);
}

}




interface Monitor{
  //    name: string;
  // img: string;
  // tip: string;
  // dijagonala: string;
  // rezolucija: string;
  // osvetljenje: string;
  // kontrast: string;
}