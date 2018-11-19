<template>
  <div id="side-nav">
      <div>CONFIGURE INTEGRATION</div>
      <ul>
          <li>Basic Information</li>
          <li>Data Mapping</li>
          <li>Preview Results</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'SideNav'
}
</script>

<style>
#side-nav {
    height: 100%;
    width: 300px;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #F5F5F5;
    padding-top: 60px;
    padding-left: 15px;
    padding-right: 15px;
}

#side-nav li {
    margin: 0 0 15px 0;
}

ul {
    list-style: none;
}
</style>
