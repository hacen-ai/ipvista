<script setup>
const slides = ref([
  { bg: "#f00", color: "#fff" },
  { bg: "#0f0", color: "#fff" },
  { bg: "#00f", color: "#fff" },
  { bg: "#ff0", color: "#fff" },
  { bg: "#f0f", color: "#fff" },
  { bg: "#0ff", color: "#fff" },
]);
</script>

<template>
  <div>
    <h1>Nuxt Swiper Basic Example</h1>
    <hr />
    <h2>Swiper Creative Effect</h2>
    <Swiper
      :height="300"
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide> 1 </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <SwiperControls />
    </Swiper>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
