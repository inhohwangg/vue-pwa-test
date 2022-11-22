<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div v-for="(a, i) in follower" :key="a" class="post-header">
      <div
        class="profile"
        :style="{ backgroundImage: `url(${a.image})` }"
      ></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import follower from "../../public/follower.json";

export default {
  // 컴포넌트를 만들기 전에 이거부터 실행해주세요 라는뜻
  setup() {},
  data() {
    return {
      follower,
    };
  },
  mounted() {
    console.info(this.follower);
  },
};
</script>

<style>
</style>