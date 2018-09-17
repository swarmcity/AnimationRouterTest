import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

setPassiveTouchGestures(true);
setRootPath(SwarmCityGlobals.rootPath);

class HashtagRouter extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          min-height: 100vh;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]hashtag/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <hashtag-list name="list" page="[[page]]"></hashtag-list>
        <hashtag-new name="new" page="[[page]]"></hashtag-new>
        <hashtag-hash name="hash" page="[[page]]"></hashtag-hash>
        <hashtag-detail name="detail" page="[[page]]"></hashtag-detail>
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
    console.log(page)
    if (!page) {
      this.page = 'hash';
    } else if (['list', 'new', 'detail'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error';
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'list':
        import('./hashtag-list.js');
        break;
      case 'new':
        import('./hashtag-new.js');
        break;
      case 'hash':
        import('./hashtag-hash.js');
        break;
      case 'error':
        import('../error-route.js');
        break;
    }
  }
}

window.customElements.define('hashtag-router', HashtagRouter);
