<template>
  <div>
    <social-sharing class="lh-extra"
                    url="http://jeuzslovenskoslusne.sk"
                    title="Je už Slovensko slušné?"
                    description="26. februára 2018 sa svet dozvedel o vražde investigatívneho novinára Jána Kuciaka a jeho snúbenice Martiny Kušnírovej. Doteraz čakáme na nezávislé vyšetrenie vraždy a vládu bez prepojení na organizovaný zločin."
                    hashtags="zaslusneslovensko,allforjan,uzslusne"
                    inline-template>
      <div>
        <network network="facebook" class="btn-ghost bg-animate hover-bg-moon-gray">
          <i class="w1 fa fa-facebook"></i>&nbsp;Facebook
        </network>
        <network network="twitter" class="btn-ghost bg-animate hover-bg-moon-gray">
          <i class="w1 fa fa-twitter"></i>&nbsp;Twitter
        </network>
        <network network="email" class="btn-ghost bg-animate hover-bg-moon-gray">
          <i class="w1 fa fa-envelope"></i>&nbsp;Email
        </network>
        <network network="whatsapp" class="btn-ghost bg-animate hover-bg-moon-gray dn-ns">
          <i class="w1 fa fa-whatsapp"></i>&nbsp;Whatsapp
        </network>
        <network network="sms" class="btn-ghost bg-animate hover-bg-moon-gray dn-ns">
          <i class="w1 fa fa-comments"></i>&nbsp;SMS
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<style>
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
</style>