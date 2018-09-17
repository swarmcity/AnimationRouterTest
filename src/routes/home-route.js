import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/css-shared.js';

class HomeRoute extends PolymerElement {
    static get template() {
        return html `
      <style include="css-shared">
            :host {
                width: 100vw;
                display: block;
                max-width: 100%;
            }

            .container {
                width: 100%;
            }

            .container>div:nth-child(1) {
                @apply --layout-vertical;
                @apply --layout-center-center;
                height: 80vh;
                background-color: #EFD96F;
                position: relative;
            }

            .container>div:nth-child(1)>div:nth-child(1) {
                @apply --layout-horizontal;
                @apply --layout-end-justified;
                box-sizing: border-box;
                padding: 30px 30px 0 0;
                width: 100%;
            }

            display-language {
                cursor: pointer;
                font-family: Montserrat, sans-serif;
                font-weight: 800;
                font-size: 12px;
                letter-spacing: 0;
                line-height: 15px;
                text-transform: uppercase;
                border-bottom: 1px solid #333333;
            }

            .container>div:nth-child(1)>div:nth-child(2) {
                @apply --layout-vertical;
                @apply --center-center;
                @apply --layout-flex;
                height: 100%;
                width: 100%;
            }

            .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(1) {
                @apply --layout-vertical;
                @apply --layout-center;
                @apply --layout-end-justified;
                box-sizing: border-box;
                padding: 0 0 8vh 0;
                height: 60%;
            }

            .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1) {
                background-image: url('../../images/SwarmCity-Sprite-normal.png');
                background-repeat: no-repeat;
                background-size: 324px 324px;
                width: 108px;
                height: 50px;
                background-position: -108px -108px;
                margin-bottom: 20px;
            }

            .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2) {
                font-family: Montserrat, sans-serif;
                font-weight: 200;
                font-size: 20px;
                letter-spacing: 0;
                line-height: 24px;
                font-size: 22px;
                font-weight: 100;
            }

            .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(3) {
                font-family: Montserrat, sans-serif;
                font-weight: 800;
                font-size: 35px;
                letter-spacing: 0;
                line-height: 36px;
            }

            .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(2) {
                @apply --layout-vertical;
                @apply --layout-center-center;
                height: 40%;
            }

            .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1) {
                @apply --layout-vertical;
                @apply --layout-center-center;
                width: 75vw;
                min-width: 200px;
                max-width: 300px;
                border: 1px solid black;
                font-family: Montserrat, sans-serif;
                font-weight: 800;
                font-size: 18px;
                letter-spacing: 0;
                line-height: 22px;
                box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.5);
                -webkit-box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.5);
                -moz-box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.5);
                -o-box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.5);
                text-align: center;
                border: 0;
                box-sizing: border-box;
                padding: 30px 42px;
                border-radius: 2px;
                background-color: rgba(255, 255, 255, 0.2);
                cursor: pointer;
                max-height: 82px;
                background-color: rgba(250, 250, 250, 0.09);
            }

            .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1):active {
                transform: scale(0.97, 0.97);
            }

            .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2) {
                font-family: Montserrat, sans-serif;
                font-weight: 300;
                font-size: 10px;
                letter-spacing: 0;
                line-height: 13px;
            }

            .container>div:nth-child(2) {
                box-sizing: border-box;
                background-color: #FAFAFA;
                padding: 40px 0 40px 0;
            }

            .container>div:nth-child(2) ul li {
                box-sizing: border-box;
                list-style-type: none;
                padding-bottom: 16px
            }

            .container>div:nth-child(2) ul li a {
                font-family: Montserrat, sans-serif;
                font-weight: 800;
                font-size: 12px;
                letter-spacing: 0;
                line-height: 15px;
                color: #24B1FF;
                text-decoration: none;
                border-bottom: 1px dotted #24B1FF;
            }

            .container>div:nth-child(3) {
                box-sizing: border-box;
                padding: 50px 0 50px 10vw;
                background-color: #e6e6e6;
            }

            .container>div:nth-child(3)>div:nth-child(1) {
                font-family: Montserrat, sans-serif;
                font-weight: 800;
                font-size: 12px;
                letter-spacing: 0;
                line-height: 15px;
                margin-bottom: 10px;
            }

            .container>div:nth-child(3) ul {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                text-decoration: none;
            }

            .container>div:nth-child(3) ul li {
                box-sizing: border-box;
                list-style-type: none;
                padding-bottom: 8px;
            }

            .container>div:nth-child(3) ul li a {
                font-family: Montserrat, sans-serif;
                font-weight: 300;
                font-size: 12px;
                letter-spacing: 0;
                line-height: 15px;
                color: #333333;
                text-decoration: none;
                border-bottom: 1px dotted #BFBFBF;
            }

            .container[wide-layout]>div:nth-child(1) {
                height: 80vh;
            }

            .container[wide-layout]>div:nth-child(1)>div:nth-child(2) {
                @apply --layout-horizontal;
                @apply --layout-center-center;
            }

            .container[wide-layout]>div:nth-child(1)>div:nth-child(2)>div:nth-child(1) {
                @apply --layout-start;
                @apply --layout-end-justified;
                @apply --layout-flex;
                box-sizing: border-box;
                padding: 0 0 18vh 10vw;
                height: 100%;
            }

            .container[wide-layout]>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2) {
                font-size: 34px;
            }

            .container[wide-layout]>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(3) {
                font-size: 78px;
                line-height: 68px;
            }

            .container[wide-layout]>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1) {
                margin-bottom: 30px;
            }

            .container[wide-layout]>div:nth-child(1)>div:nth-child(2)>div:nth-child(2) {
                @apply --layout-vertical;
                @apply --layout-end;
                @apply --layout-end-justified;
                box-sizing: border-box;
                padding: 0 10vw 18vh 0;
                height: 100%;
            }

            .container[wide-layout]>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1) {
                padding: 36px 42px;
                max-width: 220px;
            }

            .container[wide-layout]>div:nth-child(2) ul {
                box-sizing: border-box;
                padding: 0 0 0 10vw;
            }

            .container[wide-layout]>div:nth-child(2) ul li {
                box-sizing: border-box;
                display: inline;
                list-style-type: none;
                padding-right: 20px;
            }

            .container[wide-layout]>div:nth-child(2) ul li a {
                font-family: Montserrat, sans-serif;
                font-weight: 800;
                font-size: 12px;
                letter-spacing: 0;
                line-height: 15px;
                color: #24B1FF;
                text-decoration: none;
            }

            .container[wide-layout]>div:nth-child(2) ul li a ::before {
                border-bottom: 2px dotted #24B1FF;
            }

            .container[wide-layout]>div:nth-child(3) ul li {
                box-sizing: border-box;
                display: inline;
                padding-right: 20px;
            }

            .container[extrawide-layout]>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1) {
                margin-bottom: 40px;
            }

            .container[extrawide-layout]>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(3) {
                font-size: 98px;
                line-height: 82px;
            }

            @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
            only screen and (min--moz-device-pixel-ratio: 1.5),
            only screen and (min-resolution: 240dpi) {
                .container>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1) {
                    background-image: url('../../images/SwarmCity-Sprite-doublesize.png');
                }
            }
      </style>
      <a href="[[goToPage]]" id="navigate"></a>

      <div class="home-top">
        <div><h1><span>Welcome to </span>swarm. city</h1></div>
        <div><button id="hashtag/list" tabindex="1" on-click="_playExitAnimation">enter here <small>Boardwalk v3.0</small></button></div>
      </div>

      <div class="home-middle">
        <ul>
          <li><a tabindex="2" href="https://thisis.swarm.city/" target="_blank">What is Swarm City?</a></li>
          <li><a tabindex="3" href="http://support.swarm.city/" target="_blank">Support</a></li>
          <li><a tabindex="4" href="http://support.swarm.city/" target="_blank">FAQ</a></li>
          <li><a tabindex="5" href="https://advisors.swarm.city/" target="_blank">Advisors</a></li>
        </ul>
      </div>

      <div class="home-bottom">
        <div>Find Swarm City on</div>
        <ul>
          <li><a tabindex="6" href="https://riot.im/app/#/group/+swarmcity:matrix.org" target="_blank">Riot</a></li>
          <li><a tabindex="7" href="https://slackinvite.swarm.city" target="_blank">Slack</a></li>
          <li><a tabindex="8" href="https://medium.com/swarm-city-times" target="_blank">Medium</a></li>
          <li><a tabindex="9" href="https://github.com/swarmcity" target="_blank">Github</a></li>
          <li><a tabindex="10" href="https://twitter.com/swarmcitydapp" target="_blank">Twitter</a></li>
          <li><a tabindex="11" href="https://www.facebook.com/groups/SwarmCity/" target="_blank">Facebook</a></li>
          <li><a tabindex="12" href="https://www.youtube.com/channel/UCsHBWn_ytZ3xdMbTyYe5Ifg" target="_blank">Youtube</a></li>
          <li><a tabindex="13" href="https://www.reddit.com/r/SwarmCity/" target="_blank">Reddit</a></li>
        </ul>
      </div>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                observer: '_playEntryAnimation'
            },
            goToPage: {
                type: String,
            },
        };
    }

    _playEntryAnimation(page) {
        if (this.page === 'home') {
            let locTrail = JSON.parse(localStorage.getItem('loc'));
            locTrail ? _addPage(page, locTrail) : localStorage.setItem("loc", JSON.stringify([page]));

            function _addPage() {
                if (locTrail.length > 1) { locTrail.shift() };
                locTrail.push(page);
                localStorage.setItem("loc", JSON.stringify(locTrail));
            }
            switch (JSON.parse(localStorage.getItem('loc'))[0]) {
                case 'home':
                    console.log('Playing home entry animation when coming from home')
                    break;
            }
        }
    }
    _playExitAnimation() {
        this.goToPage = 'hashtag/list'
        this.$.navigate.click();
    }

}
window.customElements.define('home-route', HomeRoute);