import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { SearchService } from '../../services/search.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notifications: any[];

  constructor(
    private navService: NavigationService,
    public searchService: SearchService,
    private auth: AuthService
  ) {
    this.notifications = [
      {
        icon: 'icon-message-square',
        title: 'New message',
        badge: '3',
        text: 'James: Hey! are you busy?',
        time: new Date(),
        status: 'primary',
        link: '/chat'
      },
      {
        icon: 'icon-file-plus',
        title: 'New order received',
        badge: '$4036',
        text: '1 Headphone, 3 iPhone x',
        time: new Date('11/11/2018'),
        status: 'success',
        link: '/tables/full'
      },
      {
        icon: 'icon-box',
        title: '4 Products are out of stock',
        badge: '4',
        text: 'Headphone E67, R98, XL90, Q77',
        time: new Date('11/10/2018'),
        status: 'danger',
        link: '/tables/list'
      },
      {
        icon: 'icon-server',
        title: 'Server up!',
        badge: 'New',
        text: 'Server rebooted successfully',
        time: new Date('11/08/2018'),
        status: 'success',
        link: '/dashboard/v2'
      },
      {
        icon: 'icon-alert-triangle',
        title: 'Server down!',
        badge: 'New',
        text: 'Region 1: Server crashed!',
        time: new Date('11/06/2018'),
        status: 'danger',
        link: '/dashboard/v3'
      }
    ]
  }

  ngOnInit() {

  }

  toggelSidebar() {
    let state = this.navService.sidebarState;
    if(!state.sidenavOpen) {
      return state.sidenavOpen = true;
    }
    if(state.childnavOpen && state.sidenavOpen) {
      return state.childnavOpen = false;
    }
    if(!state.childnavOpen && state.sidenavOpen) {
      return state.sidenavOpen = false;
    }
  }

  signout() {
    this.auth.signout();
  }

}
