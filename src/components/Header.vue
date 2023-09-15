<template>
  <div class="header" id="header">
    <div class="child">
      <div class="logo">
        <img alt="Site Logo" src="../assets/svg/Logo.svg">
      </div>
      <div class="favorites">
        <img alt="Heart" src="../assets/svg/Heart.svg">
        {{ favorite }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheHeader',
    props: {
      favorite: String
    }
  }
</script>

<style scoped>
  .header{
    height:145px;
    background-color:black;
    color:#ffffff;
    font-family:Roboto;
    font-size:18px;
    box-sizing:border-box;
    padding:0 230px 0 230px;
  }

  .child{
    height:inherit;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .logo{
    width:fit-content;
  }

  .favorites{    
    width:fit-content;
    display:flex;
    gap:8px;
  }
</style>
