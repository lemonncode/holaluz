<template>
  <div
    class="
      bg-gradient-to-r
      from-indigo-300
      to-indigo-800
      h-28
      w-full-screen
      relative
    "
  >
    <div class="flex justify-center ml-5 p-10">
      <div class="flex-1 w-96">
        <nav class="flex flex-wrap items-center text-base justify-center ml">
          <a class="mr-5 hover:text-gray-900">
            <NuxtLink to="/">
              <h1
                class="
                  title-font
                  font-medium
                  text-2xl text-gray-800 text-right
                  mx-8
                "
              >
                <svg
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
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg></h1></NuxtLink
          ></a>
        </nav>
      </div>
      <div class="flex-1 w-96">
        <h1
          class="title-font font-medium text-2xl text-gray-800 text-right mx-8"
        >
          Dashboard - Hola Luz
        </h1>
      </div>
      <div class="flex-1 w-96">
        <div class="flex">
          <div
            class="
              bg-indigo-100
              opacity-75
              rounded-md
              mx-8
              h-10
              w-24
              relative
              border-2 border-indigo-700
              hover:ring-offset-2 hover:ring-2 hover:ring-indigo-800
              shadow-lg shadow-indigo-500/40
              place-self-end
              flex justify-center
            "
          >
            <div class="self-center">
              <p class="text-slate-800">login</p>
            </div>
          </div>
          <div
            class="
              bg-indigo-100
              opacity-75
              rounded-md
              mx-8
              h-10
              w-24
              relative
              border-2 border-indigo-700
              hover:ring-offset-2 hover:ring-2 hover:ring-indigo-800
              shadow-lg shadow-indigo-500/40
              flex justify-center
            "
          >
            <div class="self-center">
              <p class="text-slate-800">logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>