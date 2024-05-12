<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute, useRouter, type RouteRecordNormalized } from 'vue-router'
const route = useRoute()
const router = useRouter()

const key = computed(() => route.fullPath)

const menu = router.getRoutes().filter((item) => item.name)

const handleMenuItemClick = (item: RouteRecordNormalized) => {
  router.push(item.path)
}
</script>

<template>
  <a-layout class="h-[100vh]">
    <a-layout>
      <a-layout-sider class="p-1 min-w-[25vw]">
        <div
          class="p-2 text-lg bg-zinc-100 m-2 rounded-md hover:bg-zinc-200"
          v-for="item in menu"
          :key="item.path"
          @click="handleMenuItemClick(item)"
        >
          {{ item.name }}
        </div>
      </a-layout-sider>
      <a-layout-content class="h-[100vh]">
        <RouterView :key="key" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
