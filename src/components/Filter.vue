<template>
  <div class="filter-row">
    <label>{{ title }}</label>
    <div><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'FilterComp',
  props: ['title'],
};
</script>

<style lang="scss">
.filter-row {
  border-radius: $radius;
  width: 100%;
  background: $gray;
  margin-bottom: 20px;
  padding: 20px;
  label {
    margin-bottom: 15px;
  }
}
</style>
