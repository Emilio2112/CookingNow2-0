<template>
    <!-- El nombre que nos muestra en title lo ponemos en App  -->
    <div class="footer">{{title}} - (c) All rights reserved. 2019</div>
</template>

<script>

export default {
    props: {
    title : String
  }
}
</script>

<style scoped> 
.footer{
   background-color:  rgb(242,143,75);
   width: 100%;
   font-size: calc(5px + 1vw);
   text-align: center;
}
</style>