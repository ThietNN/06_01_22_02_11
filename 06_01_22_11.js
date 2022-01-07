function run(){
    let a = parseInt(document.getElementById("x").value);
    b = a *10 /100;
    document.getElementById("result").innerText="Thuế thu nhập phải trả là: " + b;
}