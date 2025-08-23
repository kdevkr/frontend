<script setup>
import DayjsTest from './components/DayjsTest.vue'

</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <!-- page content -->
        <div class="bg-red-500 text-white p-4">
          이 텍스트가 빨간색 배경에 흰색 글씨로 보여야 합니다.
        </div>

        <DayjsTest />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
