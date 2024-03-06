class Person {
    constructor(name, arrivedTime) {
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }
   
    enqueue(element) { // add element
        return this.queue.push(element);
    }
    
    dequeue() { 
        if(this.queue.length > 0) {
            return this.queue.shift();   // remove first element
        }
    }
    
    peek() {
        return this.queue[this.queue.length - 1];
    }
      
    size(){
        return this.queue.length;
    }

    isEmpty() {
       return this.queue.length == 0;
    }

    clear(){
        this.queue = [];
    }
}

const atmQueue = new Queue();


atmQueue.enqueue(new Person("Alice", new Date()));
atmQueue.enqueue(new Person("Bob", new Date()));
atmQueue.enqueue(new Person("Charlie", new Date()));


console.log("Number of people in the ATM queue:", atmQueue.size());


console.log("People in the ATM queue:");
while (!atmQueue.isEmpty()) {
    const person = atmQueue.dequeue();
    console.log(`Name: ${person.name}, Arrived Time: ${person.arrivedTime}`);
}
