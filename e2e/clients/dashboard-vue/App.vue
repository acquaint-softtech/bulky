<template>
  <dashboard :bulky="bulky" />
</template>

<script>
import Vue from "vue";
import bulky from "@bulky/core";
import { Dashboard } from "@bulky/vue";

export default {
  name: "App",
  components: {
    Dashboard,
  },
  computed: {
    bulky: () => new bulky(),
  },
};
</script>

<style src="@bulky/core/dist/style.css"></style>
<style src="@bulky/dashboard/dist/style.css"></style>
