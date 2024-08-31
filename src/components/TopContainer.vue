<template>
  <div id="container" style="text-align: left;">
    <a class="button_discord" title="Add to a discord server" href="https://discord.com/api/oauth2/authorize?client_id=1142479168274190506&permissions=8&scope=bot">
      <font-awesome-icon icon="fa-brands fa-discord" class="fa-sm"/>
    </a>
  </div>
</template>

<style>
.fa-discord {
  background: #5865F2 ;
  color: white;
  padding: 10px;
  font-size: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 30%;
}
</style>

<script>
export default {
  name: 'TopContainer'
}
</script>