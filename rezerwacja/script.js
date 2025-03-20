// script.js zrobione przez Janka
    document.addEventListener("DOMContentLoaded", () => {
        const cursor = document.getElementById("cursor");
        document.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });
    });

function autoF1ll() {
    // Biezemy iNfoLmaCjE Do ZmeNNycHh
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let produkt = document.getElementById("produkt").value;

    // gogle fomr!!
    let formURL = "https://docs.google.com/forms/d/e/1FAIpQLScN34sEZ-L8b6TeFQL0-G-2g8VVbkRl5K7o6UGJz8-4WAWgxg/viewform";
            
    // nuMelki!
    let entryNameID = "252234179";  // imei!!
    let entryLastnameID = "170215480";  // nawiskoo!!
    let entryProduktID = "1663139754";  // plodukt!

    // magia!!
    let magia = `${formURL}?usp=pp_url&entry.${entryNameID}=${encodeURIComponent(name)}&entry.${entryLastnameID}=${encodeURIComponent(lastname)}&entry.${entryProduktID}=${encodeURIComponent(produkt)}`;

    // bum!!!11!!!!11!!!1!!!1!
    window.location.href = magia;
}

function NoweOkno(url) {
    window.open(url, '_blank', 'width=800,height=600,top=100,left=100');    
}z

function klikNaLegende() {
    document.getElementById("LEGEND").style.fontSize = "4vh";
    setTimeout(cofnijto(), 1000)
}

function cofnijto() {
    document.getElementById("")
}