function header() {
  return `
  <header class="hidden w-fit sm:flex">
  <!-- navbar -->
  <nav
    class="flex h-screen justify-between bg-primary text-white sm:p-6 xl:p-12"
  >
    <div class="flex flex-col justify-between">
      <div class="flex flex-col space-y-12">
        <!-- logo -->
        <div>
          <img class="cursor-pointer" 
          onclick="location.href='/index.html';" 
          src="/public/assets/icons/Logo.svg" alt="logo" />
        </div>
        <!-- menu-items -->
        <div class="flex flex-col uppercase sm:text-xl xl:text-2xl">
          <a class="w-fit sm:py-1 md:py-1.5 lg:py-2.5" href="/index.html">home</a>
          <a class="w-fit sm:py-1 md:py-1.5 lg:py-2.5" href="/src/pages/about.html">about</a>
          <a class="w-fit sm:py-1 md:py-1.5 lg:py-2.5" href="/src/pages/services.html"
            >services</a
          >
          <a class="w-fit sm:py-1 md:py-1.5 lg:py-2.5" href="/src/pages/works.html">works</a>
          <a class="w-fit sm:py-1 md:py-1.5 lg:py-2.5" href="/src/pages/blogs.html">blogs</a>
          <a class="w-fit sm:py-1 md:py-1.5 lg:py-2.5" href="/src/pages/contact.html"
            >contact</a
          >
        </div>
      </div>
      <div class="flex flex-col space-y-8">
        <!-- social-media -->
        <div class="flex flex-col">
          <div
            class="flex items-center justify-center rounded-full bg-white sm:h-8 sm:w-8 lg:h-10 lg:w-10"
          >
            <img src="/public/assets/icons/behance.svg" alt="behance" />
          </div>
          <div
            class="my-3 flex items-center justify-center rounded-full bg-white sm:h-8 sm:w-8 lg:h-10 lg:w-10"
          >
            <img src="/public/assets/icons/dribbble.svg" alt="dribbble" />
          </div>
          <div
            class="flex items-center justify-center rounded-full bg-white sm:h-8 sm:w-8 lg:h-10 lg:w-10"
          >
            <img src="/public/assets/icons/instagram.svg" alt="instagram" />
          </div>
        </div>
        <!-- copyright -->
        <div
          class="leading-snug text-white sm:w-36 sm:text-sm lg:w-48 lg:text-base"
        >
          <p class="">Copyright ©2023 Jacob Jones. All right reserved.</p>
        </div>
      </div>
    </div>
  </nav>
</header>
  `;
}
