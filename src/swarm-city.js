import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

setPassiveTouchGestures(true);
setRootPath(SwarmCityGlobals.rootPath);

class SwarmCity extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          min-height: 100vh;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <home-route name="home" page="[[page]]"></home-route>
        <account-router name="account"></account-router>
        <hashtag-router name="hashtag"></hashtag-router>
        <wallet-router name="wallet"></wallet-router>
        <error-route name="error" page="[[page]]"></error-route>
      </iron-pages>
    `;
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    if (!page) {
      this.page = 'home';
    } else if (['home', 'account', 'hashtag', 'wallet'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error';
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'home':
        import('./routes/home-route.js');
        break;
      case 'account':
        import('./routes/account/account-router.js');
        break;
      case 'hashtag':
        import('./routes/hashtag/hashtag-router.js');
        break;
      case 'wallet':
        import('./routes/wallet/wallet-router.js');
        break;
      case 'error':
        import('./routes/error-route.js');
        break;
    }
  }
}

window.customElements.define('swarm-city', SwarmCity);
