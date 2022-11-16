<script setup>
import { Dashboard, DashboardModal, DragDrop, ProgressBar } from "@bulky/vue";
</script>

<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to bulky Vue Demo"/> -->
    <h1>Welcome to bulky Vue Demo!</h1>
    <h2>Inline Dashboard</h2>
    <label>
      <input
        type="checkbox"
        :checked="showInlineDashboard"
        @change="
          (event) => {
            showInlineDashboard = event.target.checked;
          }
        "
      />
      Show Dashboard
    </label>
    <Dashboard
      v-if="showInlineDashboard"
      :bulky="bulky"
      :props="{
        metaFields: [{ id: 'name', name: 'Name', placeholder: 'File name' }],
      }"
    />
    <h2>Modal Dashboard</h2>
    <div>
      <button @click="open = true">Show Dashboard</button>
      <DashboardModal
        :bulky="bulky2"
        :open="open"
        :props="{
          onRequestCloseModal: handleClose,
        }"
      />
    </div>

    <h2>Drag Drop Area</h2>
    <DragDrop
      :bulky="bulky"
      :props="{
        locale: {
          strings: {
            chooseFile: 'Boop a file',
            orDragDrop: 'or yoink it here',
          },
        },
      }"
    />

    <h2>Progress Bar</h2>
    <ProgressBar
      :bulky="bulky"
      :props="{
        hideAfterFinish: false,
      }"
    />
  </div>
</template>

<script>
import bulky from "@bulky/core";
import Tus from "@bulky/tus";
import { defineComponent } from "vue";

const { VITE_TUS_ENDPOINT: TUS_ENDPOINT } = import.meta.env;

export default defineComponent({
  computed: {
    bulky: () =>
      new bulky({ id: "bulky1", autoProceed: true, debug: true }).use(Tus, {
        endpoint: TUS_ENDPOINT,
      }),
    bulky2: () =>
      new bulky({ id: "bulky2", autoProceed: false, debug: true }).use(Tus, {
        endpoint: TUS_ENDPOINT,
      }),
  },
  data() {
    return {
      open: false,
      showInlineDashboard: false,
    };
  },
  methods: {
    handleClose() {
      this.open = false;
    },
  },
});
</script>

<style src="@bulky/core/dist/style.css"></style>
<style src="@bulky/dashboard/dist/style.css"></style>
<style src="@bulky/drag-drop/dist/style.css"></style>
<style src="@bulky/progress-bar/dist/style.css"></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
