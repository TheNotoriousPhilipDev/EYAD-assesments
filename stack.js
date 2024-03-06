class Stack {
    constructor(){
        this.stack = []; 
    }

    push(element){
        this.stack.push(element); 
        return this.stack;
    }

    pop(){
        return this.stack.pop(); 
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack)
    }
}

class Book {
    constructor(name, author, editorial, ISBN){
        this.name = name;
        this.author = author;
        this.editorial = editorial;
        this.ISBN = ISBN;
    }
}

const stackBooks = new Stack();     

let firstBook = new Book("Book 1", "Author 1", "Editorial 1", 1234567890);
let secondBook = new Book("Book 2", "Author 2", "Editorial 2", 2345678901);
let lastBook = new Book("Book 3", "Author 3", "Editorial 3", 3456789012);

stackBooks.push(firstBook);
stackBooks.push(secondBook);
stackBooks.push(lastBook);

console.log("Stack size:", stackBooks.size());
console.log("Top book in stack:", stackBooks.peek());
console.log("Books in stack:");
stackBooks.print();
