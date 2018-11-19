<template>
  <div class="hello">
    <div class="container">
      <h1>Basic Information</h1>
        <form>
          <div class="input-field">
            <label for="display-name">Display Name: </label>
            <input id="display-name" v-model="displayName">
          </div>
          <div class="input-field">
            <label for="mapping-name">Mapping Name: </label>
            <input id="mapping-name" v-model="mappingName">
          </div>
          <hr/>
          <div class="input-field">
            <label>Select: </label>
            <select v-model="vertical">
              <option value="">Select</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <hr/>
          <div class="input-field">
            <label>CSV Parser: </label>
            <select v-model="csvParser">
              <option value="">Select</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div class="input-field">
            <label for="mapping-name">S3 Bucket: </label>
            <input id="mapping-name" v-model="s3Bucket">
          </div>
        </form>
        <button v-on:click="basic">Next</button>
    </div>
  </div>
</template>

<script>
import SideNav from "./SideNav.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: {
    displayName: "",
    mappingName: "",
    vertical: "",
    csvParser: "",
    s3Bucket: ""
  },
  components: {
    SideNav
  },
  methods: {
    basic: function() {
      console.log('hello', this.displayName)
    }
  }
};
</script>

<style>
.hello {
  flex: 1;
}
.container {
  padding-left: 25%;
  padding-right: 25%;
}

label {
  width: 180px;
  clear: left;
  text-align: right;
}

.input-field {
  position: relative;
}
</style>
