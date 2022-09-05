console.log("Hello Javascript");
const output = document.getElementById("box__top1");
const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  console.log("Button is clicked!!");
  output.innerHTML = "";
  x = "";
  le = -1;
  op = "";
  mul = 0;
});
let x = "";
let le = -1;
let op = "";
let mul = 0;
const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
 if (output.textContent.length == 0) {
    output.innerHTML = "Error";
    console.log("error");
    setTimeout(() => {
      output.innerHTML = "";
      x = "";
      le = -1;
      op = "";
      mul = 0;
    }, 1000);
  }
  else if(op.length==0){
    console.log("Text is empty");
    output.innerHTML+="";
  }
   else {
    const st = output.textContent;
    le += 1;
    let n1 = parseInt(x);
    let n2 = parseInt(st.slice(le));
    if (output.textContent.length == le) {
      output.innerHTML = "Error";
      console.log("error");
      setTimeout(() => {
        output.innerHTML = "";
        x = "";
        le = -1;
        op = "";
        mul = 0;
      }, 1000);
    } else {
      if (mul == 0) mul = 1;
      n1 *= mul;
      // console.log(n1,mul,n2,le,st,x,st.slice(le));
      let z = -1;
      if (op === "+") z = n1 + n2;
      else if (op === "-") z = n1 - n2;
      else if (op === "*") z = n1 * n2;
      else z = n1 / n2;
      x = z.toString();
      op = "";
      output.textContent = z;
    }
  }
});
const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  if (op.length != 0) {
    output.innerHTML = "Error";
    setTimeout(() => {
      output.innerHTML = "";
      x = "";
      le = -1;
      op = "";
      mul = 0;
    }, 1000);
  } else if (output.textContent.length == 0) {
    output.innerHTML += "+";
    mul = 1;
  } else {
    const st = output.textContent;
    let z = 0;
    if (mul != 0) z = 1;
    x = st.slice(z);
    le = st.length;
    output.innerHTML += "+";
    op = "+";
    console.log(x);
  }
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  if (op.length != 0) {
    output.innerHTML = "Error";
    setTimeout(() => {
      output.innerHTML = "";
      x = "";
      le = -1;
      op = "";
      mul = 0;
    }, 1000);
  } else if (output.textContent.length == 0) {
    output.innerHTML += "-";
    mul = -1;
  } else {
    const st = output.textContent;
    let z = 0;
    if (mul != 0) z = 1;
    x = st.slice(z);
    le = st.length;
    output.innerHTML += "-";
    op = "-";
  }
  // console.log(x);
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", () => {
  if (op.length != 0 || output.textContent.length == 0) {
    output.innerHTML = "Error";
    setTimeout(() => {
      output.innerHTML = "";
      x = "";
      le = -1;
      op = "";
      mul = 0;
    }, 1000);
  } else {
    const st = output.textContent;
    let z = 0;
    if (mul != 0) z = 1;
    x = st.slice(z);
    le = st.length;
    output.innerHTML += "*";
    op = "*";
  }
});

const divide = document.getElementById("divide");
divide.addEventListener("click", () => {
  if (op.length != 0 || output.textContent.length == 0) {
    output.innerHTML = "Error";
    setTimeout(() => {
      output.innerHTML = "";
      x = "";
      le = -1;
      op = "";
      mul = 0;
    }, 1000);
  } else {
    const st = output.textContent;
    let z = 0;
    if (mul != 0) z = 1;
    x = st.slice(z);
    le = st.length;
    output.innerHTML += "/";
    op = "/";
  }
});
const numArray = document.getElementsByClassName("number");
for (let i = 0; i < 10; i++) {
  let st = numArray[i].textContent;
  numArray[i].addEventListener("click", () => {
    let le = output.textContent.length;
    console.log(le,x);
    if((op.length==0 && le==19)||(op.length==1 && (le-x.length-1)==19)){
        output.innerHTML = "Number to Long";
        setTimeout(() => {
          output.innerHTML = "";
          x = "";
          le = -1;
          op = "";
          mul = 0;
        }, 1000);
      }
      else{
        output.innerHTML += st;
      }
  });
  
}
