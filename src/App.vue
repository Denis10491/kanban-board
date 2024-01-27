<template>
  <main class="flex justify-center flex-col content-center bg-slate-100 min-h-dvh py-12 px-10">
    <router-view></router-view>
  </main>
</template>

<script>
import { useColumnsStore } from './stores/columns'
import { useTasksStore } from './stores/tasks'

export default {
  setup() {
      const columnsStore = useColumnsStore();
      const tasksStore = useTasksStore();
      return { columnsStore, tasksStore }
  },

  mounted() {
    this.columnsStore.getFromStorage();
    this.tasksStore.getFromStorage();
  }
}
</script>