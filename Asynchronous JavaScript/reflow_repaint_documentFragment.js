// code 1
const t1 = performance.now();

for(let i=1;i<=100;++i){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("Total time taken for execution1 = ", (t2-t1));

// code 2

const t3 = performance.now();
let myDiv = document.createElement('div');

for(let i=1;i<=100;++i){
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

const t4 = performance.now();

console.log("Total time taken for execution2 = ", (t4-t3));

// code 2 has less number of reflows, thus better performance



// DOCUMENT FRAGMENT

const t5 = performance.now();

const fragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'New paragraph'+i;
  fragment.appendChild(paragraph);
}
document.body.appendChild(fragment);

const t6 = performance.now();

console.log("Total time taken for fragment = ", (t6-t5));