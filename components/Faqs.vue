<template>
  <div class="bg-[#f9f6ff]">
    <section
      id="faq"
      class="container mx-auto max-w-[1110px] pt-[38px] pb-[19px] md:pb-[38px]"
    >
      <p
        class="text-center font-black text-[26px] leading-[34px] text-webDarker mb-[49px]"
      >
        {{ $t("FAQ") }}
      </p>
      <div class="grid gap-3 max-w-[920px] mx-auto lg:gap-2">
        <!--[-->
        <div v-for="(faq, idx) in faqs">
          <div
            v-motion
            :initial="{
              y: 0,
              opacity: 0,
            }"
            :visible="{
              y: 0,
              opacity: 1,
              transition: {
                delay: 300,
                damping: 90,
              },
            }"
            data-headlessui-state=""
            :key="idx"
            class="transition-[outline] bg-white rounded-[10px] shadow-base overflow-hidden text-dark focus-within:outline focus-within:outline-2 focus-within:outline-primary group"
            style="opacity: 1; transform: scale(1) translateZ(0px)"
          >
            <button
              :key="idx"
              @click="toggle(idx)"
              id="headlessui-disclosure-button-4550498"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
              class="transition-[color] p-[25px_27px_27px_25px] flex items-center text-start justify-between w-full gap-3 text-lg leading-[31px] font-medium group-focus-within:text-primary"
            >
              {{ faq.question }}
              <div class="relative flex-none w-6 h-6">
                <span
                  class="block h-[3px] w-full top-1/2 rounded-full bg-dark absolute -translate-y-1/2"
                >
                </span
                ><span
                  class="block h-full w-[3px] left-1/2 rounded-full bg-dark absolute -translate-x-1/2 transition-transform ui-open:scale-y-0"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div></button
            ><!---->
            <div
              v-show="faq.showing"
              class="px-6 pb-6 font-semibold text-gray-600"
            >
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
        <!--]-->
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const { t, locale } = useI18n();

console.log(t("FAQ"), locale.value);
const faqs = ref([
  {
    id: 1,
    question: t("FAQHO"),
    showing: false,
    answer: t("FAQDesc"),
  },
  {
    id: 2,

    question: t("FAQHTw"),
    showing: false,
    answer: t("FAQDescTw"),
  },
  {
    id: 3,
    question: t("FAQHTh"),
    showing: false,
    answer: t("FAQDescTh"),
  },
  {
    id: 4,
    question: t("FAQHfo"),
    showing: false,
    answer: t("FAQDescfou"),
  },
  {
    id: 5,
    question: t("FAQHfi"),
    showing: false,
    answer: t("FAQDescffi"),
  },
  {
    id: 6,
    question: t("FAQHfsi"),
    showing: false,
    answer: t("FAQDescsfi"),
  },
  {
    id: 7,
    question: t("FAQHfse"),
    showing: false,
    answer: t("FAQDescsse"),
  },
  {
    id: 8,
    question: t("FAQHfre"),
    showing: false,
    answer: t("FAQDescrse"),
  },
]);

function toggle(idx) {
  faqs.value = faqs.value.map((faq, i) => {
    if (i === idx) {
      return { ...faq, showing: !faq.showing };
    }
    return { ...faq, showing: false };
  });
}
</script>
