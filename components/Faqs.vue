<template>
  <div class="bg-[#f9f6ff]">
    <section
      id="faq"
      class="container mx-auto max-w-[1110px] pt-[38px] pb-[19px] md:pb-[38px]"
    >
      <p
        class="text-center font-black text-[26px] leading-[34px] text-webDarker mb-[49px]"
      >
        Frequently Asked Questions
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
import { ref } from "vue";
const faqs = ref([
  {
    id: 1,
    question: "What is IPTV and how does it work?",
    showing: false,
    answer:
      "IPTV is a service that allows you to watch TV over the internet. It works by sending your TV signal over your internet connection. You can use it on any device, including your smartphone, tablet, computer, or TV.",
  },
  {
    id: 2,

    question: "What types of channels are available with your service?",
    showing: false,
    answer:
      "We offer a wide range of channels, including sports, movies, news, and entertainment. You can also access premium channels and on-demand content.",
  },
  {
    id: 3,
    question: "Do you offer movies and TV series in addition to live channels?",
    showing: false,
    answer:
      "Yes, we offer a large selection of movies and TV series on demand. You can watch them at any time, and as many times as you like.",
  },
  {
    id: 4,
    question: "What devices are compatible with your service?",
    showing: false,
    answer:
      "Our service is compatible with a wide range of devices, including smartphones, tablets, computers, and smart TVs. You can also use it with streaming devices like Roku, Amazon Fire TV, and Apple TV.",
  },
  {
    id: 5,
    question: "How do I set up the service on my device?",
    showing: false,
    answer:
      "Setting up our service is easy. You can download our app from the app store on your device, or visit our website to sign up and start watching.",
  },
  {
    id: 6,
    question: "What is your pricing model and how much does it cost?",
    showing: false,
    answer:
      "We offer a range of pricing options to suit your needs. You can choose from a monthly, quarterly, or annual subscription, and we offer a range of packages to suit your budget.",
  },
  {
    id: 7,
    question: "Is your service secure and private?",
    showing: false,
    answer:
      "Yes, we take your privacy and security seriously. We use the latest encryption technology to protect your data, and we do not store any of your personal information.",
  },
  {
    id: 8,
    question: "Do you offer a free trial or money-back guarantee?",
    showing: false,
    answer:
      "Yes, we offer a free trial so you can try our service before you buy. We also offer a money-back guarantee, so you can buy with confidence.",
  },
  {
    id: 9,
    question: "How can I contact customer support if I have any issues?",
    showing: false,
    answer:
      "Our customer support team is available 24/7 to help you with any issues. You can contact us by phone, email, or live chat, and we will be happy to assist you.",
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
