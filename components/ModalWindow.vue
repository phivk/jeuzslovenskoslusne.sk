<script>
  import SocialSharing from '~/components/SocialSharing'

  export default {
    components: {SocialSharing},
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div 
        class="modal mw6 relative bg-near-white near-black pa3 tc"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header 
          class="modal-header ph3"
          id="modalTitle"
        >
          <slot name="header">
            <h2 class="f3">
              So you'd like to share this page with your friends or followers...
            </h2>
            <button
              type="button"
              class="absolute top-0 right-0 pa3 bn bg-transparent pointer hover-70"
              @click="close"
              aria-label="Close modal"
            >
              <i class="w1 fa fa-close"></i>
            </button>
          </slot>
        </header>
        <section 
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <p>
              It's important to discuss the things we care about. But when we have these conversations via social networks, something funny happens.
            </p>
            <p>
              Online, we are mostly connected to people who share our opinions. That's comfortable, but also creates social bubbles.
            </p>
            <p>
              Before you share this page with your bubble, can you think of someone who might feel different than you? Perhaps a colleague, someone on your sports team or a family member?
            </p>
            <p class="i">
              Could you have a conversation about what decency means to each of you?
            </p>
          </slot>
        </section>
        <footer class="modal-footer pb3">
          <slot name="footer">
            <h2 class="f4">
              Let's share this already!
            </h2>
            <SocialSharing/>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
  }
  .modal {
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    overflow-y: scroll;
  }
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
  .hover-70:hover {    
    opacity: 0.7;
  }
</style>
