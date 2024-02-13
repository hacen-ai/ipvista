<template>
  <div class="bg-[#f9f6ff]">
    <section
      id="pricing"
      class="container mx-auto xl:max-w-[1148px] pt-[41px] pb-[38px] px-[19px] grid gap-[33px] md:grid-cols-[49fr_54fr] md:gap-[7%] md:pt-[85px] md:pb-[73px] items-center"
    >
      <div class="px-[13px]">
        <p class="font-black text-[26px] text-webDark leading-[41px] mb-4">
          {{ $t("divfouTitle") }}
        </p>
        <p class="text-xl text-webBlack/70 mb-[29px]">
          {{ $t("divfouDescp") }}
        </p>
        <ul class="grid gap-[18px] content-center">
          <!--[-->
          <li
            class="font-medium text-xl text-dark pl-11 flex items-center bg-no-repeat bg-[url('https://iptvfiesta.com/img/website/green-check.svg')] bg-[size:28px_auto]"
          >
            {{ $t("divfoupO") }}
          </li>
          <li
            class="font-medium text-xl text-dark pl-11 flex items-center bg-no-repeat bg-[url('https://iptvfiesta.com/img/website/green-check.svg')] bg-[size:28px_auto]"
          >
            {{ $t("divfoupTw") }}
          </li>
          <li
            class="font-medium text-xl text-dark pl-11 flex items-center bg-no-repeat bg-[url('https://iptvfiesta.com/img/website/green-check.svg')] bg-[size:28px_auto]"
          >
            {{ $t("divfoupTh") }}
          </li>
          <li
            class="font-medium text-xl text-dark pl-11 flex items-center bg-no-repeat bg-[url('https://iptvfiesta.com/img/website/green-check.svg')] bg-[size:28px_auto]"
          >
            {{ $t("divfoupfo") }}
          </li>
          <!--]-->
        </ul>
      </div>
      <div class="grid gap-[38px] md:gap-[19px]">
        <!--[-->
        <div
          class="grid gap-[11px] md:gap[15px]"
          id="headlessui-radiogroup-4548167"
          role="radiogroup"
        >
          <!--[-->
          <div
            @click="changePackage(1)"
            id="headlessui-radiogroup-option-4548168"
            role="radio"
            aria-checked="false"
            tabindex="-1"
            data-headlessui-state=""
            class="rounded-base group"
          >
            <div
              :class="{
                'border-green': selected === 1,
                'border-black/10': selected !== 1,
              }"
              class="transition-[box-shadow] bg-white cursor-pointer border-4 rounded-[10px] py-5 px-[17px] grid grid-cols-[max-content_1fr] gap-6 md:pb-[22px] ui-checked:border-2 ui-checked:border-green group-focus-visible:border-4"
              style="transform: scale(1) translateZ(0px)"
            >
              <div
                class="transition-[border] w-8 h-8 p-[3px] rounded-full border-2 border-webDark/50 ui-checked:border-green"
              >
                <div
                  :class="{
                    'opacity-1': selected === 1,
                    'opacity-0': selected !== 1,
                  }"
                  class="transition-[transform,_opacity] w-full h-full rounded-[inherit] bg-green scale-75 ui-checked:opacity-100 ui-checked:scale-100"
                ></div>
              </div>
              <div class="justify-between md:flex">
                <div>
                  <p
                    class="font-bold text-xl leading-[24px] text-webDark flex gap-2 items-baseline mb-0.5"
                  >
                    {{ $t("divfouspanO") }}
                    <span class="text-lg font-medium opacity-70"
                      >{{ $t("divfouspanTwSave") }} 0%</span
                    >
                  </p>
                  <p class="text-sm opacity-70 leading-[18px] mb-3 md:mb-0">
                    {{ $t("cooool") }}
                  </p>
                </div>
                <div class="grid [grid-auto-rows:max-content]">
                  <p class="font-bold text-xl leading-[24px] text-webDarker">
                    9.99€/{{ $t("monat") }}
                  </p>
                  <!---->
                </div>
              </div>
            </div>
          </div>
          <div
            @click="changePackage(2)"
            id="headlessui-radiogroup-option-4548169"
            role="radio"
            aria-checked="false"
            tabindex="-1"
            data-headlessui-state=""
            class="rounded-base group"
          >
            <div
              :class="{
                'border-green': selected === 2,
                'border-black/10': selected !== 2,
              }"
              class="transition-[box-shadow] cursor-pointer shadow-base border-4 rounded-[10px] bg-white py-5 px-[17px] grid grid-cols-[max-content_1fr] gap-6 md:pb-[22px] ui-checked:border-2 ui-checked:border-green group-focus-visible:border-4"
              style="transform: scale(1) translateZ(0px)"
            >
              <div
                class="transition-[border] w-8 h-8 p-[3px] rounded-full border-2 border-webDark/50 ui-checked:border-green"
              >
                <div
                  :class="{
                    'opacity-1': selected === 2,
                    'opacity-0': selected !== 2,
                  }"
                  class="transition-[transform,_opacity] w-full h-full rounded-[inherit] bg-green scale-75 ui-checked:opacity-100 ui-checked:scale-100"
                ></div>
              </div>
              <div class="justify-between md:flex">
                <div>
                  <p
                    class="font-bold text-xl leading-[24px] text-webDark flex gap-2 items-baseline mb-0.5"
                  >
                    {{ $t("divfouspanTw") }}
                    <span class="text-lg font-medium text-green opacity-70"
                      >{{ $t("divfouspanTwSave") }} 40%</span
                    >
                  </p>
                  <p class="text-sm opacity-70 leading-[18px] mb-3 md:mb-0">
                    {{ $t("divfouspanThh") }}
                  </p>
                </div>
                <div class="grid [grid-auto-rows:max-content]">
                  <p class="font-bold text-xl leading-[24px] text-webDarker">
                    7.99€/{{ $t("monat") }}
                  </p>
                  <p
                    class="text-sm font-medium line-through opacity-50 text-dark md:justify-self-end"
                  >
                    9.99€/{{ $t("monat") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            @click="changePackage(3)"
            id="headlessui-radiogroup-option-4548170"
            role="radio"
            aria-checked="true"
            tabindex="0"
            data-headlessui-state="checked"
            class="rounded-base group"
          >
            <div
              :class="{
                'border-green': selected === 3,
                'border-black/10': selected !== 3,
              }"
              class="transition-[box-shadow] cursor-pointer shadow-base border-4 rounded-[10px] bg-white py-5 px-[17px] grid grid-cols-[max-content_1fr] gap-6 md:pb-[22px] ui-checked:border-2 ui-checked:border-green group-focus-visible:border-4"
              style="transform: scale(1) translateZ(0px)"
            >
              <div
                class="transition-[border] w-8 h-8 p-[3px] rounded-full border-2 border-webDark/50 ui-checked:border-green"
              >
                <div
                  :class="{
                    'opacity-1': selected === 3,
                    'opacity-0': selected !== 3,
                  }"
                  class="transition-[transform,_opacity] w-full h-full rounded-[inherit] bg-green scale-75 ui-checked:opacity-100 ui-checked:scale-100"
                ></div>
              </div>
              <div class="justify-between md:flex">
                <div>
                  <p
                    class="font-bold text-xl leading-[24px] text-webDark flex gap-2 items-baseline mb-0.5"
                  >
                    {{ $t("divfouspanTh") }}
                    <span class="text-lg font-medium text-green opacity-70"
                      >{{ $t("divfouspanTwSave") }} 70%</span
                    >
                  </p>
                  <p class="text-sm opacity-70 leading-[18px] mb-3 md:mb-0">
                    {{ $t("divfouspanThhh") }}
                  </p>
                </div>
                <div class="grid [grid-auto-rows:max-content]">
                  <p class="font-bold text-xl leading-[24px] text-webDarker">
                    3.99€/{{ $t("monat") }}
                  </p>
                  <p
                    class="text-sm font-medium line-through opacity-50 text-dark md:justify-self-end"
                  >
                    9.99€/{{ $t("monat") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!--]-->
        </div>
        <!--]-->
        <div class="grid gap-[15px] grid-cols-1">
          <NuxtLink
            :to="localPath('/checkout#products')"
            class="transition-[outline,_transform] bg-green py-[19px] px-8 rounded-full font-bold text-lg shadow-btn2 text-center focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-4 outline-green grid items-center focus-visible:scale-[1.02] hover:scale-[1.02] text-white w-full"
            >{{ $t("divfouspanFhoobto") }}</NuxtLink
          ><!---->
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
const selected = ref(1);
const localPath = useLocalePath();

const changePackage = (index) => {
  selected.value = index;
};
</script>
