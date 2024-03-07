<template>
    <div class="logo">
      <img src="@/assets/RGSU_logo.png" alt="Logo RGSU" class="logo__img" />
      <div class="logo__line"></div>
      <h1 class="logo__text">
        ФИЛИАЛ РГСУ В Г. ПЯТИГОРСКЕ СТАВРОПОЛЬСКОГО КРАЯ
      </h1>
      <div class="logo__line"></div>
    </div>
</template>

<script>

</script>

<style scoped>
.logo {
  display: flex;
  
}

.logo__img {
  width: 40%;
  align-self: center;
}

.logo__line {
  width: 0.5%;
  background-color: #024a7a;
}

.logo__text {
  font-size: 30px;
  color: #024a7a;
  text-align: center;
  align-self: center;

}
.logo__line:last-child {
  margin-right: 1%;
}
</style>