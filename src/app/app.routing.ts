import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotfoundComponent } from './pages/errors/notfound/notfound.component';




export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  { path: '**', component: NotfoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
});