<template>
    <div class="flex align-middle bg-slate-300 mt-5 px-4 pt-4 pb-3 w-96 max-h-20 rounded-lg">
       
        <input type="text" placeholder="Name" class="h-10 p-2 mr-2 w-full rounded-lg shadow-lg" v-model="name">
        <button class="h-10 p-2 w-full rounded-lg bg-blue-600 shadow-lg text-white" @click="addColumn()">Create column</button>

        <p v-if="!isRequestStatus" class="text-red-600 border-2 border-red-600 p-2 mt-2 rounded-lg">Error</p>
    </div>
</template>

<script>
import { useColumnsStore } from '@/stores/columns';

export default {
    setup() {
        const columnsStore = useColumnsStore();
        return { columnsStore }
    },

    data() {
        return {
            name: "",
            description: "",
            isRequestStatus: true
        }
    },

    methods: {
        addColumn() {
            this.isRequestStatus = this.columnsStore.add(this.name);
        }
    }
}
</script>