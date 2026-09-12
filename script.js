const list = document.querySelector("#starred");

fetch("events.json")
    .then((response) => response.json())
    .then((events) => {
    events.forEach((event) => {
        const item = document.createElement("li");
        item.textContent = `${event.name} — starred ${event.starred}`;
        list.appendChild(item);
    });
    })
    .catch(error => {
        list.textContent = `Failed to fetch starred repositories. Error message : ${error.message}`
});