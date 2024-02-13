<template>
  <div class="bg-pink">
    <div
      class="container mx-auto max-w-[1242px] px-[21px] pt-[33px] pb-[39px] grid gap-[29px] md:grid-cols-[63fr_49fr] md:items-center md:py-[103px]"
    >
      <img
        src="https://iptvfiesta.com/_ipx/h_406/img/website/countries.webp"
        onerror="this.setAttribute('data-error', 1)"
        height="406"
        alt="countries"
        loading="lazy"
        data-nuxt-img=""
        class="w-[min(450px,_100%)] mx-auto md:w-full"
      />
      <div class="text-center text-white md:text-left">
        <p class="font-black text-[26px] mb-[5px] md:mb-[22px]">
          {{ $t("divThTitle") }}
        </p>
        <p class="text-[20px] opacity-70 mb-[41px] md:mb-[27px]">
          {{ $t("divThDesc") }}
        </p>
        <div class="grid justify-items-center gap-[15px] md:justify-start">
          <NuxtLink
            :to="localPath('/checkout')"
            class="transition-[outline,_transform] bg-green py-[19px] px-8 rounded-full font-bold text-lg shadow-btn2 text-center focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-4 outline-green grid items-center focus-visible:scale-[1.02] hover:scale-[1.02] bg-white !text-primary w-[294px] max-w-full mx-auto md:mx-0 outline-white"
            >{{ $t("divThBtt") }}</NuxtLink
          ><!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localPath = useLocalePath();
</script>
