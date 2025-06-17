// script.js zrobione przez Janka
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("cursor");


    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});

function NoweOkno(url) {
    window.open(url, '_blank', 'width=800,height=600,top=100,left=100');
}

console.log("pliki strony: https://github.com/julianpiekos/sklepujulka/");

function znikanie_strony() {
    document.body.innerHTML = '';
    document.title = 'Pusto';
}
