import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HardsService{
    private _url: string = "http://demo0561392.mockable.io/Hard"
    constructor(private http: Http){
        // console.log('post serveice...');
    }
    getHards(){
        return this.http.get(this._url)
            .map(res => res.json());
    }
}