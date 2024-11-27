<script setup></script>

<template>
  <div>
    <div
      class="flex items-center justify-between px-4 py-2 flex-wrap md:flex-nowrap"
    >
      <div class="flex items-center mb-2 md:mb-0">
        <div
          class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
        >
          <span class="text-gray-700 font-bold">U</span>
        </div>
      </div>

      <div class="flex-1 text-center mb-2 md:mb-0 pl-5">
        <h1 class="text-base font-semibold">บิล & การใช้งาน</h1>
      </div>

      <div class="flex space-x-4">
        <div
          class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.5V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.5c0 .217-.072.423-.195.595L4 17h5m5 0a3 3 0 11-6 0m6 0H9"
            />
          </svg>
        </div>
        <div
          class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
        >
          <span class="text-gray-700 text-xl">🔍</span>
        </div>
      </div>
    </div>

    <div>
      <div class="flex justify-center">
        <img src="/trueg.jpg" class="w-full" height="full" />
      </div>

      <div class="">
        <p class="text-center">
          <span class="bg-gray-200 inline-block py-1 px-2 rounded-md text-sm">
            เบอร์เติมเงิน
          </span>
        </p>

        <div class="flex mt-3 p-5 rounded-lg shadow-lg bg-gray-50 gap-x-3">
          <div
            class="border border-gray-200 flex flex-col items-center p-2 rounded-md bg-white shadow w-64"
          >
            <img
              src="/pay.png"
              alt="การเติมเงิน"
              class="w-12 h-12 object-contain"
            />
            <p class="text-sm font-semibold text-gray-600">เติมเงิน</p>
          </div>
          <div
            class="border border-gray-200 flex flex-col items-center p-2 rounded-md bg-white shadow w-64"
          >
            <img
              src="/add.png"
              alt="เพิ่มวันที่"
              class="w-12 h-12 object-contain"
            />
            <p class="text-sm font-semibold text-gray-600">เพิ่มวันใช้งาน</p>
          </div>
          <div
            class="border border-gray-200 flex flex-col items-center p-2 rounded-md bg-white shadow w-64"
          >
            <img
              src="/borrow.png"
              alt="ให้ยืม"
              class="w-12 h-12 object-contain"
            />
            <p class="text-sm font-semibold text-gray-600">ให้ยืม</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 639px) {
  .flex-col {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .flex-row {
    flex-direction: column;
    justify-content: flex-start;
  }
}

@media (min-width: 640px) {
  .flex-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
