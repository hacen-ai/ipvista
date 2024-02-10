<template>
  <Header />
  <div class="bg-[#f9f6ff]">
    <div
      class="container mx-auto xl:max-w-[1150px] px-[20px] pt-[38px] overflow-x-hidden"
    >
      <!-- 1st -->
      <section
        id="products"
        class="[counter-increment:_checkout-counter] grid gap-[38px] pb-[46px] md:pb-[39px]"
      >
        <p
          class="flex items-center gap-3 text-dark text-2xl font-medium before:[content:_counter(checkout-counter)] before:w-[42px] before:h-[42px] before:rounded-full before:bg-pink before:flex before:items-center before:justify-center before:text-white before:border before:border-black/10 before:[box-shadow:0_2px_2px_0_rgba(0,0,0,.06)] before:aspect-square"
        >
          {{ $t("divthbttdivP") }}
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
                @click="setSelected(1)"
                :class="{ 'border-green': planSelected === 1 }"
                class="relative transition-[box-shadow] rounded-[inherit] border-4 bg-white cursor-pointer pt-10 pb-[15px] px-[20px] h-full text-center grid content-between ui-checked:border-4 ui-checked:border-green ui-checked:shadow-advanced outline-none group-focus-visible:border-[6px] z-0"
                style="transform: scale(1) translateZ(0px)"
              >
                <!---->
                <p class="font-bold text-[30px] leading-[24px] text-webDark">
                  {{ $t("divthbttdivBoxOp") }}
                </p>
                <p
                  class="font-bold text-[46px] leading-[24px] text-webDarker pt-[9px] grid gap-[15px]"
                >
                  {{ $t("divthbttdivBoxOpTw") }}
                  <!---->
                </p>
                <p class="text-sm text-webDark/70">
                  {{ $t("divthbttdivBoxOpTh") }}
                </p>
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
                :class="{ 'border-green': planSelected === 2 }"
                @click="setSelected(2)"
                class="relative transition-[box-shadow] rounded-[inherit] border-4 bg-white cursor-pointer pt-10 pb-[15px] px-[20px] h-full text-center grid content-between ui-checked:border-4 ui-checked:border-green ui-checked:shadow-advanced outline-none group-focus-visible:border-[6px] z-0"
                style="transform: scale(1) translateZ(0px)"
              >
                <div
                  :class="{
                    'border-green': planSelected === 2,
                    'bg-white': planSelected !== 2,
                    'bg-green': planSelected === 2,
                    'text-white': planSelected === 2,
                  }"
                  class="absolute shadow border transition-[box-shadow,_color,_background] box left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full py-[6px] w-[174px] text-lg font-medium text-dark ui-checked:bg-green ui-checked:text-white ui-checked:border-0"
                >
                  {{ $t("divthbttdivBoxTwpO") }}
                </div>
                <p class="font-bold text-[30px] leading-[24px] text-webDark">
                  {{ $t("divthbttdivBoxTwpTw") }}
                </p>
                <p
                  class="font-bold text-[46px] leading-[24px] text-webDarker pt-[9px] grid gap-[15px]"
                >
                  {{ $t("divthbttdivBoxTwpTh") }}
                  <span class="block text-base font-medium text-dark/50">{{
                    $t("divthbttdivBoxTwpfo")
                  }}</span>
                </p>
                <p class="text-sm text-webDark/70">
                  {{ $t("divthbttdivBoxTwpfi") }}
                </p>
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
                @click="setSelected(3)"
                :class="{ 'border-green': planSelected === 3 }"
                class="relative transition-[box-shadow] rounded-[inherit] border-4 bg-white cursor-pointer pt-10 pb-[15px] px-[20px] h-full text-center grid content-between ui-checked:border-4 ui-checked:border-green ui-checked:shadow-advanced outline-none group-focus-visible:border-[6px] z-0"
                style="transform: scale(1) translateZ(0px)"
              >
                <div
                  :class="{
                    'border-green': planSelected === 3,
                    'bg-white': planSelected !== 3,
                    'bg-green': planSelected === 3,
                    'text-white': planSelected === 3,
                  }"
                  class="absolute shadow border transition-[box-shadow,_color,_background] box left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full py-[6px] w-[174px] text-lg font-medium text-dark ui-checked:bg-green ui-checked:text-white ui-checked:border-0"
                >
                  {{ $t("divthbttdivBoxThpO") }}
                </div>
                <p class="font-bold text-[30px] leading-[24px] text-webDark">
                  {{ $t("divthbttdivBoxThpTw") }}
                </p>
                <p
                  class="font-bold text-[46px] leading-[24px] text-webDarker pt-[9px] grid gap-[15px]"
                >
                  {{ $t("divthbttdivBoxThpTh") }}
                  <span class="block text-base font-medium text-dark/50">{{
                    $t("divthbttdivBoxThpfo")
                  }}</span>
                </p>
                <p class="text-sm text-webDark/70">
                  {{ $t("divthbttdivBoxThpfi") }}
                </p>
              </div>
            </div>
          </div>
          <!--]-->
        </div>
        <!--]-->
      </section>
      <!-- 2nd -->
      <section
        id="configs"
        class="[counter-increment:_checkout-counter] grid gap-7 pb-[36px] md:pb-[48px]"
      >
        <p
          class="flex items-center gap-3 text-dark text-2xl font-medium before:[content:_counter(checkout-counter)] before:w-[42px] before:h-[42px] before:rounded-full before:bg-pink before:flex before:items-center before:justify-center before:text-white before:border before:border-black/10 before:[box-shadow:0_2px_2px_0_rgba(0,0,0,.06)] before:aspect-square"
        >
          {{ $t("divthbttdivtwP") }}
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
                  {{ $t("divthbttdivtwSpanOTitle") }}
                </p>
                <p class="text-webDark/70 leading-[20px]">
                  {{ $t("divthbttdivtwSpanODesc") }}
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
                  {{ $t("divthbttdivtwSpanTwTitle") }}
                </p>
                <p class="text-webDark/70 leading-[20px]">
                  {{ $t("divthbttdivtwSpanTwDesc") }}
                </p>
              </div>
            </div>
            <div
              class="pb-[9px] flex w-[236px] justify-between items-center mx-auto md:w-[222px] h-[60px]"
            >
              <p
                v-if="planSelected === 1"
                class="text-[20px] text-webDarker font-bold"
              >
                €0.99
              </p>
              <p
                v-if="planSelected === 2"
                class="text-[20px] text-webDarker font-bold"
              >
                €9.99
              </p>
              <p
                v-if="planSelected === 3"
                class="text-[20px] text-webDarker font-bold"
              >
                €3.99
              </p>

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
                <p class="font-medium text-dark/80 leading-[20px]">
                  {{ $t("divthbttdivtwSpanTwpThf") }}
                </p>
                <!--]--></button
              ><!--]-->
            </div>
          </div>
          <!--]-->
        </div>
      </section>
      <!-- 3rd -->
      <section
        id="summary"
        class="[counter-increment:_checkout-counter] grid gap-[38px] pb-[34px] md:pb-[64px]"
      >
        <p
          class="flex items-center gap-3 text-dark text-2xl font-medium before:[content:_counter(checkout-counter)] before:w-[42px] before:h-[42px] before:rounded-full before:bg-pink before:flex before:items-center before:justify-center before:text-white before:border before:border-black/10 before:[box-shadow:0_2px_2px_0_rgba(0,0,0,.06)] before:aspect-square"
        >
          {{ $t("divthbttdivthP") }}
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
                      >{{ $t("divthbttdivthboxOp") }}</label
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
                      >{{ $t("divthbttdivthboxOEp") }}</label
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
                              {{ $t("divthbttdivthboxOEptw") }}
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
                              {{ $t("divthbttdivthboxOEpth") }}
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
                        <!----><!----><!--[-->{{ $t("divthbttdivthboxOEpfo") }}
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
                      {{ $t("divthbttdivthboxOEpfi") }}
                    </p>
                    <p
                      class="flex items-center justify-center gap-2.5 font-medium mb-[13px]"
                    >
                      <img
                        src="https://iptvfiesta.com/img/money-back.svg"
                        alt="money back icon"
                      />
                      {{ $t("divthbttdivthboxOEpsi") }}
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
                      {{ $t("divthbttdivthboxOEpse") }}
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
                        {{ $t("divthbttdivthboxtwbtt")
                        }}<!--]--><!----><!---->
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
                <!--[-->{{ $t("divthbttdivthboxtwTittle")
                }}<!--]-->
              </p>
              <div class="grid gap-[14px]">
                <div
                  class="grid grid-flow-col justify-between font-medium text-lg opacity-70 leading-[24px]"
                >
                  <p v-if="planSelected === 1">1 Month Pass</p>
                  <p v-else-if="planSelected === 2">12 Month Pass</p>
                  <p v-else-if="planSelected === 3">3 Month Pass</p>
                  <p v-if="planSelected === 1">€9.99</p>
                  <p v-else-if="planSelected === 2">€{{ 3.99 * 12 }}</p>
                  <p v-else-if="planSelected === 3">€{{ 7.99 * 3 }}</p>
                </div>
                <!--[--><!--]-->
              </div>
              <ul class="grid gap-[11px] opacity-70 leading-[20px] mt-[14px]">
                <!--[-->
                <li
                  class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
                >
                  {{ $t("divthbttdivthboxtwaO") }}
                </li>
                <li
                  class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
                >
                  {{ $t("divthbttdivthboxtwatw") }}
                </li>
                <li
                  class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
                >
                  {{ $t("divthbttdivthboxtwath") }}
                </li>
                <li
                  class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
                >
                  {{ $t("divthbttdivthboxtwafo") }}
                </li>
                <li
                  class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
                >
                  {{ $t("divthbttdivthboxtwafi") }}
                </li>
                <li
                  class="relative pl-7 before:absolute before:inset-0 before:[background:url('https://iptvfiesta.com/img/checkout/check.svg')_no-repeat_center_left]"
                >
                  {{ $t("divthbttdivthboxtwasi") }}
                </li>
                <!--]-->
              </ul>
              <div style="--move-duration: 300ms"></div>
              <!---->
              <div
                v-if="proxyProtection"
                class="grid text-gray-500 py-6 grid-flow-col justify-between font-medium text-[18px] leading-[24px] text-dark"
              >
                <p>1 Proxy Protection</p>
                <p v-if="planSelected === 1">€0.99</p>
                <p v-else-if="planSelected === 2">€9.99</p>
                <p v-else-if="planSelected === 3">€3.99</p>

                <!-- <p v-if="planSelected === 1">1 Month Pass</p>
                  <p v-else-if="planSelected === 2">12 Month Pass</p>
                  <p v-else-if="planSelected === 3">3 Month Pass</p> -->
              </div>
            </div>
            <div
              class="px-[18px] pt-[21px] pb-[25px] border-t border-b border-dark/10 md:border-b-0 md:pt-[34px] md:px-0 md:pl-[9px] md:pb-[35px]"
            >
              <div
                v-if="planSelected === 1"
                class="grid grid-flow-col justify-between font-medium text-[22px] leading-[24px] text-dark"
              >
                <p>Total</p>
                <p>€{{ 9.99 + (proxyProtection ? 0.99 : 0) }}</p>
              </div>
              <div
                v-if="planSelected === 2"
                class="grid grid-flow-col justify-between font-medium text-[22px] leading-[24px] text-dark"
              >
                <p>{{ $t("divthbttdivthboxtwasii") }}</p>
                <p>
                  €{{ (3.99 * 12 + (proxyProtection ? 9.99 : 0)).toFixed(1) }}
                </p>
              </div>
              <div
                v-if="planSelected === 3"
                class="grid grid-flow-col justify-between font-medium text-[22px] leading-[24px] text-dark"
              >
                <p>Total</p>
                <p>€{{ 7.99 * 3 + (proxyProtection ? 3.99 : 0) }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import { ref } from "vue";
const planSelected = ref(1);

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

const selectedPaymentMethod = ref(1);
const stayUpdated = ref(false);
const toggleStayUpdated = () => {
  stayUpdated.value = !stayUpdated.value;
};

const select = (id) => {
  selectedPaymentMethod.value = id;
};
const setSelected = (index) => {
  planSelected.value = index;
  console.log(planSelected.value);
  localStorage.setItem("planSelected", planSelected.value);
};
</script>
