<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="href">{{ text }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'HeaderItemComp',
  props: ['text', 'href'],
};
</script>
