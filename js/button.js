const buttons=document.querySelectorAll(".ga-buttons");function selectButtons(t,e){var s;for(s of e.querySelectorAll(".ga-button"))s.classList.remove("selected"),s===t&&s.classList.add("selected")}buttons.forEach(e=>{e.addEventListener("click",t=>{selectButtons(t.target,e)})});