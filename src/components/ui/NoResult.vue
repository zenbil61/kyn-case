<template>
  <div class="no-result">
    <h1>404</h1>
    <p>Sonuç Bulunamadı..</p>
  </div>
</template>

<script>
export default {
  name: 'NoResult',
};
</script>

<style lang="scss">
.no-result {
  color: $light-color;
  width: 100%;
  text-align: center;
  h1 {
    font-size: 100px;
    padding: 20px;
  }
  p {
    font-size: 25px;
  }
}
</style>
