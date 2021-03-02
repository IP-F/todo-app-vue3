import { computed, ref } from "vue"

export default function usefilters(todos) {
    const filter = ref("all")
    const filterTodoList = computed(() => {
        switch (filter.value) {
            case "done":
                return todos.value.filter(item => item.completed)
            case "todo":
                return todos.value.filter(item => !item.completed)

            default:
                return todos.value
        }
    })

    return {
        filter,
        filterTodoList
    }
}