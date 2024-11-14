let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
      if (count === 0) {
        alert("No Passengers Onboard!"); // Show alert if count is 0
        return; // Exit the function if no passenger is boarded
}
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous Entries: "// Reset to the original state
}
