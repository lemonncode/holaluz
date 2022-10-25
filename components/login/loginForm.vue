<template>
  <section class="text-gray-600 body-font">
    <div class="container mx-18 ml-10 pl-10 pr-5 py-24 flex flex-wrap items-center">
      <div class="pl-16 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 class="title-font font-medium text-3xl text-gray-900">
          La Revolución del tejado
        </h1>
        <p class="leading-relaxed mt-4">Hagamoslo posible.</p>
      </div>
      <div
        class="
          lg:w-2/6
          md:w-1/2
          bg-gray-100
          rounded-lg
          p-8
          flex flex-col
          md:ml-auto
          w-full
          md:mt-0
          mr-7
        "
      >
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <div class="relative mb-4">
          <label for="username" class="leading-7 text-sm text-gray-600"
            >username</label
          >
          <input
            v-model="form.username"
            type="text"
            id="username"
            name="username"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600"
            >password</label
          >
          <input
            v-model="form.passwrord"
            type="password"
            id="password"
            name="password"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <button
          class="
            text-white
            bg-indigo-400
            border-0
            py-2
            px-8
            focus:outline-none
            hover:bg-indigo-500
            rounded
            text-lg
          "
          @click="login"
        >
          Iniciar Sesión
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith("local", { data: this.form });
        console.log(response);
        this.$router.push({ name: "index" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>