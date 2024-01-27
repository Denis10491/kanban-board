<template>
    <div :id="id" class="column cursor-move flex flex-col justify-between content-center min-w-96 h-full bg-slate-300 border-4 rounded-lg p-6 mr-8"
        :class="{
            'border-blue-600': columnsStore.selectedColumnId == id
        }"
        @dragover.prevent="insertInThisColumn()"
    >
        <h2 class="text-xl text-slate-600 uppercase">{{ title }}</h2>
        <div class="flex flex-col my-2 h-full"
            v-if="tasksForCurrentColumn.length > 0"
        >
            <Task v-for="task in tasksForCurrentColumn" 
                :key="task.id" 
                :id="task.id" 
                :name="task.name"
            />
        </div>
        <h3 v-else class="text-md text-slate-600 m-2">This column is empty</h3>

        <div class="flex">
            <button class="bg-blue-600 text-white px-2 py-2 w-24 rounded-lg shadow-lg ml-2" 
                @click="select()">Add task</button>
            <button class="bg-red-600 text-white px-2 py-2 w-36 rounded-lg shadow-lg ml-2" 
                @click="columnsStore.remove(id)">Remove column</button>
        </div>
    </div>
</template>

<script>
import { useColumnsStore } from '@/stores/columns';
import { useTasksStore } from '@/stores/tasks';
import Task from '../Task/Task.vue'

export default {
    props: ['id', 'title'],
    components: { Task },

    setup() {
        const columnsStore = useColumnsStore();
        const tasksStore = useTasksStore();
        return { columnsStore, tasksStore }
    },

    methods: {
        select() {
            if (this.columnsStore.selectedColumnId == this.id) this.columnsStore.selectedColumnId = null
            else this.columnsStore.selectedColumnId = this.id
        },

        insertInThisColumn() {
            const draggingTask = document.querySelector('.is-dragging');
            if (draggingTask) {
                let draggingTaskInStore = this.tasksStore.list.find(task => task.id == draggingTask.getAttribute('id'));
                draggingTaskInStore.column_id = this.id;
                this.tasksStore.updateStorage();
            }
        }
    },

    computed: {
        tasksForCurrentColumn() {
            return this.tasksStore.list.filter(task => task.column_id == this.id);
        }
    }
}
</script>