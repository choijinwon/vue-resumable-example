<template>
  <div id="app">
    <vue-resumable
      inputId="up1"
      name="up1-name"
      :multiple="true"
      :directory="false"
      post-action="http://localhost:3000"
      :promptly="false"
      :thread="3"
      @change="change"
      :data="uploadData"
      ref="resumable"
    ></vue-resumable>
    <div>
      <img
        v-bind:key="index"
        v-for="(img, index) in imgList"
        :src="img.url"
        width="150"
      />
    </div>
    <button @click="upload">upload</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      imgList: [],
      uploadData: { memberId: 1 }
    };
  },
  methods: {
    change() {
      console.log("change");
      let _self = this;
      let resumable = this.$refs.resumable;

      resumable.files.forEach(file => {
        if (file.url) {
          _self.imgList.push(file);
        }
      });
    },
    upload() {
      console.log("App upload");
      this.$refs.resumable.upload();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
