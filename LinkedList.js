class Node {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node) {
        const newNode = new Node(node);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

class TodoList extends LinkedList {
    constructor() {
        super();
    }

    addTodo(title, description, nextTodo) {
        const todo = { title, description, nextTodo };
        this.append(todo);
    }
}


const TODOs = new TodoList();


TODOs.addTodo("Task 1", "Description for Task 1", "Task 2");
TODOs.addTodo("Task 2", "Description for Task 2", "Task 3");
TODOs.addTodo("Task 3", "Description for Task 3", "Task 4");
TODOs.addTodo("Task 4", "Description for Task 4", null);

// Print all TODOs
TODOs.print();
