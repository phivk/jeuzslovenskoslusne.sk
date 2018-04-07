<script>
import CandleFlame from '~/components/CandleFlame'
import LanguageSwitch from '~/components/LanguageSwitch'
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
    CandleFlame, LanguageSwitch, SocialSharing, ModalWindow
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
  <div class="ph2 tc">
    <header class="ma3">
      <nav class="flex justify-end">
        <LanguageSwitch/>
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
      <span @click="showModal" class="btn-ghost bg-animate hover-bg-dark-gray">
        <i class="w1 fa fa-facebook"></i>&nbsp;Facebook
      </span>
      <span @click="showModal" class="btn-ghost bg-animate hover-bg-dark-gray">
        <i class="w1 fa fa-twitter"></i>&nbsp;Twitter
      </span>
      <span @click="showModal" class="btn-ghost bg-animate hover-bg-dark-gray">
        <i class="w1 fa fa-envelope"></i>&nbsp;Email
      </span>
      <span @click="showModal" class="btn-ghost bg-animate hover-bg-dark-gray">
        <i class="w1 fa fa-whatsapp"></i>&nbsp;Whatsapp
      </span>
      <span @click="showModal" class="btn-ghost bg-animate hover-bg-dark-gray">
        <i class="w1 fa fa-comments"></i>&nbsp;SMS
      </span>
    </div>
    <ModalWindow
      v-show="isModalVisible"
      @close="closeModal"
    />

    <section>
      <ul class="pa0 ma0 w-100 mw8 center list flex flex-wrap justify-start">
        <li v-for="day in daysSinceMurder" :key="day" class="flex-item flex">
          <CandleFlame 
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
.btn-ghost {
  padding: 0.25rem;
  margin: 0.25rem;
  border: solid 1px;
  border-radius: .25rem;
  cursor: pointer;
}
.fa {
  display: inline;
}
.lh-extra {
  line-height: 2.5rem;
}
</style>
