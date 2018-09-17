import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/css-shared.js';

class HashtagList extends PolymerElement {
  static get template() {
    return html`
      <style include="css-shared"></style>
      <div class="container">
        list
      </div>
    `;
  }
} window.customElements.define('hashtag-list', HashtagList);
