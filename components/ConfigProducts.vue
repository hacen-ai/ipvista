<template>
  <section
    id="configs"
    class="[counter-increment:_checkout-counter] grid gap-7 pb-[36px] md:pb-[48px]"
  >
    <p
      class="flex items-center gap-3 text-dark text-2xl font-medium before:[content:_counter(checkout-counter)] before:w-[42px] before:h-[42px] before:rounded-full before:bg-pink before:flex before:items-center before:justify-center before:text-white before:border before:border-black/10 before:[box-shadow:0_2px_2px_0_rgba(0,0,0,.06)] before:aspect-square"
    >
      <!--[-->Select your options<!--]-->
    </p>
    <div class="grid gap-[18px]">
      <!--[-->
      <div
        class="transition-[outline] bg-white border-2 rounded-md group box mx-1 px-[20px] grid gap-[33px] content-between pt-[26px] pb-[16px] md:grid-cols-[1fr_max-content] md:pb-[25px] md:pl-[23px] md:mx-[2px] focus-within:outline-primary focus-within:outline-[1.5px]"
      >
        <div
          class="grid justify-items-center text-center md:justify-items-start md:grid-flow-col md:text-start md:justify-start md:gap-[35px] md:items-center"
        >
          <img
            src="https://iptvfiesta.com/_ipx/h_62/img/checkout/Extra%20Connections.svg"
            onerror="this.setAttribute('data-error', 1)"
            height="62"
            alt="Config Icon"
            data-nuxt-img=""
            class="mb-[19px] md:mb-0"
          />
          <div class="">
            <p
              class="transition-[color] text-[22px] leading-[24px] text-webDarker font-medium mb-2 group-focus-within:text-primary"
            >
              Extra simultaneous screens
            </p>
            <p class="text-webDark/70 leading-[20px]">
              Want to share your subscription with your family or friends? Add
              as many simultaneous screens as you need.
            </p>
          </div>
        </div>
        <div
          class="flex w-[236px] justify-between items-center mx-auto md:w-[222px] h-[60px]"
        >
          <p class="text-[20px] text-webDarker font-bold">€4.99</p>
          <div
            class="rounded-md border border-1 border-black/10 grid grid-cols-[1fr_max-content_1fr] items-center text-[20px] font-bold text-black leading-[25px]"
          >
            <input
              type="button"
              @click="removeScreen"
              value="-"
              class="transition-[opacity,box-shadow] px-[10px] pt-[17px] pb-[18px] disabled:opacity-50 rounded-[inherit] focus-visible:border-primary focus-visible:border-[1.5px] cursor-pointer disabled:cursor-not-allowed text-center undefined"
              :disabled="extraScreens === 0"
              style="transform: scale(1) translateZ(0px)"
            />
            <p class="w-[39px] text-center">{{ extraScreens }}</p>
            <input
              @click="addScreen"
              type="button"
              value="+"
              :disabled="extraScreens === 5"
              class="transition-[opacity,box-shadow,_background] px-[10px] pt-[17px] pb-[18px] disabled:opacity-50 rounded-[inherit] focus-visible:border-primary focus-visible:border-[1.5px] cursor-pointer disabled:cursor-not-allowed text-center undefined"
              style="transform: scale(1) translateZ(0px)"
            />
          </div>
        </div>
      </div>
      <div
        class="transition-[outline] bg-white border-2 rounded-md group box mx-1 px-[20px] grid gap-[33px] content-between pt-[26px] pb-[16px] md:grid-cols-[1fr_max-content] md:pb-[25px] md:pl-[23px] md:mx-[2px] focus-within:outline-primary focus-within:outline-[1.5px]"
      >
        <div
          class="grid justify-items-center text-center md:justify-items-start md:grid-flow-col md:text-start md:justify-start md:gap-[35px] md:items-center"
        >
          <img
            src="https://iptvfiesta.com/_ipx/h_62/img/checkout/Proxy%20Protection.svg"
            onerror="this.setAttribute('data-error', 1)"
            height="62"
            alt="Config Icon"
            data-nuxt-img=""
            class="mb-[19px] md:mb-0"
          />
          <div class="">
            <p
              class="transition-[color] text-[22px] leading-[24px] text-webDarker font-medium mb-2 group-focus-within:text-primary"
            >
              Proxy Protection
            </p>
            <p class="text-webDark/70 leading-[20px]">
              Built-in proxy to hide your traffic and protect your privacy
            </p>
          </div>
        </div>
        <div
          class="pb-[9px] flex w-[236px] justify-between items-center mx-auto md:w-[222px] h-[60px]"
        >
          <p class="text-[20px] text-webDarker font-bold">€0.99</p>
          <!--[--><!---->
          <button
            @click="proxyProtection = !proxyProtection"
            class="grid group gap-[10px] grid-flow-col text-left justify-start items-center content-center"
            id="headlessui-switch-4562839"
            role="switch"
            type="button"
            tabindex="0"
            aria-checked="false"
            data-headlessui-state=""
          >
            <div
              :class="{ 'bg-green': proxyProtection }"
              class="relative flex items-center justify-center transition-[background,_border] border-[2px] border-black/10 ui-checked:bg-green ui-checked:border-green mt-1 md:mt-0 group-focus-visible:border-primary w-[33px] h-[33px] rounded-full"
            >
              <div
                class="transition-[transform] transform translate-x-0 group-focus-visible:translate-x-0"
                v-show="proxyProtection"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <!---->
            </div>
            <!--[-->
            <p class="font-medium text-dark/80 leading-[20px]">Add</p>
            <!--]--></button
          ><!--]-->
        </div>
      </div>
      <!--]-->
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const proxyProtection = ref(false);
const extraScreens = ref(0);

const addScreen = () => {
  // cannot be more than five
  if (extraScreens.value < 5) {
    extraScreens.value++;
  }
};

const removeScreen = () => {
  // cannot be less than zero
  if (extraScreens.value > 0) {
    extraScreens.value--;
  }
};
</script>
