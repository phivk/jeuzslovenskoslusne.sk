<script>
  export default {
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
        <button
          type="button"
          class="absolute top-0 right-0 pa3 bn bg-transparent pointer hover-70"
          @click="close"
          aria-label="Close modal"
        >
          <i class="w1 fa fa-close"></i>
        </button>
        <header 
          class="modal-header ph3"
          id="modalTitle"
        >
          <slot name="header">
            Modal Header
          </slot>
        </header>
        <section 
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            Modal Body
          </slot>
        </section>
        <footer class="modal-footer pb3">
          <slot name="footer">
            Modal Footer
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
