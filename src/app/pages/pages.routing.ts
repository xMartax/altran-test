import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { Section1Component } from './section1/section1.component';

export const routes: Routes = [
    {
        path: '',
        children: [

            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, data: { breadcrumb: 'Section 1' } },
            { path: 'section1', component: Section1Component, data: { breadcrumb: 'Section 1' } },

        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);