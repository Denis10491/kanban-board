<template>
  <div class="flex overflow-x-auto">
    <div class="w-auto" v-for="column in columns" :key="column.id">
      <Column :id="column.id" :title="column.name" draggable="true" />
    </div>
  </div>

  <div class="flex mt-2">
    <FormColumnCreate class="mr-8" />
    <FormTaskCreate v-if="columnsStore.selectedColumnId" />
  </div>
</template>

<script>
import Column from '@/components/Column/Column.vue';
import FormColumnCreate from '@/components/Column/ColumnForm.vue';
import FormTaskCreate from '@/components/Task/TaskForm.vue';
import { useColumnsStore } from '@/stores/columns';

export default {
  components: { Column, FormColumnCreate, FormTaskCreate },
  setup() {
      const columnsStore = useColumnsStore();
      return { columnsStore }
  },

  computed: {
    columns() {
      return this.columnsStore.list;
    }
  }
}
</script>