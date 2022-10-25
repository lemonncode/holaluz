<template>
  <div class="bg-amber-100 h-screen">
    <Header />

    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Clientes</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
    </div>
      <div class="flex flex-wrap mx-auto">
        <div v-for="customer in customers" :key="customer.cups">
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div
              class="
                h-48
                w-80
                flex
                items-center
                border-gray-200 border
                pl-8
                p-4
                rounded-lg
                bg-white
              "
            >
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                 Full Name: {{customer.full_name}}
                </h2>
                <p class="text-gray-500">Address: {{ customer.address }}</p>
                <p class="text-gray-500">Cups: {{ customer.cups }}</p>
                <p class="text-gray-500">Role: {{ customer.role }}</p>
                <h2 class="text-red-600 title-font font-medium">
                Building Type: {{ customer.building_type }}
                </h2>
                
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clients from "../assets/Json/clients.json";

import Header from "./UI/Header.vue";

export default {
  components: {
    Header,
  },
  data: function () {
    return {
      customers: [],
    };
  },
  created() {
    this.loadClients();
  },

  methods: {
    loadClients() {
      this.customers = clients;
      console.log(this.customers);
    },
  },
};
</script>

<style>
</style>