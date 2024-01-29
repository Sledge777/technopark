<template>
    <div class="logo">
      <img src="@/assets/RGSU_logo.png" alt="Logo RGSU" class="logo__img" />
      <div class="logo__line"></div>
      <h1 class="logo__text">
        ФИЛИАЛ РГСУ В Г. ПЯТИГОРСКЕ СТАВРОПОЛЬСКОГО КРАЯ
      </h1>
      <slot></slot>
    </div>
</template>

<script>

</script>

<style scoped>
.logo {
  display: flex;
  justify-content: center;
}

.logo__img {
  width: 40%;
  align-self: center;
}

.logo__line {
  width: 1%;
  background-color: #024a7a;
}

.logo__text {
  font-size: 1.5em;
  color: #024a7a;
  width: 30%;
  text-align: center;
  align-self: center;
  margin-left: 3%;
}
</style>