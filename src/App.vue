<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    :postdata="postdata"
    :step="step"
    :urldata="urldata"
    @write="postWrite = $event"
  />
  <button @click="getdata(e)">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="content === 0">내용0</div>
  <div v-if="content === 1">내용1</div>
  <div v-if="content === 2">내용2</div>
  <button @click="content = 0">버튼0</button>
  <button @click="content = 1">버튼1</button>
  <button @click="content = 2">버튼2</button> -->
</template>

<script>
import Container from "./components/Container.vue";
import postdata from "./assets/data";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      step: 0,
      postdata,
      urldata: "",
      postWrite: "",
      firedata: "",
    };
  },
  components: { Container },
  mounted() {
    this.emitter.on("createValue", (a) => {
      this.firedata = a;
    });
  },
  methods: {
    publish() {
      let newPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.urldata,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.postWrite,
        filter: this.firedata,
      };
      this.postdata.unshift(newPost);
      this.step = 0;
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      this.urldata = url;
      console.info(this.urldata);
      this.step++;
    },
    getdata() {
      // 나의 풀이
      // this.count++;
      // if (this.count % 2 === 0) {
      //   axios
      //     .get("https://codingapple1.github.io/vue/more1.json")
      //     .then((data) => {
      //       this.postdata.push(data.data);
      //     });
      // } else {
      //   axios
      //     .get("https://codingapple1.github.io/vue/more0.json")
      //     .then((data) => {
      //       this.postdata.push(data.data);
      //     });
      // }
      axios
        .get(`https://codingapple1.github.io/vue/more${this.count}.json`)
        .then((data) => {
          this.postdata.push(data.data);
          this.count++;
        });
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
