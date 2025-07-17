document.querySelectorAll(".dialog").forEach((container) => {
  const dialoger = container.querySelector(".dialoger")
  const dialog = container.querySelector("dialog")
  if (!dialoger || !dialog) return
  dialoger.addEventListener("click", () => dialog.showModal())
  dialog.addEventListener("click", () => dialog.close())
})

export {}
