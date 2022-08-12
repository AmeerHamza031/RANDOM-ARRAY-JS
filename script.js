add = () => {
    const output = document.getElementById("output");
    const array = document.getElementById("array");
    const arr = new Array();
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 400));

    }

    array.innerText = "Array" + ":" + " " + arr;
    output.innerText = " First Element Is" + " " + arr[0] + " " + "And Last Element is  " + " " + arr[arr.length - 1];
}