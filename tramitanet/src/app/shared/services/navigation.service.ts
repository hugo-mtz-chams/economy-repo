import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
  type: string,       // Possible values: link/dropDown/icon/separator/extLink
  name?: string,      // Used as display text for item and title for separator type
  state?: string,     // Router state
  icon?: string,      // Material icon name
  tooltip?: string,   // Tooltip text
  disabled?: boolean, // If true, item will not be appeared in sidenav.
  sub?: IChildItem[], // Dropdown items
  badges?: IBadge[],
  active?: boolean
}
interface IChildItem {
  type?: string,
  name: string,       // Display text
  state?: string,     // Router state
  icon?: string,
  sub?: IChildItem[],
  active?: boolean
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

interface ISidebarState {
  sidenavOpen?: boolean;
  childnavOpen?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public sidebarState: ISidebarState = {
    sidenavOpen: true,
    childnavOpen: false
  }
  constructor() { }

  defaultMenu: IMenuItem[] = [
    {
      name: 'Dashboard',
      type: 'dropDown',
      icon: 'icon-home',
      sub: [
        { icon: 'icon-activity', name: 'Analytics', state: '/dashboard/v1', type: 'link' },
        { icon: 'icon-pie-chart1', name: 'Sales', state: '/dashboard/v2', type: 'link' },
        { icon: 'icon-bar-chart-2', name: 'Campaign', state: '/dashboard/v3', type: 'link' },
        { icon: 'icon-credit-card1', name: 'Finance', state: '/dashboard/v4', type: 'link' },
        { icon: 'icon-trending-up', name: 'Stock', state: '/dashboard/v5', type: 'link' },
        { icon: 'icon-package', name: 'Products', state: '/dashboard/v6', type: 'link' },
        { icon: 'icon-calendar1', name: 'Event', state: '/dashboard/v7', type: 'link' },
        { icon: 'icon-gift1', name: 'Bonus', state: '/dashboard/v8', type: 'link' },
      ]
    },
    {
      name: 'Application',
      type: 'dropDown',
      icon: 'icon-box',
      sub: [
        { icon: 'icon-book-open', name: 'Capturar proforma', state: '/proforma', type: 'link' },
        { icon: 'icon-pie-chart1', name: 'Resumen de Trámites', state: '/resumen-tramite', type: 'link' },
      ]
    },
    {
      name: 'UI kits',
      type: 'dropDown',
      icon: 'icon-layers1',
      sub: [
        { icon: 'icon-alert-triangle', name: 'Alerts', state: '/uikits/alerts', type: 'link' },
        { icon: 'icon-chevrons-down', name: 'Accordions', state: '/uikits/accordions', type: 'link' },
        { icon: 'icon-award', name: 'Badges', state: '/uikits/badges', type: 'link' },
        { icon: 'icon-arrow-right-circle', name: 'Buttons', state: '/uikits/buttons', type: 'link' },
        { icon: 'icon-copy1', name: 'Cards', state: '/uikits/cards', type: 'link' },
        { icon: 'icon-box', name: 'Cards widget', state: '/uikits/cards-widget', type: 'link' },
        { icon: 'icon-bar-chart', name: 'Cards metrics', state: '/uikits/cards-metrics', type: 'link' },
        { icon: 'icon-shopping-bag', name: 'Cards ecommerce', state: '/uikits/cards-ecommerce', type: 'link' },
        { icon: 'icon-square', name: 'Modals', state: '/uikits/modals', type: 'link' },
        { icon: 'icon-loader', name: 'Loaders', state: '/uikits/loaders', type: 'link' },
      ]
    },
    // {
    //   name: 'Ecommerce',
    //   type: 'dropDown',
    //   icon: 'icon-shopping-bag',
    //   sub: [
    //     { icon: 'icon-package', name: 'Products', state: '/ecommerce/products', type: 'link' },
    //     { icon: 'icon-book-open', name: 'Product Details', state: '/ecommerce/product-details', type: 'link' },
    //     { icon: 'icon-shopping-cart', name: 'Cart', state: '/ecommerce/cart', type: 'link' },
    //     { icon: 'icon-credit-card1', name: 'Checkout', state: '/ecommerce/checkout', type: 'link' }
    //   ]
    // },
    {
      name: 'Forms',
      type: 'dropDown',
      icon: 'icon-edit-pencil',
      sub: [
        { icon: 'icon-book-open', name: 'Basic Inputs', state: '/forms/basic', type: 'link' },
        { icon: 'icon-bookmark1', name: 'Tag Input', state: '/forms/tag-input', type: 'link' },
        { icon: 'icon-edit', name: 'Input Group', state: '/forms/input-group', type: 'link' },
        { icon: 'icon-grid', name: 'Input Grids', state: '/forms/input-grids', type: 'link' },
        { icon: 'icon-zap', name: 'Actions', state: '/forms/actions', type: 'link' },
        { icon: 'icon-magic-wand', name: 'Wizards', state: '/forms/wizard', type: 'link' },
        { icon: 'icon-check-square', name: 'Validation', state: '/forms/validation', type: 'link' },
        { icon: 'icon-layout', name: 'Layouts', state: '/forms/layouts', type: 'link' },
        { icon: 'icon-crop1', name: 'Image Cropper', state: '/forms/img-cropper', type: 'link' },
      ]
    },
    {
      name: 'Charts',
      type: 'dropDown',
      icon: 'icon-chart-bar',
      sub: [
        { icon: 'icon-activity', name: 'Line Charts', state: '/charts/line', type: 'link' },
        { icon: 'icon-chart', name: 'Area Charts', state: '/charts/area', type: 'link' },
        { icon: 'icon-bar-chart-2', name: 'Bar Charts', state: '/charts/bar', type: 'link' },
        { icon: 'icon-pie-chart1', name: 'Pai & Donut', state: '/charts/pai', type: 'link' },
        { icon: 'icon-time', name: 'Timeriver', state: '/charts/timeriver', type: 'link' },
        { icon: 'icon-sliders', name: 'Candlestick', state: '/charts/candlestick', type: 'link' },
        { icon: 'icon-sun1', name: 'Heatmap', state: '/charts/heatmap', type: 'link' },
        { icon: 'icon-load-balancer', name: 'Treemap', state: '/charts/treemap', type: 'link' },
      ]
    },
    {
      name: 'Data Tables',
      type: 'dropDown',
      icon: 'icon-view-column',
      sub: [
        { icon: 'icon-align-justify', name: 'Basic Tables', state: '/tables/basic', type: 'link' },
        { icon: 'icon-list1', name: 'List', state: '/tables/list', type: 'link' },
        { icon: 'icon-maximize', name: 'Fullscreen', state: '/tables/full', type: 'link' },
        { icon: 'icon-book-open', name: 'Paging', state: '/tables/paging', type: 'link' },
        { icon: 'icon-filter1', name: 'Filter', state: '/tables/filter', type: 'link' },
      ]
    },
    {
      name: 'Apps',
      type: 'dropDown',
      icon: 'icon-inbox-download',
      sub: [
        { icon: 'icon-inbox', name: 'Inbox', state: '/inbox', type: 'link' },
        { icon: 'icon-message-square', name: 'Chat', state: '/chat', type: 'link' },
        { icon: 'icon-calendar1', name: 'Calendar', state: '/calendar', type: 'link' },
      ]
    },
    {
      name: 'Sessions',
      type: 'dropDown',
      icon: 'icon-user-solid-circle',
      sub: [
        { icon: 'icon-log-in', name: 'Sign up', state: '/sessions/signup', type: 'link' },
        { icon: 'icon-log-out', name: 'Sign in', state: '/sessions/signin', type: 'link' },
        { icon: 'icon-users1', name: 'Forgot', state: '/sessions/forgot', type: 'link' }
      ]
    },
    {
      name: 'Others',
      type: 'dropDown',
      icon: 'icon-stroke-width',
      sub: [
        { icon: 'icon-window', name: 'Not found', state: '/others/404', type: 'link' }
      ]
    }
  ]


  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();


  // You can customize this method to supply different menu for
  // different user type.
  // publishNavigationChange(menuType: string) {
  //   switch (userType) {
  //     case 'admin':
  //       this.menuItems.next(this.adminMenu);
  //       break;
  //     case 'user':
  //       this.menuItems.next(this.userMenu);
  //       break;
  //     default:
  //       this.menuItems.next(this.defaultMenu);
  //   }
  // }
}
