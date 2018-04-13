<script>
  export default {
    name: 'button-host',
    props: ['text', 'iconClass']
  };
</script>

<template>
  <span class="btn-ghost dib">
    <slot><i v-if="iconClass" class="w1 fa" :class="iconClass"></i>&nbsp;{{text}}</slot>
  </span>
</template>

<style scoped>
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