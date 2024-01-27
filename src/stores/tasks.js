import { defineStore } from "pinia";

export const useTasksStore = defineStore('tasksStore', {
    state: () => ({
        list: []
    }),

    actions: {
        getFromStorage() {
            let listInStorage = JSON.parse(localStorage.getItem('tasks')) ?? [];
            if (listInStorage.length > 0) this.list = listInStorage;
        },

        updateStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.list));
        },
        
        add(name, description, columnId) {
            if (!name || !columnId) return false;
            this.list.push({
                id: Math.floor(Math.random() * 100000),
                column_id: columnId,
                name: name,
                description: description
            });
            this.updateStorage();
            return true;
        },

        update(id, columnId, name, description) {
            let index = this.list.findIndex(task => task.id == id);
            this.list[index] = {
                id: id,
                column_id: columnId,
                name: name,
                description: description
            }
            this.updateStorage();
        },

        remove(id) {
            if (!id) return false;
            let index = this.list.findIndex(task => task.id == id);
            this.list.splice(index, 1);
            this.updateStorage();
            return true;
        }
    }
})