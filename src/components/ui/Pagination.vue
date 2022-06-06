<template>
  <nav class="job-pagination">
    <ul class="pagination">
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PaginationComp',
};
</script>
<style lang="scss">
.job-pagination {
  margin-top: 25px;
}
</style>
