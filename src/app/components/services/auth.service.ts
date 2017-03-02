import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
  lock = new Auth0Lock('2CzTcVraFEHIwHHR9MMb2LZF7m6qf6Kj', 'cvoro.eu.auth0.com', {});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  }
}


// import { Injectable } from '@angular/core';
// import { tokenNotExpired } from 'angular2-jwt';
// import { Router } from '@angular/router';
// import 'rxjs/add/operator/filter';

// // Avoid name not found warnings
// declare var Auth0Lock: any;

// @Injectable()
// export class Auth {
//   // Configure Auth0
//   lock = new Auth0Lock('t75rGwHJmfPd8QI3u9KI22Mby27wjRwh', 'cvoro.eu.auth0.com', {});

//  constructor(public router: Router) {
//   this
//     .router
//     .events
//     .filter(event => event.constructor.name === 'NavigationStart')
//     .filter(event => (/access_token|id_token|error/).test(event.url))
//     .subscribe(() => {
//       this.lock.resumeAuth(window.location.hash, (error, authResult) => {
//         if (error) return console.log(error);
//         localStorage.setItem('id_token', authResult.idToken);
//         this.router.navigate(['/']);
//       });
//   });
// }

//   public login() {
//     // Call the show method to display the widget.
//     this.lock.show();
//   }

//   public authenticated() {
//     // Check if there's an unexpired JWT
//     // This searches for an item in localStorage with key == 'id_token'
//     return tokenNotExpired();
//   }

//   public logout() {
//     // Remove token from localStorage
//     localStorage.removeItem('id_token');
//   }
  
// }