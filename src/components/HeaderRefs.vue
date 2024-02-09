<template>
    <section class="sideInfo">
        <ul class="sideInfo__wrapper">
          <li><a target="_blank" href="https://www.youtube.com/channel/UCBDX5fS0vaenc00pk-2FCGw"><img class="sideInfo__logo" src="@/assets/youtube.png" alt=""></a></li>
          <li><a target="_blank" href="https://vk.com/pyatigorsk.rgsu"><img class="sideInfo__logo" src="@/assets/vk.png" alt=""></a></li>
          <li><a target="_blank" href="https://t.me/rgsu_pyatigorsk"><img class="sideInfo__logo" src="@/assets/telegram.png" alt=""></a></li>
          <li><a target="_blank" href="https://api.whatsapp.com/send/?phone=79283488484&text&type=phone_number&app_absent=0"><img class="sideInfo__logo" src="@/assets/whatsapp.png" alt=""></a></li>
        </ul>
        <ul class="sideInfo__refs">
          <li>
            <a class="sideInfo__refs__adv" href="mailto:pjatigorsk@rgsu.net"
              ><strong>pjatigorsk@rgsu.net</strong></a
            >
          </li>
          <li>
            <a class="sideInfo__refs__adv" href="tel:+7 (8793) 33-60-97"
              >+7 (8793) 33-60-97</a
            >
          </li>
          <li>
            <a class="sideInfo__refs__adv" href="tel:+7 (928) 348-84-84"
              >+7 (928) 348-84-84</a
            >
          </li>
          <li>
            <a class="sideInfo__refs__adv" href="tel:+7 (495) 255-67-67"
              >+7 (495) 255-67-67, доб. 7115</a
            >
          </li>
        </ul>
    </section>
</template>
<script>
export default {

}
</script>
<style scoped>
.sideInfo__refs {
  color: #024a7a;
  list-style: none;
  font-size: 1.5em;
  align-self: center;
  line-height: 1.2;
}

.sideInfo__refs__adv {
  text-decoration: none;
  color: #024a7a;
}
.sideInfo__wrapper {
  display: flex;
  gap: 20px;
}
.sideInfo__wrapper li{
  text-decoration: none;
  list-style: none;
  max-width: 40px;
}
.sideInfo__logo {
  max-width:100%;
}
</style>