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
      <h1 class="tc mt5 mt6-l f1 rotate">{{ $t('home.h1') }}</h1>
    </header>
    <section class="measure center tc">
      <p v-html="$t('home.p1')"></p>
      <div v-html="$t('home.days', { daysSinceMurder: daysSinceMurder })"></div>
      <p class="mt0" v-html="$t('home.p2')"></p>
      <h3 class="f3" v-html="$t('home.h3')"></h3>
    </section>
    <div class="lh-extra">
      <button-ghost v-on:click.native="showModal" class="bg-animate hover-bg-dark-gray">
          <i class="w1 fa fa-facebook"></i>&nbsp;Facebook
      </button-ghost>
      <button-ghost v-on:click.native="showModal" class="bg-animate hover-bg-dark-gray">
          <i class="w1 fa fa-twitter"></i>&nbsp;Twitter
      </button-ghost>
      <button-ghost v-on:click.native="showModal" class="bg-animate hover-bg-dark-gray">
          <i class="w1 fa fa-envelope"></i>&nbsp;Email
      </button-ghost>
      <button-ghost v-on:click.native="showModal" class="bg-animate hover-bg-dark-gray">
          <i class="w1 fa fa-whatsapp"></i>&nbsp;Whatsapp
      </button-ghost>
      <button-ghost v-on:click.native="showModal" class="bg-animate hover-bg-dark-gray">
          <i class="w1 fa fa-comments"></i>&nbsp;SMS
      </button-ghost>
    </div>
    <modal-window
      v-show="isModalVisible"
      @close="closeModal"
    >
      <template slot="header">
        <h2 class="f3">
          So you'd like to share this thing with your friends or followers...
        </h2>
      </template>
      <template slot="body">
        <p>
          It's important to discuss the things we care about. But when we do so via social networks, something funny happens.
        </p>
        <p>
          Online, we are mostly connected to people who share our opinions. That's comfortable, but also creates social bubbles.
        </p>
        <p>
          Before you share this page with your bubble, can you think of someone who might feel different than you? Perhaps a colleague, someone on your sports team or a family member?
        </p>
        <p class="i">
          I think we'd all learn a lot if we'd have a conversation with that other person about what decency means to each of us.
        </p>
      </template>
      <template slot="footer">
        <h3 class="f4">
          Let's share this already!
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
    <footer class="mv4" v-html="$t('TheFooter.madeBy')"></footer>
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
