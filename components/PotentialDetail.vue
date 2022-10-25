<template>
  <div class="flex flex-row">
    <div
      class="
        p-6
        max-w-sm
        bg-white
        rounded-lg
        border border-gray-200
        shadow-md
        dark:bg-gray-800 dark:border-gray-700
        basis-1/2
      "
    >
      <a href="#">
        <h5
          class="
            mb-2
            text-2xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          {{ userClient.full_name }}
        </h5>
        <h5
          class="
            mb-2
            text-xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          type: {{ userClient.building_type }}
        </h5>
        <h5
          class="
            mb-2
            text-xl
            font-bold
            tracking-tight
            text-gray-900
            dark:text-white
          "
        >
          cups: {{ userClient.cups }}
        </h5>
      </a>
      <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ userClient.address }}
    </p>

    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ userClient.role }}
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ point.tariff }}
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ point.invoiced_amount }}
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ point.power.p1 }}
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {{ point.power.p2 }}
    </p> -->
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Neighbors: {{ point.neighbors.length }}
      </p>
      <div>
        <a
          href="#"
          class="
            inline-flex
            items-center
            py-2
            px-3
            text-sm
            font-medium
            text-center text-white
            bg-indigo-500
            rounded-lg
            hover:bg-indigo-800
            focus:ring-4 focus:outline-none focus:ring-indigo-300
            dark:bg-indigo-600
            dark:hover:bg-indigo-700
            dark:focus:ring-indigo-800
          "
          @click="getPromo(point.power, point.invoiced_amount, point.neighbors)"
        >
          Ofrecer Oferta
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="basis-1/2">
      <!-- <OfferCard 
    :type="offerType"/> -->
      <div
        v-if="basic"
        class="
          ml-10
          p-6
          max-w-sm
          bg-white
          rounded-lg
          border border-gray-200
          shadow-md
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <h1 class="text-blue-900 title-font font-medium">
          **Basic discount**: 5% discount.
        </h1>
      </div>
      <div
        v-else-if="special"
        class="
          ml-10
          p-6
          max-w-sm
          bg-white
          rounded-lg
          border border-gray-200
          shadow-md
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        >
        <h1 class="text-indigo-900 title-font font-medium">
          **Special discount**: 12% discount
        </h1>
      </div>
      <div
        v-show="standard"
        class="
          ml-10
          p-6
          max-w-sm
          bg-white
          rounded-lg
          border border-gray-200
          shadow-md
          dark:bg-gray-800 dark:border-gray-700
        "
      >
        <h1 class="text-pink-900 title-font font-medium">
          **Standard offer**: No discount.
        </h1>
      </div>
    </div>
  </div>
</template>

<script>

import supplyPoints from "../assets/Json/supply-points.json";
export default {
  props: ["userClient", "point"],
  data() {
    return {
      standard: false,
      basic: false,
      special: false,
      n: "",
      supplyPoints: [],
      supply_point: [
        {
          cups: "",
          tariff: "",
          invoiced_amount: "",
          power: {
            p1: "",
            p2: "",
          },
          neighbors: ["", ""],
        },
      ],
    };
  },

 
  methods: {
    getPromo(power, invoiceeAmount, neighbors) {
      const [n1Power, n2Power] = this.getNeighbourPower(
        power,
        n1Power,
        n2Power
      );
      const [n1Amount, n2Amount] = this.getNeighboursInvoicedAmount(
        invoiceeAmount,
        n1Amount,
        n2Amount
      );

      if (n1Amount.invoiced_amount + n2Amount.invoiced_amount > 100) {
        console.log(n1Amount.invoiced_amount + n2Amount.invoiced_amount);
        this.specialO();
      } else if (
        power.p1 < n1Power.p1 &&
        power.p1 < n2Power.p1 &&
        power.p2 < n1Power.p2 &&
        power.p2 < n2Power.p2
      ) {
        this.basicO();
      } else {
        this.standardO();
      }
    },

    getNeighbourPower(neighbors) {
      const [n1, n2] = Object.values(neighbors);
      //llamar this.getPower(n1)/ (n2)
      const n1Power = this.getPower1(n1);
      const n2Power = this.getPower2(n2);
      console.log ([n1Power, n2Power])
      return [n1Power, n2Power];
    },
    /*pasar n->vecino neighbors[ni] (supply)
      buscar n -> clients -> 
      return {
        p1:'****',
        p2:'****'
      }*/

    getPower1(n1) {
      let n1Power = {};
      return (n1Power = {
        p1: "5000",
        p2: "4800",
      });
    },
    getPower2(n2) {
      let n2Power = {};
      return (n2Power = {
        p1: "5500",
        p2: "5800",
      });
    },
    getNeighboursInvoicedAmount(neighbors) {
      const [n1, n2] = Object.values(neighbors);
      const n1Amount = this.getAmount1(n1);
      const n2Amount = this.getAmount2(n2);

      return [n1Amount, n2Amount];
    },

    /*getAmount(){
      pasar n -> neighbours[ni]
      buscar n -> clients ->
      return invoiced_amount 
      
    }*/
    getAmount1(n1) {
      let n1Amount = {};
      return (n1Amount = {
        invoiced_amount: 10,
      });
    },
    getAmount2(n2) {
      let n2Amount = {};
      return (n2Amount = {
        invoiced_amount: "",
      });
    },

    basicO() {
      this.basic = true;
    },
    specialO() {
      console.log("special");
      this.special = true;
    },
    standardO() {
      this.standard = true;
    },
  },
};
</script>

<style>
</style>