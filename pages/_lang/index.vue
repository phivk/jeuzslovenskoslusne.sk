<script>
import CandleFlame from '~/components/CandleFlame'
import LanguageSwitch from '~/components/LanguageSwitch'
import ButtonGhost from '~/components/ButtonGhost'
import SocialSharing from '~/components/SocialSharing'
import ModalWindow from '~/components/ModalWindow'

function get_days_since_murder() {
  let moment = require('moment');
  let now = moment();
  let murder = moment("26-02-2018", "DD-MM-YYYY");
  return Math.round(moment.duration(now.diff(murder)).asDays());
}

export default {
  components: {
    'candle-flame': CandleFlame, 
    'language-switch': LanguageSwitch,
    'social-sharing': SocialSharing,
    'modal-window': ModalWindow, 
    'button-ghost': ButtonGhost
  },
  data () {
    return {
      daysSinceMurder: get_days_since_murder(),
      isModalVisible: false,
      sharingButtons: [
        {
          'text': 'Facebook',
          'iconClass': 'fa-facebook'
        },
        {
          'text': 'Twitter',
          'iconClass': 'fa-twitter'
        },
        {
          'text': 'Email',
          'iconClass': 'fa-envelope'
        },
        {
          'text': 'Whatsapp',
          'iconClass': 'fa-whatsapp',
          'class': 'dn-ns'
        },
        {
          'text': 'SMS',
          'iconClass': 'fa-comments',
          'class': 'dn-ns'
        }
      ]
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>

<template>
  <div class="ph2 tc" v-bind:class="{ 'scroll-off' : isModalVisible }">
    <header class="ma3">
      <nav class="flex justify-end">
        <language-switch/>
      </nav>
      <h1 class="tc mt5 f1 rotate">{{ $t('header.h1') }}</h1>
    </header>
    <main class="mw6 center tc">
      <p v-html="$t('main.p1')"></p>
      <div v-html="$t('main.days', { daysSinceMurder: daysSinceMurder })"></div>
      <p class="mt0" v-html="$t('main.p2')"></p>
      <h3 class="f3" v-html="$t('main.h3')"></h3>
      
      <div>
        <button-ghost 
          v-for="button in sharingButtons" 
          :key="button.text" 
          v-bind:text="button.text" 
          v-bind:iconClass="button.iconClass" 
          v-on:click.native="showModal" 
          v-bind:class="button.class"
          class="bg-animate hover-bg-dark-gray"
        />
      </div>
    </main>
    <modal-window
      v-show="isModalVisible"
      @close="closeModal"
    >
      <template slot="header">
        <h2 class="f3">
          {{ $t('ModalWindow.headerHeading') }}
        </h2>
      </template>
      <template slot="body">
        <div v-html="$t('ModalWindow.body')"></div>
      </template>
      <template slot="footer">
        <h3 class="f4">
          {{ $t('ModalWindow.footerHeading') }}
        </h3>
        <social-sharing/>
      </template>
    </modal-window>
    <section>
      <ul class="pa0 ma0 w-100 mw8 center list flex flex-wrap justify-start">
        <li v-for="day in daysSinceMurder" :key="day" class="flex-item flex">
          <candle-flame 
            :day="day" 
            :moveTime="3 + (Math.random()-0.5) * 3"
            :flameUpTime="4 + (Math.random()-0.5) * 4"
            :waxPercentage="100 - Math.random() * 50"
          />
        </li>
      </ul>
    </section>
    <footer class="mv4" v-html="$t('footer.madeBy')"></footer>
  </div>
</template>

<style>
.rotate {
  transform: rotate(-2deg);
}
.flex-item {
  width: 14.3%; /* fallback */
  width: calc(100% / 7);
  margin-bottom: -4rem;
}
.lh-extra {
  line-height: 2.5rem;
}
.scroll-off {
  overflow: hidden;
  height: 100vh;
}
</style>
