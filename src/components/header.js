function header() {
  return `
  <header class="hidden sticky top-0 w-fit md:flex">
  <!-- navbar -->
  <nav
    class="flex h-screen justify-between bg-primary text-white md:p-4 lg:p-6 xl:p-12"
  >
    <div class="flex flex-col justify-between">
      <article class="flex flex-col space-y-12">
        <!-- logo -->
        <section>
          <img class="cursor-pointer" 
          onclick="location.href='/index.html';" 
          src="/public/assets/icons/Logo.svg" alt="logo" />
        </section>
        <!-- menu-items -->
        <section class="flex flex-col uppercase md:text-xl xl:text-2xl">
          <a class="w-fit md:py-1.5 lg:py-2.5" href="/index.html">home</a>
          <a class="w-fit md:py-1.5 lg:py-2.5" href="/src/pages/about.html">about</a>
          <a class="w-fit md:py-1.5 lg:py-2.5" href="/src/pages/services.html"
            >services</a
          >
          <a class="w-fit md:py-1.5 lg:py-2.5" href="/src/pages/works.html">works</a>
          <a class="w-fit md:py-1.5 lg:py-2.5" href="/src/pages/blogs.html">blogs</a>
          <a class="w-fit md:py-1.5 lg:py-2.5" href="/src/pages/contact.html"
            >contact</a
          >
        </section>
      </article>
      <article class="flex flex-col space-y-8">
        <!-- social-media -->
        <section class="flex flex-col">
          <a href="#"
            class="flex items-center justify-center rounded-full bg-white md:h-8 md:w-8 lg:h-10 lg:w-10"
          >
            <img src="/public/assets/icons/behance.svg" alt="behance" />
          </a>
          <a href="#"
            class="my-3 flex items-center justify-center rounded-full bg-white md:h-8 md:w-8 lg:h-10 lg:w-10"
          >
            <img src="/public/assets/icons/dribbble.svg" alt="dribbble" />
          </a>
          <a href="#"
            class="flex items-center justify-center rounded-full bg-white md:h-8 md:w-8 lg:h-10 lg:w-10"
          >
            <img src="/public/assets/icons/instagram.svg" alt="instagram" />
          </a>
        </section>
        <!-- copyright -->
        <section
          class="leading-snug text-white md:w-36 md:text-sm lg:w-48 lg:text-base"
        >
          <p class="">Copyright ©2023 Jacob Jones. All right reserved.</p>
        </section>
      </article>
    </div>
  </nav>
</header>
  `;
}
