<template>
  <div>
    <div class="searchBar">
      <div class="shading">
      <form action="">
        <input class="searchInput" type="text" value="Поиск"/>
      </form>
      <div class="searchIconBlock"></div>
      </div>
    </div>
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
    image-rendering:pixelated;
    position:relative;
  }

  .shading{
    background-color:rgba(0, 0, 0, 0.31);
    width:100%;
    height:100%;
    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .searchInput{
    width:785px;
    height:70px;
    border:none;
    background-color:white;
    color:rgb(133, 133, 133);
    font-size:24px;
    font-weight:200px;
    box-sizing:border-box;
    padding:0 40px 0 40px;
  }

  .searchInput:focus{
    outline:none;
    color:black;
  }

  .searchIconBlock{
    width:70px;
    height:70px;
    background-color:white;
  }

  .underline{
    height:16px;
    background-color:#C4C4C4;
  }

</style>