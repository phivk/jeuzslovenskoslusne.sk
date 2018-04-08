<script>
  export default {
    name: 'button-host'
  };
</script>

<template>
  <span class="btn-ghost">
    <slot><i class="w1 fa fa-link"></i>&nbsp;Click me!</slot>
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