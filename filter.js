const topBar = document.querySelector(".filter-wrapper");
const btnToggleTop = document.querySelector("#btn-toggle-top");
// const closeBtn = document.querySelector(".btn-res-close");
btnToggleTop.addEventListener('click', () => {
    topBar.classList.toggle('active-top')
  })
//   closeBtn.addEventListener("click", ()=>{
//     topBar.classList.remove('active-top');
//   })