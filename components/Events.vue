<template>
  <section
    id="packages"
    class="bg-black min-h-[673px] grid grid-rows-1 relative overflow-hidden"
  >
    <!--[--><!----><!--[-->
    <div
      role="tablist"
      aria-orientation="horizontal"
      class="container mx-auto max-w-[1162px] absolute top-0 left-1/2 -translate-x-1/2 flex gap-[37px] items-center pl-[31px] pr-[21px] pt-[44px] z-10 md:gap-[49px] md:pt-[115px]"
    >
      <!--[--><button
        id="headlessui-tabs-tab-4548161"
        @click="changeTab(1)"
        role="tab"
        type="button"
        aria-selected="true"
        :class="{ 'opacity-90': selected === 1, 'border-b-4': selected === 1 }"
        tabindex="0"
        data-headlessui-state="selected"
        class="py-1 font-bold text-white transition-opacity opacity-50 rounded-base hover:opacity-80 outline-offset-4 line"
        aria-controls="headlessui-tabs-panel-4"
      >
        Live Sports</button
      ><button
        @click="changeTab(2)"
        id="headlessui-tabs-tab-4548162"
        role="tab"
        type="button"
        aria-selected="false"
        :class="{ 'opacity-90': selected === 2, 'border-b-4': selected === 2 }"
        tabindex="-1"
        data-headlessui-state=""
        class="py-1 font-bold text-white transition-opacity opacity-50 rounded-base hover:opacity-80 outline-offset-4 line"
        aria-controls="headlessui-tabs-panel-5"
      >
        VOD</button
      ><button
        @click="changeTab(3)"
        id="headlessui-tabs-tab-4548163"
        role="tab"
        type="button"
        aria-selected="false"
        tabindex="-1"
        data-headlessui-state=""
        :class="{ 'opacity-90': selected === 3, 'border-b-4': selected === 3 }"
        class="py-2 font-bold text-white transition-opacity opacity-50 rounded-base hover:opacity-80 outline-offset-4 line"
        aria-controls="headlessui-tabs-panel-6"
      >
        Biggest Events</button
      ><!--]-->
    </div>
    <div class="h-full bg-black">
      <div class="h-full" style="--move-duration: 300ms">
        <div
          class="text-white xl:bg-[100%_auto] h-full relative shadow-film"
          id="headlessui-tabs-panel-4"
          role="tabpanel"
          aria-labelledby="headlessui-tabs-tab-4548161"
          tabindex="0"
          style=""
        >
          <img
            src="https://iptvfiesta.com/_ipx/w_2560/img/website/live-sports.webp"
            alt="Background Live Sports"
            data-nuxt-img=""
            class="absolute object-cover min-w-full min-h-full -z-10"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          />
          <div
            v-if="selected === 1"
            class="container mx-auto max-w-[1162px] p-[141px_21px_40px_31px] md:grid grid-cols-[49fr_53fr] gap-[83px] md:pt-[207px] md:pb-[74px] items-center"
          >
            <div class="md:pt-[5px]">
              <p
                class="text-[26px] max-w-[490px] font-black relative z-10 mb-[52px] leading-[40px] md:mb-[22px]"
              >
                Never Miss a Moment: Stream Live Sports with Ease
              </p>
              <p
                class="relative max-w-[490px] z-10 text-xl opacity-70 mb-[38px] md:mb-10"
              >
                Catch your favorite games at home or on the go. Stream live
                games from top European football championships: Premier League,
                La Liga, Serie A, and Bundesliga, as well as major college and
                pro leagues in the US including the NCAA®, NBA, NHL, and NFL.
              </p>
              <img
                src="https://iptvfiesta.com/_ipx/s_395x49/img/website/live-sports-channels.webp"
                width="395"
                height="49"
                alt="Channels"
                data-nuxt-img=""
                class="hidden md:block relative z-10 w-[395px]"
                lazy=""
              />
            </div>
            <div class="relative">
              <img
                src="https://iptvfiesta.com/_ipx/s_535x336/img/website/Packages/Live_Sports/TV.webp"
                width="535"
                height="336"
                alt="TV with channels"
                loading="lazy"
                data-nuxt-img=""
                class="relative z-10"
                style="transform: translateZ(0px)"
              />
              <div
                class="absolute grid gap-1 z-30 left-[18px] bottom-[-28px] w-[49%]"
              >
                <img
                  src="https://iptvfiesta.com/_ipx/s_248x33/img/website/Packages/Live_Sports/chan1.webp"
                  width="248"
                  height="33"
                  alt="Channel"
                  loading="lazy"
                  data-nuxt-img=""
                  class="w-full"
                  delay="300"
                  style="transform: scale(1) translateZ(0px); opacity: 1"
                /><img
                  src="https://iptvfiesta.com/_ipx/s_248x33/img/website/Packages/Live_Sports/chan2.webp"
                  width="248"
                  height="33"
                  alt="Channel"
                  loading="lazy"
                  data-nuxt-img=""
                  class="w-full"
                  delay="400"
                  style="transform: scale(1) translateZ(0px); opacity: 1"
                /><img
                  src="https://iptvfiesta.com/_ipx/s_248x33/img/website/Packages/Live_Sports/chan3.webp"
                  width="248"
                  height="33"
                  alt="Channel"
                  loading="lazy"
                  data-nuxt-img=""
                  class="w-full"
                  delay="500"
                  style="transform: scale(1) translateZ(0px); opacity: 1"
                /><img
                  src="https://iptvfiesta.com/_ipx/s_248x33/img/website/Packages/Live_Sports/chan4.webp"
                  width="248"
                  height="33"
                  alt="Channel"
                  loading="lazy"
                  data-nuxt-img=""
                  class="w-full"
                  delay="600"
                  style="transform: scale(1) translateZ(0px); opacity: 0.8"
                /><img
                  src="https://iptvfiesta.com/_ipx/s_248x33/img/website/Packages/Live_Sports/chan5.webp"
                  width="248"
                  height="33"
                  alt="Channel"
                  loading="lazy"
                  class="w-full"
                  delay="700"
                  style="transform: scale(1) translateZ(0px); opacity: 0.6"
                /><img
                  src="https://iptvfiesta.com/_ipx/s_248x33/img/website/Packages/Live_Sports/chan6.webp"
                  width="248"
                  height="33"
                  alt="Channel"
                  loading="lazy"
                  data-nuxt-img=""
                  class="w-full"
                  delay="800"
                  style="transform: scale(1) translateZ(0px); opacity: 0.3"
                />
              </div>
              <img
                src="https://iptvfiesta.com/_ipx/s_147x266/img/website/Packages/Live_Sports/phone.webp"
                width="147"
                height="266"
                alt="Phone"
                loading="lazy"
                data-nuxt-img=""
                class="absolute z-30 bottom-[-50px] right-[-1px] w-[28%]"
                style="transform: translateZ(0px)"
              />
            </div>
          </div>
          <div
            v-if="selected === 2"
            class="container mx-auto max-w-[1162px] p-[141px_21px_40px_31px] md:grid grid-cols-[54fr_42fr] gap-[133px] md:pt-[75px] md:pb-[34px] items-center"
          >
            <div class="md:pt-[72px]">
              <p
                class="text-[26px] font-black relative z-10 mb-[52px] leading-[40px] md:mb-[12px] max-w-[515px]"
              >
                Stream Unlimited Movies and TV Shows On-Demand
              </p>
              <p
                class="relative z-10 text-xl opacity-70 mb-[38px] md:mb-[30px] max-w-[515px]"
              >
                Access our vast library of movies and TV shows from top studios
                like Warner Bros.®, Disney®, Paramount®, and more, all available
                to stream on-demand at your convenience.
              </p>
              <img
                src="https://iptvfiesta.com/_ipx/s_395x52/img/website/vod-channels.webp"
                width="395"
                height="52"
                alt="Channels"
                data-nuxt-img=""
                class="hidden md:block relative z-10 w-[395px]"
                lazy=""
              />
            </div>
            <div
              class="grid gap-[3.7%] grid-cols-3 relative z-20 justify-center justify-items-center"
            >
              <div
                class="grid gap-[17px]"
                style="
                  transform: translate3d(0px, 0px, 0px) scale(1);
                  opacity: 1;
                "
              >
                <img
                  src="https://iptvfiesta.com/_ipx/s_133x177/img/website/Packages/Vod/movie-1.webp"
                  width="133"
                  height="177"
                  alt="Movie"
                  loading="lazy"
                  data-nuxt-img=""
                /><img
                  src="https://iptvfiesta.com/_ipx/s_133x177/img/website/Packages/Vod/movie-2.webp"
                  width="133"
                  height="177"
                  alt="Movie"
                  loading="lazy"
                  data-nuxt-img=""
                /><img
                  src="https://iptvfiesta.com/_ipx/s_133x177/img/website/Packages/Vod/movie-3.webp"
                  width="133"
                  height="177"
                  alt="Movie"
                  loading="lazy"
                  data-nuxt-img=""
                />
              </div>
              <div
                class="grid gap-[17px] content-center"
                style="transform: scale(1) translateZ(0px); opacity: 1"
              >
                <img
                  src="https://iptvfiesta.com/_ipx/s_133x177/img/website/Packages/Vod/movie-4.webp"
                  width="133"
                  height="177"
                  alt="Movie"
                  loading="lazy"
                  data-nuxt-img=""
                /><img
                  src="https://iptvfiesta.com/_ipx/s_133x177/img/website/Packages/Vod/movie-5.webp"
                  width="133"
                  height="177"
                  alt="Movie"
                  loading="lazy"
                  data-nuxt-img=""
                />
              </div>
              <div
                class="grid gap-[17px]"
                style="
                  transform: translate3d(0px, 0px, 0px) scale(1);
                  opacity: 1;
                "
              >
                <img
                  src="https://iptvfiesta.com/_ipx/s_133x177/img/website/Packages/Vod/movie-6.webp"
                  width="133"
                  height="177"
                  alt="Movie"
                  loading="lazy"
                  data-nuxt-img=""
                /><img
                  src="https://iptvfiesta.com/_ipx/s_133x177/img/website/Packages/Vod/movie-7.webp"
                  width="133"
                  height="177"
                  alt="Movie"
                  loading="lazy"
                  data-nuxt-img=""
                /><img
                  src="https://iptvfiesta.com/_ipx/s_133x177/img/website/Packages/Vod/movie-8.webp"
                  width="133"
                  height="177"
                  alt="Movie"
                  loading="lazy"
                  data-nuxt-img=""
                />
              </div>
            </div>
          </div>
          <div
            v-if="selected === 3"
            class="container mx-auto max-w-[1162px] p-[141px_21px_40px_31px] md:grid grid-cols-[51fr_53fr] gap-[56px] md:pt-[212px] md:pb-[104px] items-center"
          >
            <div>
              <p
                class="text-[26px] font-black relative z-10 mb-[52px] leading-[40px] max-w-[515px] md:mb-[43p]"
              >
                Get Front-Row Access to the Biggest Entertainment Events
              </p>
              <p
                class="relative z-10 text-xl opacity-70 mb-[38px] max-w-[515px] md:mb-[43p]"
              >
                Spectacular, can't-miss moments like the Olympics, Grammys®,
                Oscars®, Emmys®, and other must-see events from around the
                world.
              </p>
              <img
                src="https://iptvfiesta.com/_ipx/s_395x35/img/website/events-channels.webp"
                width="395"
                height="35"
                alt="Channels"
                loading="lazy"
                data-nuxt-img=""
                class="hidden md:block relative z-10 w-[395px]"
              />
            </div>
            <img
              src="https://iptvfiesta.com/_ipx/s_535x350/img/website/events-tv.webp"
              width="535"
              height="350"
              alt="TV with channels"
              loading="lazy"
              data-nuxt-img=""
              class="relative z-10"
              style="transform: translate3d(0px, 0px, 0px); opacity: 1"
            />
          </div>
        </div>
        <span
          id="headlessui-tabs-panel-5"
          role="tabpanel"
          aria-labelledby="headlessui-tabs-tab-4548162"
          tabindex="-1"
          class=""
          style="
            position: fixed;
            height: 0px;
            padding: 0px;
            overflow: hidden;
            clip: rect(0px, 0px, 0px, 0px);
            white-space: nowrap;
            border-width: 0px;
          "
        ></span
        ><span
          id="headlessui-tabs-panel-6"
          role="tabpanel"
          aria-labelledby="headlessui-tabs-tab-4548163"
          tabindex="-1"
          class=""
          style="
            position: fixed;
            height: 0px;
            padding: 0px;
            overflow: hidden;
            clip: rect(0px, 0px, 0px, 0px);
            white-space: nowrap;
            border-width: 0px;
          "
        ></span>
      </div>
    </div>
    <!--]--><!--]-->
  </section>
</template>
<script setup>
import { ref, onMounted } from "vue";
const selected = ref(1);

const changeTab = () => {
  selected.value = (selected.value % 3) + 1; // Ensure circular behavior between 1 and 3
};

onMounted(() => {
  // Change tab every 10 seconds
  const interval = setInterval(changeTab, 5000);

  // Clear the interval when component is unmounted to prevent memory leaks
  return () => clearInterval(interval);
});
</script>
