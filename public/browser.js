console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
 return `<li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
            <span class="item-text">${item.reja}</span>
            <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1" style="border-radius: 20px;">Tahrirlash</button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm" style="border-radius: 20px;">O'chirish</button>
            </div> 
        </li>`;
}

let createField = document.getElementById("create-field");

document
.getElementById("create-form")
.addEventListener("submit", function (e) {
    e.preventDefault();

    axios
    .post("/create-item", {reja: createField.value})
    .then((response) => {
        document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", 
       itemTemplate(response.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Xatolik");
    });

});

document.addEventListener("click", function (e) {

    // Delete operation
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Siz ushbu rejani aniq o'chirmoqchimisiz?")) {
            axios
            .post("/delete-item", {id: e.target.getAttribute("data-id")})
            .then((response) => {
                e.target.parentElement.parentElement.remove();
            })
            .catch(() => {
                console.log("Xatolik yuz berdi");
            });
        }
    }
    // Edit operation
    if(e.target.classList.contains("edit-me")) {
        let userInput = prompt("Yangi reja kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if(userInput) {
            axios
            .post("/edit-me", {id: e.target.getAttribute("data-id"), reja: userInput})
            .then((response) => {
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = response.data.reja;
            })
            .catch(() => {
                console.log("Xatolik yuz berdi");
            });
        }
    }

})