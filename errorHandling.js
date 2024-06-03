

try{
    // write that part of the code that can likely generate error
    console.log(x)
    //
    //
    //
    //
    //
    //
}

catch(err){
    // this block catches that part from the try block from where the error has originated
    //
    //
    // define here what you wanna do in case of the error
    //
    //

    console.log("you're now inside the catch block");
    console.log("the error is: ", err);
    throw "First declare the variable then use it";

}

finally{
    console.log("*Finally* block will always run");
}