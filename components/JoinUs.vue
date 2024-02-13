<template>
  <section id="join-us" class="bg-[#f9f6ff] pb-[32px] md:pb-[37px]">
    <div class="container mx-auto max-w-[1142px] py-5">
      <div
        class="bg-primary p-[0_20px_30px_18px] rounded-[10px] text-white shadow-base items-center grid-cols-[1fr_max-content] gap-6 lg:grid lg:p-[39px_33px_35px_350px] relative lg:gap-9"
      >
        <img
          src="https://iptvfiesta.com/_ipx/s_301x203/img/website/tv-channels.webp"
          onerror="this.setAttribute('data-error', 1)"
          width="301"
          height="203"
          alt="TV Channels"
          data-nuxt-img=""
          class="relative top-[-18px] mx-auto lg:absolute lg:left-[21px] lg:top-0 lg:scale-110"
        />
        <div>
          <p class="font-black text-[28px] leading-[35px] mb-[2px] lg:mb-[5px]">
            {{ $t("boxQualiTitle") }}
          </p>
          <p class="opacity-70 mb-[25px] lg:mb-0">
            {{ $t("boxQualiDescp") }}
          </p>
        </div>
        <div
          class="grid justify-items-center gap-[15px] max-w-full w-[283px] mx-auto grid-cols-1"
        >
          <NuxtLink
            to="/checkout"
            class="transition-[outline,_transform] bg-green px-8 rounded-full font-bold text-lg shadow-btn2 text-center focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-4 outline-green grid items-center focus-visible:scale-[1.02] hover:scale-[1.02] flex items-center justify-center h-[62px] leading-[1] w-full"
          >
            {{ $t("boxQualibtt") }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
