"use strict";

const form = document.querySelector("#form");
let input = document.querySelector(".input");

function Book(value) {
  this.value = value;
}

const addTodo = function (e) {
  e.preventDefault();
  let value = input.value;
  const li = document.createElement("li");
  const ul = document.querySelector(".list-ul");

  li.innerHTML = `
  <p>-${value}</p>
          <div class="icons">
            <button>
              <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/hjeefwhm.json"
                trigger="hover"
                style="width: 32px; height: 32px"
                class="done"
              >
              </lord-icon></button
            ><button>
            <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/dovoajyj.json"
              trigger="hover"
              style="width: 30px; height: 30px"
              class="remove"
            >
            </lord-icon>
            </button>
          </div>
  `;

  if (value === "") {
  } else {
    ul.appendChild(li);
  }

  document.querySelector(".input").value = "";
};
form.addEventListener("submit", addTodo);

const remove = document.querySelectorAll(".remove");
const done = document.querySelector(".done");

const delLi = function (el) {
  if (el.classList.contains("remove")) {
    // console.log(el.parentElement.parentElement);
    el.parentElement.parentElement.parentElement.remove();
  } else if (el.classList.contains("done")) {
    el.parentElement.parentElement.parentElement.classList.toggle("green");
  }
};

document.querySelector(".list-ul").addEventListener("click", (e) => {
  delLi(e.target);
});
