
let unlocked = false;

window.addEventListener('focus', () => {
  if (!unlocked) {
    document.getElementById("submitBtn").classList.remove("locked");
    document.getElementById("submitBtn").textContent = "✅ Submit කරන්න!";
    unlocked = true;
  }
});

function submitLink() {
  if (!unlocked) return;

  const name = document.getElementById("username").value.trim();
  const link = document.getElementById("userlink").value.trim();
  if (!name || !link) {
    alert("කරුණාකර නම සහ ලින්ක් එක පුරවන්න!");
    return;
  }

  const div = document.createElement("div");
  div.className = "link-item";
  div.innerHTML = `<span>👤 ${name}</span>${link}`;
  document.getElementById("linkList").appendChild(div);

  document.getElementById("username").value = "";
  document.getElementById("userlink").value = "";
}
