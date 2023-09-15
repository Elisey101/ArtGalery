<template>
  <Page>
    <Header favorite="Избранное"/>
    <SearchBar/>
    <!-- <ContentBlock/> -->
    <a href="#header">
      <div class="toTopArrow">▲</div>
    </a>
  </Page>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import Header from '@/components/Header.vue';
import SearchBar from '@/components/SearchBar.vue';
// import ContentBlock from '@/components/ContentBlock.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Header,
    SearchBar,
    // ContentBlock
    // HelloWorld
  }
}
</script>

<style>
  @font-face{
    font-family:Roboto;
    src:url('@/assets/fonts/RobotoFlex-VariableFont.ttf');
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    margin:0px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
    /* margin-top: 60px; */
  }

  .toTopArrow{
    padding:15px;
    position:fixed;
    bottom:30px;
    right:30px;
    border-radius:5px;
    color:black;
    background-color:rgb(238, 238, 238);
  }

  .toTopArrow:hover{
    color:#C4C4C4;
  }
</style>
