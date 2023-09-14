<template>
  <div class="content">
    <div class="innerBlock">
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic1.jpeg" alt="">
      </div>
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic2.jpeg" alt="">
      </div>
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic3.jpeg" alt="">
      </div>
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic4.jpeg" alt="">
      </div>
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic5.jpeg" alt="">
      </div>
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic6.jpeg" alt="">
      </div>
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic7.jpeg" alt="">
      </div>
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic8.jpeg" alt="">
      </div>
      <div class="imageCard">
        <img class="image" src="../assets/paintings/pic9.jpeg" alt="">
      </div>
    </div>
    <div class="load">
      <img alt="" src="../assets/svg/Loader.svg" >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ContentBlock',
    props: {
      msg: String
    }
  }
</script>

<style>
  .content{
    padding:115px 230px 70px 230px;
  }

  .innerBlock{
    height:fit-content;
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:30px;
    /* column-gap:2%;
    row-gap:6%; */
  }
  .imageCard{
    aspect-ratio:1/1;
    border-radius:8px;
    overflow:hidden;
  }

  .image{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center top;
  }

  .load{
    height:fit-content;
    margin-top:100px;
  }

</style>