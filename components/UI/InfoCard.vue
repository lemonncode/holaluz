<template>
  <div class="bg-stone-100 h-screen">
    <Header />

    <div class=" mr-10 ml-10 m-6 grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
      <div v-for="category in categories" :key="category.name">
        <div
          class="
            flex
            items-center
            rounded-lg
            bg-white
            shadow-lg
            overflow-hidden
            h-40
          "
        >
          <img class="h-32 w-32 flex-shrink-0 ml-4" :src="category.image" />
          <div class="px-6 py-4">
            <h3 class="text-lg font-semibold text-gray-800 uppercase">
              {{ category.name }}
            </h3>

            <p class="text-gray-600 text-sm">{{ category.description }}</p>

            <div class="mt-4">
              <a
                href="#"
                class="
                  text-indigo-500
                  hover:text-indigo-400
                  font-semibold
                  text-sm
                "
              >
                <NuxtLink :to="category.to"> Info</NuxtLink>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },

  name: "InfoCard",

  data() {
    return {
      categories: [
        {
          name: "Clients",
          image: "1.jpg",
          description:
            "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
          to: "/clients",
        },
        {
          name: "Potential",
          image: "2.jpeg",
          description:
            "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornholet.",
          to: "/potential",
        },
        {
          name: "Supply",
          image: "3.jpeg",
          description:
            "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon.",
          to: "/supply",
        },
        {
          name: "Public Place",
          image: "4.jpeg",
          description:
            "Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub",
          to: "/",
        },
      ],
    };
  },
};
</script>

<style>
</style>