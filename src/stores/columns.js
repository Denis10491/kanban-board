import { defineStore } from "pinia";

export const useColumnsStore = defineStore('columnsStore', {
    state: () => ({
        list: [
            {
                id: 1,
                name: 'Planned'
            },
            {
                id: 2,
                name: 'In progress'
            },
            {
                id: 3,
                name: 'Complete'
            }
        ],
        selectedColumnId: null
    }),

    actions: {
        getFromStorage() {
            let listInStorage = JSON.parse(localStorage.getItem('columns')) ?? [];
            if (listInStorage.length > 0) this.list = listInStorage;
        },

        updateStorage() {
            localStorage.setItem('columns', JSON.stringify(this.list));
        },
        
        add(name) {
            if (!name) return false;
            this.list.push({
                id: Math.floor(Math.random() * 100000),
                name: name
            });
            this.updateStorage();
            return true;
        },

        remove(id) {
            const index = this.list.findIndex((obj) => obj.id === id);
            if (index > -1) this.list.splice(index, 1);
            this.updateStorage();
        }
    }
})