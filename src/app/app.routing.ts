// import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';


import {HardDriveComponent} from './components/hard-drive/hard-drive.component';
import {MonitoriComponent} from './components/monitori/monitori.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes=[
    // {
    //     path:'',
    //    redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    {
        path: 'home', component: HomeComponent
    },
     {
        path: 'hard', component: HardDriveComponent
    },
     {
        path: 'monitori', component: MonitoriComponent
    }
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
// export const appRoutingProviders: any[] = [];

// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);