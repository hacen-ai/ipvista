<template>
  <footer class="bg-[#f9f6ff]">
    <div class="border-t border-black/10 bg-light">
      <div
        class="container grid max-w-[1148px] px-[19px] py-[28px] mx-auto lg:grid-cols-[1fr_max-content] lg:gap-[111px] items-start md:py-[30px]"
      >
        <div class="grid lg:grid-cols-[32fr_42fr] lg:gap-[51px]">
          <div>
            <a
              aria-current="page"
              href="/"
              class="router-link-active router-link-exact-active group"
              ><img
                src="https://iptvfiesta.com/_ipx/s_177x35/img/logo.svg"
                onerror="this.setAttribute('data-error', 1)"
                width="177"
                height="35"
                alt="FIESTA LOGO"
                data-nuxt-img=""
                class="[transition:filter_.3s] brightness-0 invert-[.60] mb-4 hover:brightness-100 hover:invert-0 group-focus-visible:brightness-100 group-focus-visible:invert-0"
            /></a>
            <p
              class="text-lg text-black/40 leading-[26px] max-w-[90%] mb-[25px]"
            >
              Unrivaled IPTV streaming with 9,000+ channels, live sports, movies
              &amp; TV shows. Seamless viewing on multiple devices, affordable
              pricing.
            </p>
          </div>
          <div
            class="grid gap-7 mb-[39px] lg:grid-flow-col lg:justify-between mt-[17px]"
          >
            <!--[-->
            <div class="grid gap-[15px]">
              <p class="text-lg font-bold text-dark">Help</p>
              <!--[-->
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >Channels list</a
                >
              </div>
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >Apps</a
                >
              </div>
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >Support</a
                >
              </div>
              <!--]-->
            </div>
            <div class="grid gap-[15px]">
              <p class="text-lg font-bold text-dark">Legal</p>
              <!--[-->
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >Terms of Service</a
                >
              </div>
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >Privacy Policy</a
                >
              </div>
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >DMCA</a
                >
              </div>
              <!--]-->
            </div>
            <!--]-->
          </div>
        </div>
        <!--[--><!--[-->
        <div
          class="transition-[box-shadow] border border-1 border-dark/70 w-[190px] rounded-lg text-start text-lg leading-[26px] ui-open:border-primary ui-open:border-2 focus-within:border-2 focus-within:border-primary mt-[17px]"
          data-headlessui-state=""
        >
          <!--[--><button
            @click="toggle"
            class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] flex justify-between items-center"
            id="headlessui-popover-button-4561564"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            English
            <img
              src="https://iptvfiesta.com/_ipx/s_24x24/img/arrow-bottom.svg"
              onerror="this.setAttribute('data-error', 1)"
              width="24"
              height="24"
              alt="Arrow"
              data-nuxt-img=""
              class="transition-transform ui-open:rotate-180"
            /></button
          ><!----><!--]--><!---->
          <div v-show="show" class="">
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              Español
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              Português
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              Français
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              Italiano
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              Deutsch
            </button>
          </div>
        </div>
        <!--]-->
        <div
          style="
            position: fixed;
            top: 1;
            left: 1;
            width: 1;
            height: 0;
            padding: 0;
            margin: -1;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
            display: none;
          "
        ></div>
        <!--]-->
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref } from "vue";

const show = ref(false);
const toggle = () => (show.value = !show.value);
</script>
