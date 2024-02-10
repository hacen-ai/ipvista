<template>
  <section id="reviews" class="text-white bg-primary">
    <div class="pt-[41px] pb-[51px] px-0">
      <p
        class="font-black text-[26px] text-center mb-[18px] px-[22px] max-w-[677px] mx-auto"
      >
        {{ $t("divfivTitle") }}
      </p>
      <p class="text-xl opacity-70 text-center px-[22px] max-w-[677px] mx-auto">
        {{ $t("divfivDesc") }}
      </p>
      <div
        class="py-8"
        id="splide01"
        role="region"
        aria-roledescription="carousel"
      >
        <!--[-->
        <Splide
          onMoved="onMoved"
          :options="{
            rewind: true,
            perPage: 4,

            padding: 10,
            autoplay: true,
            navigation: false,
            gap: 20,
            arrows: false,
            drag: true,
            focus: center,
            pagination: false,
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
              1440: {
                perPage: 5,
              },
            },
          }"
        >
          <SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div>
          </SplideSlide>
          <SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div> </SplideSlide
          ><SplideSlide class="bg-white">
            <div
              class="bg-white text-black p-[34.5px_20px] grid gap-2 h-full shadow-review"
            >
              <div
                class="flex items-center justify-between w-full text-xs font-light"
              >
                <div class="flex gap-[2px]">
                  <!--[--><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><img
                    src="https://iptvfiesta.com/_ipx/s_25x24/img/star.svg"
                    onerror="this.setAttribute('data-error', 1)"
                    width="25"
                    height="24"
                    alt="star"
                    data-nuxt-img=""
                    class=""
                  /><!--]-->
                </div>
                3 months ago
              </div>
              <p class="text-lg font-medium leading-[26px]">
                Reliable service for football fans
              </p>
              <p class="text-sm font-light leading-[22px] line-clamp-2">
                IPTVFIesta is the most reliable service for watching football
                matches. They offer great coverage of the Premier League and La
                Liga, and the streams are always reliable. I have never missed a
                game. Highly recommend it!
              </p>
              <div class="w-[60px] h-[1px] bg-[#d9d9d9] block"></div>
              <p class="text-sm font-bold leading-[22px]">David S.</p>
            </div>
          </SplideSlide>
        </Splide>
        <!--]-->
      </div>
      <div
        class="px-[22px] flex gap-[19px] items-center justify-center mb-5 text-lg"
      >
        <p class="font-bold">{{ $t("divfivpO") }}</p>
        <p>{{ $t("divfivpTw") }}</p>
        <img
          src="https://iptvfiesta.com/_ipx/s_106x39/img/website/trustpilot.svg"
          onerror="this.setAttribute('data-error', 1)"
          width="106"
          height="39"
          alt="Trustpilot"
          data-nuxt-img=""
          lazy=""
        />
      </div>
      <div
        class="grid justify-items-center gap-[15px] px-[22px] grid-cols-1 justify-center"
      >
        <a
          href="/checkout"
          class="transition-[outline,_transform] bg-green py-[19px] px-8 rounded-full font-bold text-lg shadow-btn2 text-center focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-4 outline-green grid items-center focus-visible:scale-[1.02] hover:scale-[1.02] w-[350px] max-w-full mx-auto ring-offset-primary"
          >{{ $t("divfivpBtt") }}</a
        >
        <p class="font-medium text-center text-white opacity-70">
          {{ $t("divfivpPen") }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
</script>
