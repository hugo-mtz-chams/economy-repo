import { Component, OnInit, HostListener, EventEmitter, OnDestroy } from '@angular/core';
import { NavigationService, IMenuItem } from '../../services/navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Utils } from '../../utils';

import * as $ from 'jquery';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
	selectedItem: IMenuItem;
    routeSubscriber: Subscription;
	nav: IMenuItem[];

	constructor(
		public router: Router,
		public navService: NavigationService
	) {
        if(window && !window['routerEvent']) {
            window['routerEvent'] = new EventEmitter();
        }
    }

	ngOnInit() {
        $.getScript('./assets/js/app-sidebar.js');

		this.updateSidebar();
        // CLOSE SIDENAV ON ROUTE CHANGE
        this.routeSubscriber = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
			.subscribe((routeChange) => {
				this.closeChildNav();
				if (Utils.isMobile()) {
					this.navService.sidebarState.sidenavOpen = false;
                }
                if(window) {
                    window['routerEvent'].emit(routeChange);
                }
            });

		this.navService.menuItems$
			.subscribe((items) => {
				this.nav = items;
				this.setActiveFlag();
			})
    }

    ngOnDestroy() {
        if(this.routeSubscriber) {
            this.routeSubscriber.unsubscribe();
        }
    }

	selectItem(item) {
		this.navService.sidebarState.childnavOpen = true;
		this.selectedItem = item;
		this.setActiveMainItem(item);
	}

	previewSecondaryItem(item) {
		this.navService.sidebarState.childnavOpen = true;
		this.selectedItem = item;
	}

	closeChildNav() {
		this.navService.sidebarState.childnavOpen = false;
		this.setActiveFlag();
	}

	onClickChangeActiveFlag(item) {
		this.setActiveMainItem(item);
	}
	setActiveMainItem(item) {
		this.nav.forEach(item => {
			item.active = false;
		});
		item.active = true;
	}

	setActiveMouseoverMainItem(item) {
		this.nav.forEach(item => {
			item.active = false;
		});
		item.active = true;
	}

	setActiveFlag() {
		if (window && window.location) {
			let activeRoute = window.location.hash || window.location.pathname;
			this.nav.forEach(item => {
				item.active = false;
				if (activeRoute.indexOf(item.state) !== -1) {
                    item.active = true;
                    this.selectedItem = item;
				}
				if (item.sub) {
					item.sub.forEach(subItem => {
						if (activeRoute.indexOf(subItem.state) !== -1) {
							item.active = true;
                            this.selectedItem = item;
                        }
					})
				}
			})
		}
	}

	updateSidebar() {
		if (Utils.isMobile()) {
			this.navService.sidebarState.sidenavOpen = false;
		} else {
			this.navService.sidebarState.sidenavOpen = true;
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.updateSidebar();
	}


}
