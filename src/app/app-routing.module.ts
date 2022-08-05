import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';

const routes: Routes = [
  {
    path: 'page1/:pageOneId',
    component: PageComponent,
    data: {
      title: 'page1',
      breadcrumb: [
        {
          label: 'Page1',
          url: ''
        }
      ]
    }
  },
  {
    path: '',
    component: PageComponent,
    data: {
      title: 'App',
      breadcrumb: [
        {
          label: 'Page1',
          url: '' 
        }
      ]
    }
  },
  {
    path: 'page1/:pageOneID/page2/:pageTwoID',
    component: Page2Component,
    data: {
      title: 'Page2',
      breadcrumb: [
        {
          label: 'page1',
          url: '/page1/:pageOneID'
        },
        {
          label: 'Page2',
          url: ''
        }
      ]
    }
  },
  {
    path: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID',
    component: Page3Component,
    data: {
      title: 'Page3',
      breadcrumb: [
        {
          label: 'page1',
          url: 'page1/:pageOneID'
        },
        {
          label: 'page2',
          url: 'page1/:pageOneID/page2/:pageTwoID'
        },
        {
          label: 'page {{customText}}',
          url: ''
        }
      ]
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  static componets = [
    PageComponent,
    Page2Component,
    Page3Component
  ]
}
