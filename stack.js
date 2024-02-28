/* stack structure
 -To build stacks we just need to create an array
 -key methods: 
 1.1. push()
 1.2. pop(returns the last value entered on the stack, popping it off the stack) 
 1.3. peek(its main functionality is returned the last value that I have on the stack) 
 1.4. size 
 1.5. print what I already know  
 
-Create and handle new stack of books
every book must have its name, ISBN, Author and Editorial
-fill the stack with some examples of data
*/
class Stack {
    constructor(){
    this.Stack = [];
    }

push(element){
    this.Stack.push(element);
    return this.Stack;
}

pop(){
    return this.Stack.pop;
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

class Book{
    constructor(name, author, editorial, ISBN){
        this.name = name;
        this.author = author;
        this.editorial = editorial;
        this.ISBN = ISBN;
        
    }
}

const stackBooks = new Stack

let firstBook = new Book("Felipe", "William Shakespeare", "Norma", 2185481);
let secondBook = new Book("David", "William Shakespeare", "El pais", 2206481);
let lastBook = new Book("Isabella", "William Shakespeare", "Revista semana", 2195486);


stackBooks.push(firstBook);
stackBooks.push(secondBook);
stackBooks.push(lastBook);

stackBooks.peek
stackBooks.size
stackBooks.pop
stackBooks.print
