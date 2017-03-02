import { Component } from '@angular/core';
import { HardsService } from '../services/hard-drive.service';
import {Hard} from '../../hard.class';

@Component({
  selector: 'hard-drive',
  templateUrl: './hard-drive.html',
//   styleUrls: ['.../app.component.css'],
  providers: [HardsService]
})
export class HardDriveComponent {
  title = 'Neki hardovi';
  Hard: Hard[];
name: string;
img: string;
format: string;
povezivanje: string;
kapacitet: string;
obrtaji: string;
// Post: Post;


    constructor(private hardsService: HardsService){ 
        this.hardsService.getHards().subscribe(Hard => {
            this.Hard = Hard});
    }  
    
}
// this.postsService.getHards().subscribe(posts => {
//         this.posts = posts;
//     });
// interface Post{
//     name: string;
//     img: string;
//     format: string;
//     povezivanje: string;
//     kapacitet: string;
//     obrtaji: string;
// }
// console.log(
//         this.Post = {
//             name: "asdfsadfad",
//             img: "sadas",
//             format: "kajda",
//             povezivanje: "dasda",
//             kapacitet: "dfsadf",
//             obrtaji: "dsafas"
//         });   

// interface Hard{
//     name: string;
//     img: string;
//     format: string;
//     povezivanje: string;
//     kapacitet: string;
//     obrtaji: string;
// }