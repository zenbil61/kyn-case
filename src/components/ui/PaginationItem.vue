<template>
  <li :class="`page-item ${active ? 'active' : ''}`" v-bind="$props">
    <a class="page-link" href="#"><slot></slot></a>
  </li>
</template>

<script>
export default {
  name: 'PaginationComp',
  props: ['active'],
};
</script>
