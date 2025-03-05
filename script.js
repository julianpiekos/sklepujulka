
function przekieruj() {
    let ocena = document.querySelector('input[name="ocena"]:checked');

    if (!ocena) {
        alert("Wybierz ocenę przed wysłaniem!");
        return;
    }

    let ocenaWartosc = ocena.value;

    let formularzURL = "https://docs.google.com/forms/d/1tF3E6J65EAGlZAVcoWsAlUaJrbG42sytOkmWuesSY-4/viewform";

    let entryID = "entry.1036692998"; 

    let finalURL = `${formularzURL}?usp=pp_url&${entryID}=${ocenaWartosc}`;

    window.location.href = finalURL;
}
