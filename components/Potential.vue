<template>
  <div>
    <Header />
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-2"></div>

      <form class="flex flex-col gap-4">
        <label class="text-gray-900 title-font font-medium">
          Introducir numero CUPS</label
        >
        <input
          class="
            h-10
            w-40
            bg-amber-100
            rounded-md
            border-2 border-orange-400
            placeholder-gray-500
            border
            p-4
          "
          placeholder="cups number"
          type="text"
          v-model="clientCups"
        />
        <button
          class="
            h-10
            w-40
            bg-amber-100
            rounded-md
            border-2 border-orange-400
            placeholder-gray-500
            border
            p-4
            relative
          "
        >
         <p class="text-lg text-gray-700 absolute top-1 right-14"> CLEAR</p>
        </button>
      </form>

      <div class="mt-10">
        <div v-for="userClient in userClients" :key="userClient.cups">
          <div
            v-if="
              (userClient.cups == clientCups) &
              (userClient.building_type == 'house')">
            <div v-for="point in points" :key="point.cups">
              <div
                v-if="(point.cups == clientCups) & (point.neighbors.length > 0)"
              >
                <potential-detail :userClient="userClient" :point="point" />
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
import supplyPoints from "../assets/Json/supply-points.json";
import PotentialDetail from "./PotentialDetail.vue";
import Header from "./UI/Header.vue";

export default {
  components: {
    Header,
    PotentialDetail,
  },
  data: function () {
    return {
      clientCups: "",
      userClient: {
        full_name: "",
        address: "",
        cups: "",
        role: "",
        building_type: "",
      },

      point: {
        cups: "",
        tariff: "",
        invoiced_amount: "",
        power: {
          p1: "",
          p2: "",
        },
        neighbors: ["", ""],
      },
      showOffer: false,
    };
  },

  computed: {
    userClients() {
      return clients.map((userClient) => {
        return userClient;
      });
    },
    points() {
      return supplyPoints.map((point) => {
        return point;
      });
    },
  },
 
};
</script>

<style>
</style>