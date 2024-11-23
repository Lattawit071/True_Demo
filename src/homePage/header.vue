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

      <div class="flex-1 text-center mb-2 md:mb-0">
        <h1 class="text-lg font-semibold">หน้าหลัก</h1>
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
      <div>
        <div class="flex justify-center">
          <img src="/1.png" class="w-full" />
        </div>

        <div class="rounded-md">
          <p class="text-center">
            <span class="bg-gray-300 inline-block py-1 px-2 rounded-md text-sm">
              บิลรายเดือน
            </span>
          </p>

          <div class="flex flex-col sm:flex-row justify-between px-4 sm:px-20">
            <div class="mb-4 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
              <p>
                ยอดเงินที่ต้องชำระ
                <span class="text-gray-700 text-2xl">ℹ️</span>
              </p>
              <p class="text-lg font-bold">$ 0.00</p>
            </div>
            <div class="text-center w-full sm:w-auto">
              <span class="text-gray-700 text-4xl mb-">💳</span>
              <p class="text-lg">2034 พอยท์</p>
            </div>
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
