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