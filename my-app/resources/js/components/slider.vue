<script>
  export default {
    data () {
      return {
        color: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
        "https://img.freepik.com/premium-vector/hello-spring-horizontal-sale-banner-with-realistic-women-accessories-cosmetics_187548-1172.jpg?size=626&ext=jpg&uid=R110352864&ga=GA1.1.1882598692.1697546408&semt=sph",
        "https://img.freepik.com/free-vector/cartoon-style-personal-stylist-instagram-stories_52683-81033.jpg?size=626&ext=jpg&uid=R110352864&ga=GA1.1.1882598692.1697546408&semt=ais",
        "https://img.freepik.com/free-vector/abstract-fashion-monsoon-sale-banner-offer-discount-business-background-free-vector_1340-22460.jpg?size=626&ext=jpg&uid=R110352864&ga=GA1.1.1882598692.1697546408&semt=sph",
        "https://img.freepik.com/premium-vector/set-hand-drawn-mannequins-flowers_187548-264.jpg?size=626&ext=jpg&uid=R110352864&ga=GA1.1.1882598692.1697546408&semt=sph"
        ],
      }
    },
  }
</script>


<template>
  <v-carousel
    cycle
    height="300"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slides, i) in slides"
      :key="i"
      
    >
      <v-sheet height="80%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            <img :src="slides" id="slider-img"/>
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<style setup>
#slider-img{
width: 900px;
}
.text-h2{
  margin-top: 150px;
}
</style>













































<!-- <script>
export default {
  // name: "Slider",
  data() {
    return {
      images: [
        "https://img.freepik.com/premium-vector/hello-spring-horizontal-sale-banner-with-realistic-women-accessories-cosmetics_187548-1172.jpg?size=626&ext=jpg&uid=R110352864&ga=GA1.1.1882598692.1697546408&semt=sph",
        "https://img.freepik.com/free-vector/cartoon-style-personal-stylist-instagram-stories_52683-81033.jpg?size=626&ext=jpg&uid=R110352864&ga=GA1.1.1882598692.1697546408&semt=ais",
        "https://img.freepik.com/free-vector/abstract-fashion-monsoon-sale-banner-offer-discount-business-background-free-vector_1340-22460.jpg?size=626&ext=jpg&uid=R110352864&ga=GA1.1.1882598692.1697546408&semt=sph",
        "https://img.freepik.com/premium-vector/set-hand-drawn-mannequins-flowers_187548-264.jpg?size=626&ext=jpg&uid=R110352864&ga=GA1.1.1882598692.1697546408&semt=sph"
      ],
      // timer: null,
      currentIndex: 0
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 5000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<template>
  <div>
    <transition-group name="fade" tag="div" id="main-div">
      <div v-for="i in [currentIndex]" :key="i" >
        <div id="ser">
          <a class="prev" @click="prev" href="#"><img @click="prev" src="../images/left.png" class="navi" /></a>
          <img :src="currentImg" id="slide-img" />
          <a class="next" @click="next" href="#"><img @click="next" src="../images/right.png" class="navi" /></a>
        </div>

      </div>
    </transition-group>


  </div>
</template>

<style>
#main-div{
  margin-right: 20px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
#ser {
  display: flex;
  align-items: center;
}

#slide-img {
  width: 90%;
  height: 300px;
}
.navi {
  width: 50px;
  cursor: pointer;
}
</style> -->












































<!-- <script>
export default {
  name: 'App',
  data() {
    return {
      images: "../images/wear_pic.jpg",
      currentIndex : 0
    }
  },


  methods: {
    left() {
      console.log("Left");
    },

    right() {
      console.log("right");
      currentIndex
      document.getElementById("slider-img").innerHTML = "<img src='../images/wear_pic.jpg' alt='men wearing a jacket'>";
    }
  }
}
</script> -->


<!-- <template>
  <div class="container">
    <div class="slider">
      <img @click="left" src="../images/left.png" class="navi" />
      <div id="slider">
        <img src="../images/wear_pic.jpg" alt="men wearing a jacket" id="slider-img">
      </div>
      <img @click="right" src="../images/right.png" class="navi" /> -->
      <!-- <img src="../images/wear_pic.jpg" alt="men wearing a jacket" class="slider-img">
      <img src="../images/wear_pic.jpg" alt="men wearing a jacket" class="slider-img"> -->
    <!-- </div>
  </div>
</template> -->




<!-- <style scoped>
.slider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid black;
}

.container {
  /* border: 2px solid black; */
  width: 1100px;
  height: 300px;
  margin-inline: auto;
}

.navi {
  width: 50px;
  cursor: pointer;
}

.btn {
  border: 2px solid black;
  margin: 5px 0px 5px 0px;
  padding: 5px 30px 5px 30px;
}

#slider-img {
  border: 2px solid red;
  width: 98%;
  height: 300px;
}
</style> -->





















<!-- <template>
  <div>
    <img src="../images/mens-wear.jpg" alt="men wearing a jacket" class="slider-img">
  </div>
</template>
<style scoped>
.slider-img{
    height: 320px;
    width: 1000px;
}
</style> -->