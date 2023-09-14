<template>
  <div>
    <div class="searchBar"></div>
    <div class="underline"></div>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
  .searchBar{
    height:253px;
    background-image:url("../assets/images/searchBg.jpeg");
    background-repeat:no-repeat;
    background-position:center;
    background-size:100%;
    filter:brightness(60%);
    image-rendering: pixelated;
  }

  .underline{
    height:16px;
    background-color:#C4C4C4;
  }

</style>