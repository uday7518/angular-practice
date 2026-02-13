import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { Home } from './home/home';
import { Notfound } from './notfound/notfound';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Home1 } from './home1/home1';
import { Home2 } from './home2/home2';

export const routes: Routes = [
{path: 'home',component:Home,
    children:[
        {path:'home1',component:Home1},
        {path:'home2',component:Home2}
    ]
},
{ path: '', component: Home },
// { path: 'about', component: About },
{ path: 'about/:id', component: About },
{ path: 'contact', component: Contact },
{ path: '**', component: Notfound }
];
