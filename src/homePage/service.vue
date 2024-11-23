<script setup>
import { ref } from "vue";

const scrollPosition = ref(0);

const scrollRight = () => {
  const container = document.querySelector(".scroll-container");
  const scrollAmount = 200;
  container.scrollLeft += scrollAmount;
};

const scrollLeft = () => {
  const container = document.querySelector(".scroll-container");
  const scrollAmount = 200;
  container.scrollLeft -= scrollAmount;
};
</script>

<template>
  <div>
    <div class="text-center mb-4">
      <p class="bg-gray-300 inline-block py-1 px-2 rounded-md text-sm">
        ดูบริการทั้งหมด
      </p>
    </div>

    <!-- Scrollable Services Section -->
    <div class="p-4">
      <div class="relative rounded-lg shadow-bottom">
        <!-- Container for scrollable buttons -->
        <div
          class="scroll-container flex space-x-6 overflow-x-auto scrollbar-hidden py-4"
        >
          <!-- คูปองสุดคุ้ม -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">🎟️</span>
            <p class="mt-2 text-sm">คูปอง</p>
          </div>

          <!-- ลงทะเบียนซิม -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">📲</span>
            <p class="mt-2 text-sm">ลงทะเบียนซิม</p>
          </div>

          <!-- บริการทรูออนไลน์ -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">🌐</span>
            <p class="mt-2 text-sm">บริการออนไลน์</p>
          </div>

          <!-- เปลี่ยนโปรรายเดือน -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">🔄</span>
            <p class="mt-2 text-sm">เปลี่ยนโปร</p>
          </div>

          <!-- จ่ายเงินอื่นๆ -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">💸</span>
            <p class="mt-2 text-sm">จ่ายเงิน</p>
          </div>

          <!-- ปุ่มตรวจสอบสถานะ -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">🔍</span>
            <p class="mt-2 text-sm">ตรวจสอบ</p>
          </div>

          <!-- ปุ่มตั้งค่า -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">⚙️</span>
            <p class="mt-2 text-sm">ตั้งค่า</p>
          </div>

          <!-- ปุ่มบริการอื่นๆ -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">📦</span>
            <p class="mt-2 text-sm">บริการอื่นๆ</p>
          </div>

          <!-- New Services -->
          <!-- เติมเงินมือถือ -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">💳</span>
            <p class="mt-2 text-sm">เติมเงินมือถือ</p>
          </div>

          <!-- เช็คยอดเงิน -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">💰</span>
            <p class="mt-2 text-sm">เช็คยอดเงิน</p>
          </div>

          <!-- เปลี่ยนโปรเน็ต -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">📶</span>
            <p class="mt-2 text-sm">เปลี่ยนโปรเน็ต</p>
          </div>

          <!-- สมัครโปรใหม่ -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">🆕</span>
            <p class="mt-2 text-sm">สมัครโปรใหม่</p>
          </div>

          <!-- เติมเงินทรูวอลเล็ท -->
          <div class="service-button flex flex-col items-center p-4 rounded-lg">
            <span class="text-4xl">💵</span>
            <p class="mt-2 text-sm">เติมเงินทรูวอลเล็ท</p>
          </div>
        </div>

        <!-- Scroll Arrow Buttons -->
        <div
          class="arrow-button absolute top-1/2 transform -translate-y-1/2 left-0 p-2 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
          style="bottom: 10px"
        >
          <button @click="scrollLeft" class="text-2xl">⬅️</button>
        </div>
        <div
          class="arrow-button absolute top-1/2 transform -translate-y-1/2 right-0 p-2 rounded-full shadow-lg hover:bg-gray-300 transition duration-300"
          style="bottom: 10px"
        >
          <button @click="scrollRight" class="text-2xl">➡️</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scroll-container {
  max-width: 100%;
  display: flex;
  gap: 16px;
}

.shadow-bottom {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Bottom shadow effect */
}

.service-button {
  transition: all 0.3s ease;
}

.service-button:hover {
  background-color: #f1f1f1; /* Slight background color change on hover */
  cursor: pointer; /* Change cursor to pointer */
  transform: scale(1.05); /* Slight scaling effect */
}

.arrow-button {
  transition: all 0.3s ease;
}

.arrow-button:hover {
  background-color: #f1f1f1; /* Light hover effect */
  cursor: pointer; /* Change cursor to pointer */
}

@media (max-width: 768px) {
  .scroll-container {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  .flex {
    flex-wrap: nowrap;
  }
}
</style>
