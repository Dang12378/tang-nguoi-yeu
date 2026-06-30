
// ===== HEART SYSTEM =====
function spawnHeart() {
  for (let i = 0; i < 6; i++) { // 6 tim mỗi click
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💖";

    h.style.left = Math.random() * window.innerWidth + "px";
    h.style.top = window.innerHeight + "px";

    h.style.fontSize = (18 + Math.random() * 25) + "px";

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 4000);
  }
}

// ===== AUTO HEART RAIN =====
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💖";

  h.style.left = Math.random() * window.innerWidth + "px";
  h.style.top = window.innerHeight + "px";

  h.style.fontSize = (16 + Math.random() * 30) + "px";

  document.body.appendChild(h);

  setTimeout(() => h.remove(), 4000);
}, 300);

// ===== CLICK EVENT (GIỮ CÁI KHÁC CỦA BẠN, CHỈ THÊM HEART) =====
window.addEventListener("click", (e) => {

  spawnHeart(); // 💖 nhiều tim

});