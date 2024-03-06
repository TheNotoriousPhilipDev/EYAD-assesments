class Person {
    constructor(fullName, birthdate) {
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

class FamilyTree {
    constructor(root) {
        this.root = root;
    }

    // Pre-order traversal
    preOrder(node) {
        if (node) {
            console.log(`${node.fullName} - ${node.birthdate}`);
            node.children.forEach(child => this.preOrder(child));
        }
    }

    // Post-order traversal
    postOrder(node) {
        if (node) {
            node.children.forEach(child => this.postOrder(child));
            console.log(`${node.fullName} - ${node.birthdate}`);
        }
    }

    // In-order traversal
    inOrder(node) {
        if (node) {
            if (node.children.length > 1) {
                this.inOrder(node.children[0]);
                console.log(`${node.fullName} - ${node.birthdate}`);
                for (let i = 1; i < node.children.length; i++) {
                    this.inOrder(node.children[i]);
                }
            } else if (node.children.length === 1) {
                this.inOrder(node.children[0]);
                console.log(`${node.fullName} - ${node.birthdate}`);
            } else {
                console.log(`${node.fullName} - ${node.birthdate}`);
            }
        }
    }
}

// profe solo lo entendí hasta aca, sinceramente no lo completé
const grandparent = new Person("John Doe Sr.", "January 1, 1950");
const parent = new Person("Alice Doe", "March 15, 1980");
const child1 = new Person("Bob Doe", "December 5, 2005");
const child2 = new Person("Charlie Doe", "July 10, 2010");

