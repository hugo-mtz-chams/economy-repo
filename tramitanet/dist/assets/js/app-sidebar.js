$(document).ready(function () {

    var $adminWrap = $('.app-admin-wrap');
    var $menuToggle = $('.menu-toggle');
    var $navItem = $('.nav-item-hold');
    var $sidebarOverlay = $('.sidebar-overlay');

    function isMobile() {
        return window && window.matchMedia("(max-width: 768px)").matches;
    }

    function initSidebar() {
        if (isMobile()) {
            $adminWrap.removeClass('sidebar-short sidebar-wide childnav-open');
        }
    }

    $menuToggle.on('click', function (e) {
        if (!isMobile()) {
            if ($adminWrap.hasClass('sidebar-short')) {
                $adminWrap.removeClass('sidebar-short');
                $adminWrap.addClass('sidebar-wide');
            } else {
                $adminWrap.removeClass('sidebar-wide');
                $adminWrap.addClass('sidebar-short');
            }
        } else {
            if ($adminWrap.hasClass('sidebar-short')) {
                $adminWrap.removeClass('sidebar-short');
                $adminWrap.removeClass('childnav-open');
            } else {
                $adminWrap.addClass('sidebar-short');
                $adminWrap.addClass('childnav-open');
            }
        }
    });

    $navItem.on('mouseover', function (e) {
        if (!$adminWrap.hasClass('childnav-open')) {
            $adminWrap.addClass('childnav-open');
        }
    });

    $sidebarOverlay.on('click', function (e) {
        $adminWrap.removeClass('childnav-open');
    });

    $(window).on('resize', function (e) {
        initSidebar();
    });

    if (window.routerEvent) {
        if (!window.routerEventSubscriber) {
            window.routerEventSubscriber = window.routerEvent
                .subscribe(function (e) {
                    if(isMobile()) {
                        $('.app-admin-wrap').removeClass('childnav-open sidebar-short');
                    } else {
                        $('.app-admin-wrap').removeClass('childnav-open');
                    }
                });
        }
    }

    initSidebar();

});