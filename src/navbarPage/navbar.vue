<script setup></script>

<template>
  <div>
    <router-view></router-view>

    <div class="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300">
      <div class="flex justify-between items-center py-3 px-6">
        <router-link to="/" class="text-center" active-class="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mx-auto text-gray-600 hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 10l7-7 7 7V21a2 2 0 002 2H5a2 2 0 002-2V10z"
            />
          </svg>
          <p class="text-xs text-gray-600">หน้าหลัก</p>
        </router-link>

        <router-link to="/SecondPage" class="text-center" active-class="active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mx-auto text-gray-600 hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 7h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h2"
            />
          </svg>
          <p class="text-xs text-gray-600">บิล & ใช้งาน</p>
        </router-link>

        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mx-auto text-gray-600 hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <p class="text-xs text-gray-600">ซื้อแพ็คเสริม</p>
        </div>

        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mx-auto text-gray-600 hover:text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 19V6a2 2 0 00-2-2H7a2 2 0 00-2 2v13m6-7l4 4-4 4m4-4l-4-4"
            />
          </svg>
          <p class="text-xs text-gray-600">สิทธิพิเศษ</p>
        </div>

        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 mx-auto text-gray-600 hover:text-blue-500"
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
          <p class="text-xs text-gray-600">สอบถามทรู</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  color: #1d4ed8;
}
</style>
