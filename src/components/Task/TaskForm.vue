<template>
    <div class="bg-slate-300 mt-5 p-4 w-96 rounded-lg">
        <h2 class="text-xl text-slate-600">Create task</h2>

        <input type="text" placeholder="Name" class="p-2 my-2 w-full rounded-lg shadow-lg" v-model="name">
        <textarea cols="10" rows="3" placeholder="Description" class="w-full p-2 my-2 rounded-lg shadow-lg" v-model="description"></textarea>
        <button class="p-2 w-full rounded-lg bg-blue-600 shadow-lg text-white" @click="addTask()">Create</button>

        <p v-if="!isRequestStatus" class="text-red-600 border-2 border-red-600 p-2 mt-2 rounded-lg">Error</p>
    </div>
</template>

<script>
import { useColumnsStore } from '@/stores/columns';
import { useTasksStore } from '@/stores/tasks';

export default {
    setup() {
        const columnsStore = useColumnsStore();
        const tasksStore = useTasksStore();
        return { columnsStore, tasksStore }
    },

    data() {
        return {
            name: "",
            description: "",
            isRequestStatus: true
        }
    },

    methods: {
        addTask() {
            this.isRequestStatus = this.tasksStore.add(this.name, this.description, this.columnsStore.selectedColumnId);
        }
    }
}
</script>