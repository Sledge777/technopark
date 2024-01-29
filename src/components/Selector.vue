<template>
  <section class="chose">
    <label id="label" for="select">Направления <img class="down" src="@/src/../assets/down.png" alt=""></label>

    <div class="chose__wrapper" id="select">
      <div class="img__wrapper">
        <a><img  class="chose__wrapper__img" id="first" src="@/assets/webdev.jpg" alt=""></a>
        <a href="#"><img @click="$router.push('/Lists')" class="chose__wrapper__img chose__wrapper__img--hide" id="second" src="@/assets/python.jpeg" alt=""></a>
        <div class="btn" @click="show"></div>
        <div class="btn2" @click="show2"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
data() {
    return {
      First: '',
      Second: ''
    }
  },
methods: {
    show() {
      this.First.classList.remove("chose__wrapper__img--hide")
      this.Second.classList.add("chose__wrapper__img--hide")
    },
    show2() {
      this.First.classList.add("chose__wrapper__img--hide")
      this.Second.classList.remove("chose__wrapper__img--hide")
    }
  },
mounted() {
    this.First = document.getElementById('first');
    this.Second = document.getElementById('second');
  }   
}
</script>
<style scoped>
#label {
    font-size: 50px;
    color: #024a7a;
    line-height: 1.3;
}
.down {
    width: 30px;

}
.chose {
  width: 50%;
  margin: auto;
}
.chose__wrapper__img {
  width: 100%;
  border-radius: 50px;
  transition: opacity 0.3s ease-in-out;

}
.img__wrapper a:last-of-type {
  position: absolute;
  left: 0;
}
.img__wrapper {
  position: relative;
  width: 100%;
}
.btn {
  height: 30px;
  width: 30px;
  background-color: black;
  position:absolute;
  border-radius: 100%;
  bottom:10px;
  right: 20px;
  transition: all 0.3s;
}
.btn2 {
  height: 30px;
  width: 30px;
  background-color: black;
  position:absolute;
  border-radius: 100%;
  bottom:10px;
  right: 60px;
  transition: all 0.3s;
}
.btn2:hover, .btn:hover {
  background-color: grey;
  transition: all 0.3s;
  cursor: pointer;
}
.chose__wrapper__img--hide {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>