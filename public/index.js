const text = document.querySelector("#inpId");
const encode = document.querySelector("#eb");
const forCode = document.querySelector("#forCode");

const text2 = document.querySelector("#inpId2");
const decode = document.querySelector("#db");
const forCode2 = document.querySelector("#forCode2");

encode.addEventListener("click", () => {

    let data = text.value; 
    data = btoa(data);
    forCode.value = data;
});

decode.addEventListener("click", () => {
    let data = text2.value;
    data = atob(data);
    forCode2.value = data;
});