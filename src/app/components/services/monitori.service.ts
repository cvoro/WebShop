import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MonitoriService{
    constructor(private http: Http){}

    getMonitori(){
        return this.http.get('http://demo0561392.mockable.io/Monitori')
            .map(res => res.json());
    }
}