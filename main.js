import inView from "in-view";

const app = document.querySelector("#app");
const dots = document.createDocumentFragment();
for (let i = 0; i < 200; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dots.appendChild(dot);
}
app.appendChild(dots);

inView(".dot")
    .on("enter", (el) => {
        el.classList.add("in-view");
    })
    .on("exit", (el) => {
        el.classList.remove("in-view");
    });
