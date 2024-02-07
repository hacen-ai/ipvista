<template>
  <section
    id="products"
    class="[counter-increment:_checkout-counter] grid gap-[38px] pb-[46px] md:pb-[39px]"
  >
    <p
      class="flex items-center gap-3 text-dark text-2xl font-medium before:[content:_counter(checkout-counter)] before:w-[42px] before:h-[42px] before:rounded-full before:bg-pink before:flex before:items-center before:justify-center before:text-white before:border before:border-black/10 before:[box-shadow:0_2px_2px_0_rgba(0,0,0,.06)] before:aspect-square"
    >
      <!--[-->Choose the subscription that suits you<!--]-->
    </p>
    <!--[-->
    <div
      class="grid gap-[45px] lg:grid-flow-col lg:gap-[34px] lg:mx-[2px]"
      id="headlessui-radiogroup-4562576"
      role="radiogroup"
    >
      <!--[-->
      <div
        id="headlessui-radiogroup-option-4562577"
        role="radio"
        aria-checked="false"
        tabindex="-1"
        data-headlessui-state=""
        class="z-10 rounded-base group"
      >
        <div
          class="relative h-[236px] z-10 shadow-base rounded-[10px] mx-1 lg:mx-0"
        >
          <!---->
          <div
            @click="select(1)"
            :class="{ 'border-green': selected === 1 }"
            class="relative transition-[box-shadow] rounded-[inherit] border-4 bg-white cursor-pointer pt-10 pb-[15px] px-[20px] h-full text-center grid content-between ui-checked:border-4 ui-checked:border-green ui-checked:shadow-advanced outline-none group-focus-visible:border-[6px] z-0"
            style="transform: scale(1) translateZ(0px)"
          >
            <!---->
            <p class="font-bold text-[30px] leading-[24px] text-webDark">
              1 Month Pass
            </p>
            <p
              class="font-bold text-[46px] leading-[24px] text-webDarker pt-[9px] grid gap-[15px]"
            >
              €9.99/mo.
              <!---->
            </p>
            <p class="text-sm text-webDark/70">7-day money-back guarantee</p>
          </div>
        </div>
      </div>
      <div
        id="headlessui-radiogroup-option-4562578"
        role="radio"
        aria-checked="true"
        tabindex="0"
        data-headlessui-state="checked"
        class="z-10 rounded-base group"
      >
        <div
          class="relative h-[236px] z-10 shadow-base rounded-[10px] mx-1 lg:mx-0"
        >
          <!---->
          <div
            :class="{ 'border-green': selected === 2 }"
            @click="select(2)"
            class="relative transition-[box-shadow] rounded-[inherit] border-4 bg-white cursor-pointer pt-10 pb-[15px] px-[20px] h-full text-center grid content-between ui-checked:border-4 ui-checked:border-green ui-checked:shadow-advanced outline-none group-focus-visible:border-[6px] z-0"
            style="transform: scale(1) translateZ(0px)"
          >
            <div
              :class="{
                'border-green': selected === 2,
                'bg-white': selected !== 2,
                'bg-green': selected === 2,
                'text-white': selected === 2,
              }"
              class="absolute shadow border transition-[box-shadow,_color,_background] box left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full py-[6px] w-[174px] text-lg font-medium text-dark ui-checked:bg-green ui-checked:text-white ui-checked:border-0"
            >
              Save 70%
            </div>
            <p class="font-bold text-[30px] leading-[24px] text-webDark">
              12 Months Pass
            </p>
            <p
              class="font-bold text-[46px] leading-[24px] text-webDarker pt-[9px] grid gap-[15px]"
            >
              €3.99/mo.
              <span class="block text-base font-medium text-dark/50"
                >Instead of €9.99 per month</span
              >
            </p>
            <p class="text-sm text-webDark/70">30-day money-back guarantee</p>
          </div>
        </div>
      </div>
      <div
        id="headlessui-radiogroup-option-4562579"
        role="radio"
        aria-checked="false"
        tabindex="-1"
        data-headlessui-state=""
        class="z-10 rounded-base group"
      >
        <div
          class="relative h-[236px] z-10 shadow-base rounded-[10px] mx-1 lg:mx-0"
        >
          <!---->
          <div
            @click="select(3)"
            :class="{ 'border-green': selected === 3 }"
            class="relative transition-[box-shadow] rounded-[inherit] border-4 bg-white cursor-pointer pt-10 pb-[15px] px-[20px] h-full text-center grid content-between ui-checked:border-4 ui-checked:border-green ui-checked:shadow-advanced outline-none group-focus-visible:border-[6px] z-0"
            style="transform: scale(1) translateZ(0px)"
          >
            <div
              :class="{
                'border-green': selected === 3,
                'bg-white': selected !== 3,
                'bg-green': selected === 3,
                'text-white': selected === 3,
              }"
              class="absolute shadow border transition-[box-shadow,_color,_background] box left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full py-[6px] w-[174px] text-lg font-medium text-dark ui-checked:bg-green ui-checked:text-white ui-checked:border-0"
            >
              Save 40%
            </div>
            <p class="font-bold text-[30px] leading-[24px] text-webDark">
              3 Months Pass
            </p>
            <p
              class="font-bold text-[46px] leading-[24px] text-webDarker pt-[9px] grid gap-[15px]"
            >
              €7.99/mo.
              <span class="block text-base font-medium text-dark/50"
                >Instead of €9.99 per month</span
              >
            </p>
            <p class="text-sm text-webDark/70">30-day money-back guarantee</p>
          </div>
        </div>
      </div>
      <!--]-->
    </div>
    <!--]-->
  </section>
</template>

<script setup>
import { ref } from "vue";
const selected = ref(1);

const select = (index) => {
  selected.value = index;
};
</script>
