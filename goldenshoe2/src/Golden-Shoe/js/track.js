let root = document.getElementById("container");
let msg = document.createElement("div");
msg.textContent = "Tracking page";
localStorage.removeItem("cart");
root.appendChild(msg);