<template>
    <div class="cursor-move flex justify-between content-center bg-white rounded-lg px-4 py-2 mb-2 shadow-lg"
        :class="{
            'is-dragging': isDraggingStatus
        }"
        :id="id"
        draggable="true"
        @dragstart="isDraggingStatus = true"
        @dragend="isDraggingStatus = false"
    >
        <span class="content-center align-middle text-slate-600">{{ name }}</span>
        <div class="flex h-7">
            <router-link :to="'/task/'+id" class="bg-blue-600 text-white px-2 mr-1 rounded-lg shadow-lg">More</router-link>
            <button class="bg-red-600 text-white px-2 rounded-lg shadow-lg" @click="tasksStore.remove(id)">-</button>
        </div>
    </div>
</template>

<script>
import { useTasksStore } from '@/stores/tasks';

export default {
    props: ['id', 'name'],
    setup() {
        const tasksStore = useTasksStore();
        return { tasksStore }
    },

    data() {
        return {
            isDraggingStatus: false
        }
    }
}
</script>