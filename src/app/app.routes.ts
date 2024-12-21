import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WorksComponent } from './works/works.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: MainComponent
    },
    {
        path: "works",
        component: WorksComponent
    }
];
