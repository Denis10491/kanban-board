<template>
    <div class="flex justify-center">
        <div class="bg-slate-300 rounded-lg py-8 px-5 w-96">
            <router-link to="/" class="bg-slate-600 text-white px-4 py-2 rounded-lg">Home</router-link>

            <h2 class="text-lg text-slate-600 mt-5">Task ID: {{ id }}</h2>

            <div class="text-slate-600 mt-2 flex flex-col">
                <label>Name</label>
                <input class="w-full p-2 rounded-lg shadow-lg" v-model="name">
            </div>

            <div class="text-slate-600 mt-5 flex flex-col">
                <label>Description</label>
                <input class="w-full p-2 rounded-lg shadow-lg" v-model="description">
            </div>

            <button class="bg-blue-600 text-white px-2 py-2 w-24 mt-5 rounded-lg shadow-lg"
                @click="tasksStore.update(id, currentTask.column_id, name, description)"
            >Save</button>
        </div>
    </div>
</template>

<script>
import { useTasksStore } from '@/stores/tasks';

export default {
    props: ['id'],
    setup() {
        const tasksStore = useTasksStore();
        return { tasksStore }
    },
    data() {
        return {
            name: "",
            description: ""
        }
    },

    mounted() {
        this.name = this.currentTask.name,
        this.description = this.currentTask.description
    },

    computed: {
        currentTask() {
            return this.tasksStore.list.find(task => task.id == this.id);
        }
    }
}
</script>