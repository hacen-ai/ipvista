<template>
  <nav class="sticky top-0 z-50 bg-white border-b border-dark/10">
    <div
      class="[transition:_padding_.3s] container flex flex-wrap items-center max-w-[1240px] px-[20px] sm:px-4 py-[22px] md:py-[19px] justify-between mx-auto"
    >
      <a
        href="/"
        class="router-link-active router-link-exact-active"
        aria-current="page"
        ><img
          src="https://iptvfiesta.com/_ipx/s_354x70/img/logo.svg"
          onerror="this.setAttribute('data-error', 1)"
          width="177"
          height="35"
          alt="IPTV Fiesta Logo"
          data-nuxt-img=""
          srcset="
            https://iptvfiesta.com/_ipx/s_354x70/img/logo.svg 1x,
            https://iptvfiesta.com/_ipx/s_354x70/img/logo.svg 2x
          "
          class="object-left h-6 mr-3 sm:h-9" /></a
      ><button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-[6px] text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 ring-pink"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span
        ><svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
            class="fill-pink"
          ></path>
        </svg>
      </button>
      <div
        class="w-full md:w-auto grid grid-cols-1 gap-[25px] justify-start pt-5 mt-5 md:grid-flow-col items-center md:pt-0 md:mt-0 divide-y md:divide-y-0 md:divide-x divide-dark/10 hidden md:grid"
        id="navbar-default"
      >
        <ul class="grid gap-[35px] md:grid-flow-col">
          <!--[-->
          <li
            class="transition-transform focus-visible:scale-105 w-max hover:scale-105"
          >
            <a
              href="/"
              class="transition-[color] text-dark leading-[20px] focus-visible:text-primary hover:text-primary"
              >Channels List</a
            >
          </li>
          <li
            class="transition-transform focus-visible:scale-105 w-max hover:scale-105"
          >
            <a
              href="/"
              class="transition-[color] text-dark leading-[20px] focus-visible:text-primary hover:text-primary"
              >Apps</a
            >
          </li>
          <!--]-->
        </ul>
        <div
          class="grid gap-[35px] md:grid-flow-col pt-[25px] md:pt-0 md:pl-[25px] items-center"
        >
          <a
            href="/"
            class="transition-[color,_transform] focus-visible:scale-105 w-max hover:scale-105 text-dark leading-[20px] focus-visible:text-primary hover:text-primary"
            >Login</a
          >
          <div
            class="grid justify-items-center gap-[15px] !justify-items-start md:!justify-items-center"
          >
            <a
              href=""
              class="transition-[outline,_transform] bg-green py-[19px] px-8 rounded-full font-bold text-lg shadow-btn2 text-center focus-visible:outline-2 focus-visible:outline focus-visible:outline-offset-4 outline-green grid items-center focus-visible:scale-[1.02] hover:scale-[1.02] pt-[11px] pb-3 bg-pink text-white shadow-[0_4px_8px_0_rgba(239,24,147,.15)] outline-pink"
              >Get your 70% OFF</a
            ><!---->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
