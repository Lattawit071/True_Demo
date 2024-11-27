<script setup>
import { ref } from "vue";
import demoBottom from "@/DemoPage/demoBottom.vue";

const showDemoButton = ref(false);

const toggleDemoButton = () => {
  showDemoButton.value = !showDemoButton.value;
};
</script>

<template>
  <div class="mt-5">
    <div>
      <div class="text-center border">
        <p class="text-black">เรียงจาก:</p>
        <p class="text-red-500">
          ยอดเงิน (มาก - น้อย)
          <span class="text-xl cursor-pointer" @click="toggleDemoButton"
            >⚙️</span
          >
        </p>
      </div>
      <div class="mt-5 px-5 space-y-4">
        <router-link to="/billing">
          <div class="border p-4">kuy</div>
        </router-link>
        <div class="border p-4">kuy2</div>
        <div class="border p-4">kuy3</div>
      </div>

      <!-- รูปสามเหลี่ยมด้านล่างของ div แรก -->
      <div
        class="mt-2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-t-transparent border-l-transparent border-r-transparent border-b-gray-600 cursor-pointer"
        @click="toggleDemoButton"
      ></div>

      <!-- แสดง demoButton เมื่อคลิก -->
      <div v-if="showDemoButton" class="mt-4">
        <demoBottom />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* เพิ่มสไตล์ที่จำเป็น */
</style>
