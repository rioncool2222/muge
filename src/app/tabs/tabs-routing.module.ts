import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'beranda',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../beranda/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../chat/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'maps',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../maps/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'pesanan',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pesanan/pesanan.module').then(m => m.PesananPageModule)
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../profil/profil.module').then(m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/beranda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/beranda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
