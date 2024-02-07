<template>
  <section
    id="summary"
    class="[counter-increment:_checkout-counter] grid gap-[38px] pb-[34px] md:pb-[64px]"
  >
    <p
      class="flex items-center gap-3 text-dark text-2xl font-medium before:[content:_counter(checkout-counter)] before:w-[42px] before:h-[42px] before:rounded-full before:bg-pink before:flex before:items-center before:justify-center before:text-white before:border before:border-black/10 before:[box-shadow:0_2px_2px_0_rgba(0,0,0,.06)] before:aspect-square"
    >
      <!--[--><!--[-->Select your preferred payment method<!--]--><!--]-->
    </p>
    <div
      class="box mx-1 grid md:grid-cols-[63fr_45fr] md:box-unset md:gap-[30px]"
    >
      <div
        class="pt-[17px] bg-white border-2 rounded-xl pb-[20px] md:box h-max md:pt-[24px] md:pb-[27px] [grid-row:2] md:[grid-row:_unset]"
      >
        <form
          class="formkit-form"
          id="input_0"
          name="form_1"
          data-auto-animate="true"
          style="position: relative"
        >
          <!--[--><!----><!----><!----><!---->
          <div class="px-[25px] md:px-[27px]">
            <!---->
            <div
              class="formkit-outer mb-4 mb-[39px] md:mb-7"
              data-family="text"
              data-type="email"
              data-empty="true"
              data-auto-animate="true"
              style="position: relative"
            >
              <div class="grid gap-1 formkit-wrapper">
                <label
                  class="formkit-label block font-medium text-darker/60 text-lg text-dark leading-[30px]"
                  for="input_5"
                  >Your email address</label
                >
                <div
                  class="formkit-inner h-[52px] relative"
                  data-auto-animate="true"
                >
                  <!----><!----><input
                    placeholder="example@email.com"
                    class="formkit-input border-2 outline-none bg-[#f9f6ff] transition-[box-shadow] bg-light w-full rounded-lg border-black/10 focus-within:border-primary focus-within:border-[1.5px] h-full px-4 border-none box-border text-lg"
                    type="email"
                    name="email"
                    value=""
                    id="input_5"
                  /><!--[--><!----><!--]--><!---->
                </div>
              </div>
              <!----><!---->
            </div>
          </div>
          <!---->
          <div class="px-[25px] md:px-[27px]">
            <div
              class="formkit-outer mb-[27px] md:mb-[37px]"
              data-type="gateway"
              data-multiple="true"
              data-auto-animate="true"
              style="position: relative"
            >
              <div class="grid gap-1 formkit-wrapper">
                <label
                  class="formkit-label block font-medium text-darker/60 text-lg text-dark leading-[30px]"
                  for="input_6"
                  >Select your preferred payment method</label
                >
                <div
                  class="formkit-inner"
                  data-auto-animate="true"
                  style="position: relative"
                >
                  <!----><!--[-->
                  <div
                    class="grid gap-[13px]"
                    id="headlessui-radiogroup-4562840"
                    role="radiogroup"
                  >
                    <!--[-->
                    <div
                      id="headlessui-radiogroup-option-4562841"
                      role="radio"
                      aria-checked="true"
                      tabindex="0"
                      data-headlessui-state="checked"
                      class="border-0 group"
                    >
                      <div
                        @click="select(1)"
                        :class="{
                          'border-primary': selectedPaymentMethod === 1,
                        }"
                        class="transition-[box-shadow] rounded-lg grid grid-cols-[max-content_1fr] justify-start md:grid-cols-[max-content_max-content_1fr] items-center gap-[5px_11px] pt-[10px] pb-[11px] px-[12px] rounded-base border-2 border-black/10 ui-checked:border-primary md:pt-[13px] md:pb-[12px] md:pr-[20px] md:pl-[12px] cursor-pointer group-focus-visible:!border-[2.5px]"
                        style="transform: scale(1) translateZ(0px)"
                      >
                        <div
                          class="transition-[border] h-[25px] w-[25px] border-[1.5px] p-[2.5px] border-black/10 rounded-full ui-checked:border-primary"
                        >
                          <div
                            :class="{
                              'opacity-100': selectedPaymentMethod === 1,
                              'opacity-0': selectedPaymentMethod !== 1,
                            }"
                            class="transition-[opacity,_transform] bg-primary w-full h-full rounded-[inherit] scale-75 ui-checked:scale-100 ui-checked:opacity-100"
                          ></div>
                        </div>
                        <p class="leading-[30px] text-dark">
                          Credit or Debit Card
                        </p>
                        <img
                          src="https://iptvfiesta.com/_ipx/s_203x30/img/checkout/gateway/Credit%20Card.svg"
                          onerror="this.setAttribute('data-error', 1)"
                          width="203"
                          height="30"
                          alt="Gateway"
                          data-nuxt-img=""
                          class="[grid-column:_2/3] md:[grid-column:unset] md:justify-self-end"
                        />
                      </div>
                    </div>
                    <div
                      id="headlessui-radiogroup-option-4562842"
                      role="radio"
                      aria-checked="false"
                      tabindex="-1"
                      data-headlessui-state=""
                      class="border-0 group"
                    >
                      <div
                        @click="select(2)"
                        :class="{
                          'border-primary': selectedPaymentMethod === 2,
                        }"
                        class="transition-[box-shadow] rounded-lg grid grid-cols-[max-content_1fr] justify-start md:grid-cols-[max-content_max-content_1fr] items-center gap-[5px_11px] pt-[10px] pb-[11px] px-[12px] rounded-base border-2 border-black/10 ui-checked:border-primary md:pt-[13px] md:pb-[12px] md:pr-[20px] md:pl-[12px] cursor-pointer group-focus-visible:!border-[2.5px]"
                        style="transform: scale(1) translateZ(0px)"
                      >
                        <div
                          class="transition-[border] h-[25px] w-[25px] border-[1.5px] p-[2.5px] border-black/10 rounded-full ui-checked:border-primary"
                        >
                          <div
                            :class="{
                              'opacity-100': selectedPaymentMethod === 2,
                              'opacity-0': selectedPaymentMethod !== 2,
                            }"
                            class="transition-[opacity,_transform] bg-primary w-full h-full rounded-[inherit] scale-75 ui-checked:scale-100 ui-checked:opacity-100"
                          ></div>
                        </div>
                        <p class="leading-[30px] text-dark">
                          Crypto Currencies
                        </p>
                        <img
                          src="https://iptvfiesta.com/_ipx/s_203x30/img/checkout/gateway/Cryptocurrency.svg"
                          onerror="this.setAttribute('data-error', 1)"
                          width="203"
                          height="30"
                          alt="Gateway"
                          data-nuxt-img=""
                          class="[grid-column:_2/3] md:[grid-column:unset] md:justify-self-end"
                        />
                      </div>
                    </div>
                    <!--]-->
                  </div>
                  <!--]--><!---->
                </div>
              </div>
              <!----><!---->
            </div>
            <div class="grid justify-center w-full grid-cols-1">
              <div
                class="w-full formkit-outer"
                data-family="button"
                data-type="submit"
                data-empty="true"
                data-auto-animate="true"
                style="position: relative"
              >
                <!---->
                <div class="formkit-wrapper">
                  <button
                    class="formkit-input transition-[box-shadow,_transform,_opacity] bg-primary text-white font-medium px-8 py-3.5 rounded-full shadow-btn focus-visible:shadow-none hover:shadow-none focus-visible:[&amp;:not(:disabled)]:scale-[.98] active:[&amp;:not(:disabled)]:scale-[.98] focus-visible:border-2 focus-visible:border focus-visible:border-offset-4 border-primary disabled:opacity-80 transition-transform rounded-lg text-xl leading-normal mb-[23px] w-full active:scale-[.99]"
                    type="submit"
                    name="submit_2"
                    id="input_7"
                  >
                    <!----><!----><!--[-->Continue
                    <img
                      src="https://iptvfiesta.com/_ipx/s_24x24/img/next.svg"
                      onerror="this.setAttribute('data-error', 1)"
                      width="24"
                      height="24"
                      alt="Next Icon"
                      data-nuxt-img=""
                      class="relative float-right top-1"
                    /><!--]--><!----><!---->
                  </button>
                </div>
                <!---->
              </div>
              <div class="md:flex gap-5 mb-[15px]">
                <p
                  class="flex items-center justify-center gap-2.5 font-medium mb-[10px]"
                >
                  <img
                    src="https://iptvfiesta.com/img/secure.svg"
                    alt="secure icon"
                  />
                  Secure SSL Encrypted Payment
                </p>
                <p
                  class="flex items-center justify-center gap-2.5 font-medium mb-[13px]"
                >
                  <img
                    src="https://iptvfiesta.com/img/money-back.svg"
                    alt="money back icon"
                  />
                  7-day money-back guarantee
                </p>
              </div>
              <!--[--><!----><button
                @click="toggleStayUpdated"
                class="grid group gap-[10px] grid-flow-col text-left justify-start"
                id="headlessui-switch-4562843"
                role="switch"
                type="button"
                tabindex="0"
                aria-checked="false"
                data-headlessui-state=""
              >
                <div
                  :class="{
                    'bg-green': stayUpdated,
                  }"
                  class="relative flex items-center justify-center transition-[background,_border] border-[2px] w-[26px] h-[26px] border-black/10 rounded-[4px] mt-1 md:mt-0 group-focus-visible:border-primary"
                >
                  <div v-show="stayUpdated">
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
                <p class="opacity-70 text-dark">
                  Stay up-to-date with exclusive offers by subscribing to our
                  newsletter.
                </p>
                <!--]--></button
              ><!--]-->
            </div>
          </div>
          <!--]--><!----><!---->
        </form>
      </div>
      <div
        class="md:box bg-white border-2 rounded-xl h-max md:px-[19px] [grid-row:1] md:[grid-row:_unset]"
      >
        <div
          class="px-[27px] pt-[25px] pb-[21px] md:pt[30px] md:pr-0 md:pl-[6px] md:pb-6"
        >
          <form
            class="formkit-form"
            id="input_8"
            name="form_3"
            data-auto-animate="true"
            style="position: relative"
          >
            <!--[--><!---->
            <div
              class="grid grid-cols-[1fr_max-content] gap-[7px] h-[52px] md:gap-6"
            >
              <div
                class="grid"
                data-family="text"
                data-type="text"
                data-empty="true"
                data-auto-animate="true"
                style="position: relative"
              >
                <div class="grid gap-2 formkit-wrapper">
                  <!---->
                  <div
                    class="h-full formkit-inner"
                    data-auto-animate="true"
                    style="position: relative"
                  >
                    <!----><!----><input
                      placeholder="Discount code"
                      class="formkit-input bg-[#f9f6ff] outline-none transition-[box-shadow] bg-light w-full rounded-lg border border-1 border-black/10 focus-within:border-primary focus-within:border-[1.5px] h-full px-4 border-none box-border text-lg uppercase placeholder:[text-transform:_none]"
                      type="text"
                      name="discount"
                      id="input_9"
                    /><!----><!---->
                  </div>
                </div>
                <!----><!---->
              </div>
              <div
                class="formkit-outer"
                data-family="button"
                data-type="submit"
                data-empty="true"
                data-auto-animate="true"
                style="position: relative"
              >
                <!---->
                <div class="formkit-wrapper">
                  <button
                    class="formkit-input rounded-xl transition-[box-shadow,_transform,_opacity] bg-primary text-white font-medium py-3.5 flex focus-visible:shadow-none hover:shadow-none focus-visible:[&amp;:not(:disabled)]:scale-[.98] active:[&amp;:not(:disabled)]:scale-[.98] focus-visible:border-2 focus-visible:border focus-visible:border-offset-4 border-primary disabled:opacity-80 transition-transform rounded-base px-6 items-center"
                    type="submit"
                    name="submit_4"
                    id="input_10"
                  >
                    <!----><!----><!--[--><!---->
                    Apply<!--]--><!----><!---->
                  </button>
                </div>
                <!---->
              </div>
            </div>
            <!--]--><!----><!---->
          </form>
        </div>
        <div
          class="text-dark px-[18px] pb-[21px] md:pb-7 md:pt-[14px] md:border-t md:border-dark/10 md:px-0 md:pl-[9px]"
        >
          <p class="font-medium text-[22px] mb-[18px] leading-[24px]">
            <!--[-->Order Summary<!--]-->
          </p>
          <div class="grid gap-[14px]">
            <div
              class="grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]"
            >
              <p>1 Month Pass</p>
              <p>€9.99</p>
            </div>
            <!--[--><!--]-->
          </div>
          <ul class="grid gap-[11px] opacity-70 leading-[20px] mt-[14px]">
            <!--[-->
            <li
              class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
            >
              Access over 9,000 channels
            </li>
            <li
              class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
            >
              Thousands of VODs available
            </li>
            <li
              class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
            >
              Enjoy premium HD channels 24/7
            </li>
            <li
              class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
            >
              Automatic channel updates
            </li>
            <li
              class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
            >
              Compatible with all your devices
            </li>
            <li
              class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
            >
              Works seamlessly with all IPTV apps
            </li>
            <!--]-->
          </ul>
          <div style="--move-duration: 300ms"></div>
          <!---->
        </div>
        <div
          class="px-[18px] pt-[21px] pb-[25px] border-t border-b border-dark/10 md:border-b-0 md:pt-[34px] md:px-0 md:pl-[9px] md:pb-[35px]"
        >
          <div
            class="grid grid-flow-col justify-between font-medium text-[22px] leading-[24px] text-dark"
          >
            <p>Total</p>
            <p>€9.99</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const selectedPaymentMethod = ref(1);
const stayUpdated = ref(false);
const toggleStayUpdated = () => {
  stayUpdated.value = !stayUpdated.value;
};

const select = (id) => {
  selectedPaymentMethod.value = id;
};
</script>
