function showInfo(car) {
    let text = "";

    switch(car) {
        case "supra":
            text = "A Supra MK4 2JZ motorja legendás tuning alap.";
            break;

        case "skyline":
            text = "A Skyline R34 az egyik legismertebb JDM autó.";
            break;

        case "nsx":
            text = "A Honda NSX egy igazi japán szuperautó.";
            break;

        case "rx7":
            text = "Az RX-7 rotary motorral működik.";
            break;

        case "sti":
            text = "A Subaru STI rally bajnok.";
            break;

        case "evo":
            text = "Az EVO az STI örök riválisa.";
            break;

        case "swift":
            text = "A Swift Sport könnyű és szórakoztató.";
            break;
    }

    document.getElementById("popupText").innerText = text;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
