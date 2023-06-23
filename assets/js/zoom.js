const boxes = document.querySelectorAll(".box-imagem-produto");
const mediaQuery = window.matchMedia("(min-width: 1000px)");

if (mediaQuery.matches) {
  boxes.forEach(box => {
    const img = box.getElementsByTagName("img")[0];
  
    box.addEventListener("mousemove", (event) => {
      const offset = box.getBoundingClientRect();
  
      const x = event.clientX - offset.left;
      const y = event.clientY - offset.top;
        
      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = "scale(2.5)";
    })
  
    box.addEventListener("mouseleave", () => {
      img.style.tranformOrigin = `center center`;
      img.style.transform = "scale(1)";
    })
  })
}
