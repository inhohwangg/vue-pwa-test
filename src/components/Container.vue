<template>
  <div>
    <Post :postdata="postdata[i]" v-for="(a, i) in postdata" :key="i" />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  props: {
    postdata: Array,
    //
  },
  components: {
    Post,
  },
};
</script>

<style>
</style>