import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { About } from './about/about';
import { Menu } from './menu/menu';
import { HealthyFood } from './menu/healthy-food/healthy-food';
import { JunkFood } from './menu/junk-food/junk-food';
import { ItalicFood } from './menu/italic-food/italic-food';
import { Contact } from './contact/contact';

export const routes: Routes = [
{
    path:'home',
    component:Home
},
// {
//     path:'',
//     redirectTo:'home',
//     pathMatch:'full'
// },
{
    path:'',
    component:Home
},
{
    path:'about',
    component:About
},
{
    path:'menu',
    component:Menu,
    children:[
        {
            path:'healthy-food',
            component:HealthyFood
        },
        {
            path:'junk-food',
            component:JunkFood
        },
        {
            path:'italic-food',
            component:ItalicFood
        },
]
},
{
    path:'',
    component:HealthyFood
},
{
    path:'contact',
    component:Contact
},
{
    path:'about',
    loadChildren:()=>import('./about/about.routes').then(m=>m.aboutroutes),
},
{
    path:"**",
    component:PageNotFound
}
];
