var text_box;

function clear() {
    document.getElementById("input_div").value = "";
}

function checkValue() {
    text_box = document.getElementById("input_div").value;
    if (!text_box.match(/^[a-zA-z]+$/)) {
        alert("Allowed only alphabet.");
        return false;
    }
    return true;
}