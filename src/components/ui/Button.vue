<template>
  <button :class="`btn btn-${type}`" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>
