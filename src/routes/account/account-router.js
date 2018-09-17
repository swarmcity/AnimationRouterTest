import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

setPassiveTouchGestures(true);
setRootPath(SwarmCityGlobals.rootPath);

class AccountRouter extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <app-route route="{{route}}" pattern="[[rootPath]]/account/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <account-select name="select" page="[[page]]"></account-select>
        <account-create name="create" page="[[page]]"></account-create>
        <account-restore name="restore" page="[[page]]"></account-restore>
        <account-username name="username" page="[[page]]"></account-username>
        <account-avatar name="avatar" page="[[page]]"></account-avatar>
        <account-warning name="warning" page="[[page]]"></account-warning>
        <account-password name="password" page="[[page]]"></account-password>
        <account-backup name="backup" page="[[page]]"></account-backup>
        <account-print name="print" page="[[page]]"></account-print>
        <account-download name="download" page="[[page]]"></account-download>
        <account-view name="view" page="[[page]]"></account-view>
        <account-success name="success" page="[[page]]"></account-success>
        <account-profile name="profile" page="[[page]]"></account-profile>
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
      this.page = 'select';
    } else if (['create', 'restore', 'username', 'avatar', 'warning', 'password', 'backup', 'print', 'download', 'view', 'success', 'profile'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = 'error';
    }
  }

  _pageChanged(page) {
    switch (page) {
      case 'select':
        import('./account-select.js');
        break;
      case 'create':
        import('./account-create.js');
        break;
      case 'restore':
        import('./account-restore.js');
        break;
      case 'username':
        import('./account-username.js');
        break;
      case 'avatar':
        import('./account-avatar.js');
        break;
      case 'warning':
        import('./account-warning.js');
        break;
      case 'password':
        import('./account-password.js');
        break;
      case 'backup':
        import('./account-backup.js');
        break;
      case 'print':
        import('./account-print.js');
        break;
      case 'download':
        import('./account-download.js');
        break;
      case 'view':
        import('./account-view.js');
        break;
      case 'success':
        import('./account-success.js');
        break;
      case 'profile':
        import('./account-profile.js');
        break;
      case 'error':
        import('../error-route.js');
        break;
    }
  }
} window.customElements.define('account-router', AccountRouter);
