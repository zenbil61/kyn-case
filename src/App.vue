<template>
  <Header>
    <HeaderItem text="Anasayfa" href="/" />
  </Header>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { Header, HeaderItem } from './components/ui';

export default {
  components: {
    Header,
    HeaderItem,
  },
};
</script>
