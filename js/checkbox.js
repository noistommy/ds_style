const checkbox=document.querySelectorAll(".ga-checkbox");function changChecked(e,c,t=null){e=e.previousSibling;e.checked=t||!e.checked,c.classList.toggle("checked")}function selectRadio(e,c){var t,n=e.previousSibling.getAttribute("name");for(t of document.querySelectorAll(`[name="${n}"]`))t.checked=!1,t.parentElement.classList.remove("checked");changChecked(e,c)}checkbox.forEach(c=>{-1<c.className.indexOf("radio")?c.addEventListener("click",e=>{selectRadio(e.target,c)}):c.addEventListener("click",e=>{changChecked(e.target,c)})});