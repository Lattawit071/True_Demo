<script setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits();
const selectedTime = ref(null);
const customTime = ref(0);
const remainingTime = ref(0);
const timerStatus = ref("");

const handleTimeSelect = (time) => {
  selectedTime.value = time;
  if (time !== "custom") {
    customTime.value = 0; // รีเซ็ตเวลา custom หากเลือกค่าอื่น
  }
};

const closeModal = () => {
  emit("close");
};

const setTimer = () => {
  let timeToSet =
    selectedTime.value === "custom" ? customTime.value : selectedTime.value;

  if (timeToSet === "none" || timeToSet <= 0) {
    remainingTime.value = 0; // รีเซ็ตเวลาเหลือ
    timerStatus.value = "ปิดการใช้งาน"; // อัปเดตสถานะเป็นปิด
    emit("set-status", "ปิดการใช้งาน"); // ส่งข้อความไปยัง parent
  } else {
    remainingTime.value = timeToSet; // อัปเดตเวลา
    timerStatus.value = ""; // เคลียร์ข้อความสถานะ
    emit("set-time", timeToSet); // ส่งค่าเวลาไปยัง parent
  }
  closeModal(); // ปิด modal
};
</script>

<template>
  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-[75%]">
      <div class="flex justify-between">
        <p class="text-xl font-semibold">ตั้งเวลาเพิ่มความเร็ว</p>
        <button @click="closeModal" class="text-xl">✖️</button>
      </div>
      <div class="mt-4">
        <div class="mt-4">
          <label class="block text-sm font-semibold">เลือกเวลา</label>
          <div class="flex flex-col mt-2">
            <label>
              <input
                type="radio"
                v-model="selectedTime"
                value="15"
                @change="handleTimeSelect(15)"
                class="mr-2"
              />
              15 นาที
            </label>
            <label>
              <input
                type="radio"
                v-model="selectedTime"
                value="30"
                @change="handleTimeSelect(30)"
                class="mr-2"
              />
              30 นาที
            </label>
            <label>
              <input
                type="radio"
                v-model="selectedTime"
                value="60"
                @change="handleTimeSelect(60)"
                class="mr-2"
              />
              1 ชั่วโมง
            </label>
            <label>
              <input
                type="radio"
                v-model="selectedTime"
                value="custom"
                @change="handleTimeSelect('custom')"
                class="mr-2"
              />
              ระบุเวลาเอง
            </label>
            <label>
              <input
                type="radio"
                v-model="selectedTime"
                value="none"
                @change="handleTimeSelect('none')"
                class="mr-2"
              />
              ปิด
            </label>
          </div>
        </div>

        <div v-if="selectedTime === 'custom'" class="mt-4">
          <label for="customTime" class="block text-sm font-semibold"
            >กรุณาระบุเวลาที่ต้องการ (นาที)</label
          >
          <input
            id="customTime"
            type="number"
            v-model="customTime"
            min="1"
            max="120"
            class="w-full mt-2 p-2 border border-gray-300 rounded-md"
            placeholder="กรอกเวลาที่ต้องการ"
          />
        </div>
      </div>

      <div class="flex justify-end mt-4">
        <button
          @click="closeModal"
          class="bg-gray-500 text-white py-2 px-4 rounded mr-2"
        >
          ยกเลิก
        </button>
        <button
          @click="setTimer"
          class="bg-red-500 text-white py-2 px-4 rounded"
        >
          ยืนยัน
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
