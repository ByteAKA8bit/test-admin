<template>
  <a-table
    class="h-full p-2"
    :scroll="{ y: '100%', x: '100%' }"
    :columns="columns"
    :data="products"
    row-key="id"
    :pagination="{ pageSize: 15 }"
  >
    <template #optional="{ record }">
      <a-row :gutter="16" justify="space-around">
        <a-col :span="10"
          ><a-button status="warning" @click="openDeleteModal(record)">修改</a-button></a-col
        >
        <a-col :span="10"
          ><a-button status="danger" @click="openDeleteModal(record)">删除</a-button></a-col
        >
      </a-row>
    </template>
  </a-table>
  <a-modal v-model:visible="deleteVisible" @ok="deleteRecord" title="确认删除"
    >是否删除:{{ selectedRecord && selectedRecord.name }}</a-modal
  >
</template>

<script setup lang="ts">
import { getProducts } from '@/services/product'
import { onMounted, ref } from 'vue'

const columns = [
  { title: '商品ID', dataIndex: 'id' },
  { title: '商品名称', dataIndex: 'name' },
  { title: '入库时间', dataIndex: 'entry_time' },
  { title: '库存', dataIndex: 'stock' },
  { title: '操作', slotName: 'optional' }
]

const selectedRecord = ref({})
const deleteVisible = ref(false)

const products = ref([])

const openDeleteModal = (record: any) => {
  deleteVisible.value = true
  selectedRecord.value = record
}
const deleteRecord = () => {
  // 调用删除接口，成功后再关闭弹窗，不成功提示
  console.log(selectedRecord.value)
}

// 挂载后请求基本数据
onMounted(() => {
  getProducts({ page: 1, pageSize: 50 }).then((res: any) => {
    products.value = res.data.list
  })
})
</script>
