<template>
  <div
    class="filter-item"
    :class="a"
    :style="{ backgroundImage: `url(${urldata})` }"
  >
    <slot></slot>
    <button @click="fire">버튼</button>
  </div>
</template>

<script>
export default {
  methods: {
    fire() {
      // 이벤트를 보낸다는 의미
      this.emitter.emit("createValue", this.a);
    },
  },
  props: {
    urldata: String,
    a: String,
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>