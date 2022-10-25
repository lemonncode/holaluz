<template>
  <div>
    <form>
      <input class="bg-amber-200" type="text" v-model="supplyCups" />
      <button>clear</button>
    </form>
    <div v-for="point in points" :key="point.cups">
      {{ point.neighbors }}
    </div>
  </div>
</template>

<script>
import supplyPoints from "../assets/Json/supply-points.json";
export default {
  data() {
    return {
      supplyCups: "",
      point: [],
      points: [],
      pointNeig: [],
    };
  },
  created() {
    return (this.points = supplyPoints);
  },
};
</script>

<style>
</style>