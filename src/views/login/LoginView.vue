<template>
  <div class="h-[100vh] w-full flex justify-center items-center">
    <div class="max-h-1/2 w-1/2 max-w-full">
      <a-form :model="form" @submit="handleSubmit" class="w-1/2 h-1/2">
        <a-form-item
          field="username"
          :rules="[{ required: true, message: '请输入用户名' }]"
          :validate-trigger="['change', 'blur']"
          label="用户名"
          show-colon
        >
          <a-input v-model="form.username" />
        </a-form-item>
        <a-form-item
          field="password"
          :rules="[{ required: true, message: '请输入密码' }]"
          :validate-trigger="['change', 'blur']"
          label="密码"
          show-colon
        >
          <a-input-password v-model="form.password" />
        </a-form-item>
        <a-row justify="end">
          <a-col flex="6rem">
            <a-form-item hide-label>
              <a-button html-type="submit">忘记密码</a-button>
            </a-form-item>
          </a-col>
          <a-col flex="4rem">
            <a-form-item hide-label>
              <a-button html-type="submit">登录</a-button>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { loginRequest } from '@/services/login'
import { onBeforeMount, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password: ''
})

const login = async (userInfo: { username: string; password: string }) => {
  const response = await loginRequest(userInfo)
  localStorage.token = response.data.token
  router.push('/')
}

const handleSubmit = (data: any) => {
  login({ username: data.values.username, password: data.values.password })
}

onBeforeMount(() => {
  const token = localStorage.token

  if (token) {
    router.back()
  }
})
</script>
