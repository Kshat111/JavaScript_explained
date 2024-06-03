class human{
    name = 'rupa'; // public (by default)
    #id = 432436921; // private
    height = 160;
    weight = 55;


    constructor(newName, newHeight, newId){
        this.name = newName;
        this.height = newHeight;
        this.#id = newId;
    }

    // function
    walking(){
        console.log("I can walk");
    }

    // make a getter to access private fields outside the class
    fetchId(){
        return this.#id;
    }

    // make a setter to set the value
    modifyId(val){
        this.#id = val;
    }
    
    // can also be declared without using set and get keyword
}

let person = new human('megha', 165, 32675472);
console.log(person.name); // name gets over-written
console.log("old ID: ", person.fetchId());
person.modifyId(8347653);
console.log("new ID: ", person.fetchId());

// PROPERTIES - attributes and characteristics of the class that describe it - Public and private
// METHODS - Functions defined within a class that perform actions or operations - set and get (accessed with brackets if get and set keywords are not used), otherwise not
// FIELDS - Variables defined that holds the data (accessed without brackets)