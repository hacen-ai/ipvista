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
              {{ $t("divthbttdivfopO") }}
            </p>
          </div>
          <div
            class="grid gap-7 mb-[39px] lg:grid-flow-col lg:justify-between mt-[17px]"
          >
            <!--[-->
            <div class="grid gap-[15px]">
              <p class="text-lg font-bold text-dark">
                {{ $t("divthbttdivfoaO") }}
              </p>
              <!--[-->
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >{{ $t("divthbttdivfoaOpO") }}</a
                >
              </div>
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >{{ $t("divthbttdivfoaOpTw") }}</a
                >
              </div>
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >{{ $t("divthbttdivfoaOpTh") }}</a
                >
              </div>
              <!--]-->
            </div>
            <div class="grid gap-[15px]">
              <p class="text-lg font-bold text-dark">
                {{ $t("divthbttdivfoaTw") }}
              </p>
              <!--[-->
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >{{ $t("divthbttdivfoaTwpO") }}</a
                >
              </div>
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >{{ $t("divthbttdivfoaTwpTw") }}</a
                >
              </div>
              <div class="grid gap-4">
                <a
                  href="#"
                  class="transition-[color,_transform] origin-left text-dark/80 text-lg font-normal focus-within:text-primary focus-within:scale-105 w-max hover:text-primary hover:scale-105"
                  >{{ $t("divthbttdivfoaTwpTh") }}</a
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
            {{ selectedLang }}
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
          <div v-if="show" class="transition-all w-full duration-500">
            <button
              class="w-full pt-[14px] flex items-center justify-between pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              @click="selectLanguageFunc('English')"
            >
              English
              {{ selectedLang === "English" ? "✔" : "" }}
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              @click="selectLanguageFunc('Español')"
            >
              Español
              {{ selectedLang === "Español" ? "✔" : "" }}
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              @click="selectLanguageFunc('Português')"
            >
              Português
              {{ selectedLang === "Português" ? "✔" : "" }}
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              @click="selectLanguageFunc('Français')"
            >
              Français
              {{ selectedLang === "Français" ? "✔" : "" }}
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              @click="selectLanguageFunc('Italiano')"
            >
              Italiano
              {{ selectedLang === "Italiano" ? "✔" : "" }}
            </button>
            <button
              class="w-full pt-[14px] pb-[13px] pl-[22px] pr-[13px] text-left"
              id="headlessui-popover-button-4561564"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              @click="selectLanguageFunc('Deutsch')"
            >
              Deutsch
              {{ selectedLang === "Deutsch" ? "✔" : "" }}
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
import { ref, onMounted } from "vue";
const selectedLang = ref("English");

const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

onMounted(() => {
  console.log("====================================");
  console.log(locale.value);
  console.log("====================================");
  if (locale.value === "en") {
    selectedLang.value = "English";
  } else if (locale.value === "es") {
    selectedLang.value = "Español";
  } else if (locale.value === "pt") {
    selectedLang.value = "Português";
  } else if (locale.value === "fr") {
    selectedLang.value = "Français";
  } else if (locale.value === "it") {
    selectedLang.value = "Italiano";
  } else if (locale.value === "de") {
    selectedLang.value = "Deutsch";
  }
});

const selectLanguageFunc = (value) => {
  selectedLang.value = value;
  // alert("Language changed to " + value);
  if (selectedLang.value === "English") {
    locale.value = "en-US";
    setLocale("en-US");
  } else if (selectedLang.value === "Español") {
    locale.value = "es";
  } else if (selectedLang.value === "Português") {
    locale.value = "pt";
  } else if (selectedLang.value === "Français") {
    locale.value = "fr-FR";
    setLocale("fr-FR");
  } else if (selectedLang.value === "Italiano") {
    locale.value = "it";
  } else if (selectedLang.value === "Deutsch") {
    locale.value = "de-DE";
    setLocale("de-DE");
  }
  show.value = false;
};

const show = ref(false);
const toggle = () => (show.value = !show.value);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
