(function () {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const cap = document.getElementById("lbCap");
  const close = document.getElementById("lbClose");

  if (!lb || !img || !close) return;

  function open(src, alt, caption) {
    img.src = src;
    img.alt = alt || "";
    cap.textContent = caption || alt || "";
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
  }

  function shut() {
    lb.classList.remove("open");
    lb.setAttribute("aria-hidden", "true");
    img.src = "";
    cap.textContent = "";
  }

  document.addEventListener("click", (e) => {
    const target = e.target.closest("img.zoom");
    if (!target) return;

    const figure = target.closest("figure");
    const figcap = figure ? figure.querySelector("figcaption") : null;
    const caption = figcap ? figcap.textContent : "";

    open(target.getAttribute("src"), target.getAttribute("alt"), caption);
  });

  close.addEventListener("click", (e) => {
    e.stopPropagation();
    shut();
  });

  lb.addEventListener("click", (e) => {
    if (e.target === lb) shut();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") shut();
  });
})();
