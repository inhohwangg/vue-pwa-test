<template>
  <div>
    <div v-if="step === 0">
      <Post
        :postdata="postdata[i]"
        :idx="i"
        v-for="(a, i) in postdata"
        :key="i"
        @click="$store.commit('likesAdd')"
      />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div
        class="upload-image"
        :class="firedata"
        :style="{ backgroundImage: `url(${urldata})` }"
      ></div>
      <div class="filters">
        <FilterBox v-for="a in instfilter" :key="a" :urldata="urldata" :a="a">{{
          a
        }}</FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div
        class="upload-image"
        :class="firedata"
        :style="{ backgroundImage: `url(${urldata})` }"
      ></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!</textarea
        >
      </div>
    </div>

    <div v-if="step === 3">
      <Mypage />
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import Mypage from "./Mypage.vue";
export default {
  data() {
    return {
      instfilter: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      firedata: "",
      idx: 0,
    };
  },
  props: {
    postdata: Array,
    step: Number,
    urldata: String,
    //
  },
  mounted() {
    this.emitter.on("createValue", (a) => {
      this.firedata = a;
    });
  },
  components: {
    Post,
    FilterBox,
    Mypage,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>