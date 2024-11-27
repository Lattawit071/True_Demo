<script setup>
import { ref } from "vue";
import demoModal from "./demoModal.vue";

const currentView = ref("left");
const modalOpen = ref(false);
const timerValue = ref("0");
const remainingTime = ref(0);
const timerStatus = ref("");
const currentTel = ref(null);

function showData(view) {
  currentView.value = currentView.value === view ? null : view;
}

function showTelData(view) {
  currentTel.value = currentTel.value === view ? null : view;
}

function openModal() {
  modalOpen.value = true;
}

function closeModal() {
  modalOpen.value = false;
  if (!timerValue.value || timerValue.value === "ปิดการใช้งาน") {
    timerValue.value = "0 นาที";
  }
}

function updateRemainingTime(time) {
  remainingTime.value = time;
}

function updateStatus(status) {
  timerStatus.value = status;
  if (status === "ปิดการใช้งาน") {
    remainingTime.value = 0;
  }
}
</script>

<template>
  <teleport to="body">
    <demoModal
      v-if="modalOpen"
      @close="closeModal"
      @set-time="updateRemainingTime"
      @set-status="updateStatus"
    />
  </teleport>

  <div class="p-1 px-[40px] container mx-auto mt-2">
    <div
      class="flex justify-between items-center p-4 border border-gray-300 rounded-md"
    >
      <div class="flex items-center space-x-4 gap-4">
        <div
          class="w-20 h-16 bg-gray-200 flex items-center justify-center rounded-md"
        >
          <img
            src="/qr.png"
            alt="QR Code"
            class="w-full h-full object-cover rounded-md"
          />
        </div>
        <div class="text-left">
          <p class="font-semibold">091-234-5678</p>
          <p class="text-sm text-gray-500">Truemove H</p>
        </div>
      </div>
      <div class="flex items-center space-x-4 pl-5">
        <div class="flex">
          <p>$</p>
          <p class="font-bold">0</p>
          <p>.00</p>
        </div>
        <div><input type="checkbox" id="confirm" class="h-5 w-5" /></div>
      </div>
    </div>
    <div
      class="text-gray-700 bg-white mt-3 border border-gray-300 py-6 rounded-md w-full"
      @click="showTelData('open')"
    >
      <div>
        <div class="flex justify-between mx-3">
          <p class="text-xs font-medium">ใช้ได้ถึง 06 ก.ย. 2568 (283 วัน)</p>
          <p class="mr-5 font-medium">ยอดคงเหลือ</p>
        </div>
        <div class="flex justify-between mx-3">
          <p class="font-bold">091-234-5678</p>
          <p class="text-red-500 text-xl">></p>
        </div>
        <div class="flex justify-between mx-3">
          <p class="text-xs text-yellow-300">ทรูมูฟ เอช</p>
          <div class="flex">
            <p class="font-bold">$ 0</p>
            <p class="mr-10">.00</p>
          </div>
        </div>
        <div class="flex justify-between mx-3"></div>
      </div>
    </div>

    <div
      v-if="currentTel === 'open'"
      class="bg-gray-100 py-6 rounded-md w-full border border-gray-300"
    >
      <div class="">
        <div class="kuy flex flex-col items-center justify-center">
          <div class="flex justify-center">
            <p class="text-xs font-semibold">5G Device 0</p>
          </div>
          <div class="flex flex-col sm:flex-row justify-center mt-4">
            <div class="flex gap-2">
              <p class="text-xs">(แพ็คหลัก + 1 แพ็คเสริม)</p>
              <div class="flex gap-2">
                <span class="text-red-600 text-xs">🔍</span>
                <p class="text-red-600 text-xs cursor-pointer hover:underline">
                  ดูรายละเอียด
                </p>
                <button
                  class="bg-red-400 text-white py-1 px-2 rounded-md hover:bg-red-600 focus:outline-none transition-all duration-200 ease-in-out text-xs"
                  @click="openModal"
                >
                  เพิ่มความเร็ว
                </button>
              </div>
            </div>
          </div>
          <div class="text-center text-red-600 text-xs mt-4">
            <p v-if="remainingTime === 0">ตอนนี้ความเร็วเหลือ 0 นาที</p>
            <p v-else>ตอนนี้ความเร็วเหลือ {{ remainingTime }} นาที</p>
          </div>
          <p class="text-center text-red-600 text-xs mt-4">
            สัญญาจะสิ้นสุดในวันที่ 02/01/2569
          </p>
        </div>

        <!-- New section with an extra layer of div -->
        <div class="mx-[12px] bg-gray-100 mt-[15px]">
          <div class="flex justify-between gap-4 px-4">
            <button
              class="relative bg-red-400 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200 flex-1"
              @click="showData('left')"
            >
              รอบบิลปัจจุบัน
              <span
                class="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-red-500 group-hover:border-t-red-700"
              ></span>
            </button>
            <button
              class="relative bg-red-400 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200 flex-1"
              @click="showData('right')"
            >
              รอบบิลที่ผ่านมา
              <span
                class="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-red-500 group-hover:border-t-red-700"
              ></span>
            </button>
          </div>
          <div class="bg-gray-100">
            <div v-if="currentView === 'left'" class="">
              <!-- New inner div inside left section -->
              <div class="border border-gray-300 p-4">
                <div class="flex items-center justify-between">
                  <div>📱</div>
                  <div class="pl-[10px]">
                    <p class="text-2xl">โทร</p>
                    <p>(แพ็คหลัก + แพ็คเสริม)</p>
                    <div
                      class="w-full h-3 bg-gray-300 rounded-full mt-2 relative overflow-hidden"
                    >
                      <div class="h-full bg-green-500" style="width: 30%"></div>
                    </div>
                  </div>
                  <div class="ml-auto text-right">
                    <p>คงเหลือ</p>
                    <div class="flex items-baseline justify-end gap-2">
                      <p class="text-2xl">109</p>
                      <p class="pt-[8px]">นาที</p>
                    </div>
                    <p>จาก 200 นาที</p>
                  </div>
                </div>
              </div>

              <div class="border border-gray-300 p-4">
                <div class="flex items-center justify-between">
                  <div>🌐</div>
                  <div class="pl-[10px]">
                    <p class="text-2xl">อินเทอร์เน็ต</p>
                    <p>(แพ็คหลัก + แพ็คเสริม)</p>
                    <div
                      class="w-full h-3 bg-gray-300 rounded-full mt-2 relative overflow-hidden"
                    >
                      <div class="h-full bg-green-500" style="width: 20%"></div>
                    </div>
                  </div>
                  <div class="ml-auto text-right">
                    <p>คงเหลือ</p>
                    <div class="flex items-baseline justify-end gap-2">
                      <p class="text-2xl">1GB</p>
                      <p class="pt-[8px]">ข้อมูล</p>
                    </div>
                    <p>จาก 2GB</p>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="currentView === 'right'" class="">
              <!-- New inner div inside right section -->
              <div class="border border-gray-300 p-4">
                <div class="flex items-center justify-between">
                  <div>📱</div>
                  <div class="pl-[10px]">
                    <p class="text-2xl">โทร</p>
                    <p>(แพ็คหลัก + แพ็คเสริม)</p>
                    <div
                      class="w-full h-3 bg-gray-300 rounded-full mt-2 relative overflow-hidden"
                    >
                      <div class="h-full bg-green-500" style="width: 70%"></div>
                    </div>
                  </div>
                  <div class="ml-auto text-right">
                    <p>คงเหลือ</p>
                    <div class="flex items-baseline justify-end gap-2">
                      <p class="text-2xl">1</p>
                      <p class="pt-[8px]">นาที</p>
                    </div>
                    <p>จาก 200 นาที</p>
                  </div>
                </div>
              </div>

              <div class="border border-gray-300 p-4">
                <div class="flex items-center justify-between">
                  <div>🌐</div>
                  <div class="pl-[10px]">
                    <p class="text-2xl">อินเทอร์เน็ต</p>
                    <p>(แพ็คหลัก + แพ็คเสริม)</p>
                    <div
                      class="w-full h-3 bg-gray-300 rounded-full mt-2 relative overflow-hidden"
                    >
                      <div class="h-full bg-green-500" style="width: 50%"></div>
                    </div>
                  </div>
                  <div class="ml-auto text-right">
                    <p>คงเหลือ</p>
                    <div class="flex items-baseline justify-end gap-2">
                      <p class="text-2xl">2GB</p>
                      <p class="pt-[8px]">ข้อมูล</p>
                    </div>
                    <p>จาก 2GB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="text-gray-700 bg-white mt-2 border border-gray-300 py-6 rounded-md w-full"
    >
      <div>
        <div class="flex justify-between mx-3">
          <p class="text-xs font-medium">ใช้ได้ถึง 06 ก.ย. 2568 (283 วัน)</p>
          <p class="mr-5 font-medium">ยอดคงเหลือ</p>
        </div>
        <div class="flex justify-between mx-3">
          <p class="font-bold">099-989-9898</p>
          <p class="text-red-500 text-xl">></p>
        </div>
        <div class="flex justify-between mx-3">
          <p class="text-xs text-yellow-300">ทรูมูฟ เอช</p>
          <div class="flex">
            <p class="font-bold">$ 77</p>
            <p class="mr-10">.77</p>
          </div>
        </div>
        <div class="flex justify-between mx-3"></div>
      </div>
    </div>
    <div
      class="text-gray-700 bg-white mt-2 border border-gray-300 py-6 rounded-md w-full"
    >
      <div>
        <div class="flex justify-between mx-3">
          <p class="text-xs font-medium">ใช้ได้ถึง 06 ก.ย. 2568 (283 วัน)</p>
          <p class="mr-5 font-medium">ยอดคงเหลือ</p>
        </div>
        <div class="flex justify-between mx-3">
          <p class="font-bold">090-090-9009</p>
          <p class="text-red-500 text-xl">></p>
        </div>
        <div class="flex justify-between mx-3">
          <p class="text-xs text-yellow-300">ทรูมูฟ เอช</p>
          <div class="flex">
            <p class="font-bold">$ 88</p>
            <p class="mr-10">.11</p>
          </div>
        </div>
        <div class="flex justify-between mx-3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  padding: 15px;
  box-sizing: border-box;
}

.button-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.text {
  font-size: 16px;
}

.button-container button {
  width: auto;
  padding: 10px 20px;
}

/* Adjustments for mobile screens */
@media (max-width: 375px) {
  .container {
    padding: 10px;
  }

  .text {
    font-size: 14px;
  }

  .button-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
