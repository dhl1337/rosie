<template>
  <div id="rosie">
    <SideNav />
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SideNav from './components/SideNav.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    SideNav
  }
}
</script>

<style>
#rosie {
  font-family: verdana;
  display: flex;
  height: 100%;
}
html, body {
    margin: 0px;
    height: 100%;
}
</style>
