const allButtons = document.querySelectorAll('button.dropbtn');

allButtons.forEach(btn=>
  {
  btn.onclick=()=>{
    allButtons.forEach(btn_X=>
      {
      let divContent = btn_X.nextElementSibling
      if ( btn===btn_X) divContent.classList.toggle('show')
      else divContent.classList.remove('show')
      })
    }
  })

// Close the dropdown if the user clicks outside of it
window.onclick =e=>
  {
  if (e.target.matches('.dropbtn')) return
  allButtons.forEach(btn=>btn.nextElementSibling.classList.remove('show'))
}