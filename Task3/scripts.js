const submitBtn = document.querySelector('.submit')
const nameArea = document.getElementById("name")
const emailArea = document.getElementById("email")
const msgArea = document.getElementById('msg')
const formItm = document.querySelector('footer form')


function submitHandler(event){
   event.preventDefault()
   let nameInfo = nameArea.value
   let emailInfo = emailArea.value
   let msgInfo = msgArea.value

   if(nameInfo.trim() != "" && validateEmail(emailInfo.trim()) != null & msgInfo.trim() != ""){

      let dataInfo = {Name: nameInfo, Email: emailInfo, Message: msgInfo}
   
   
      fetch("https://formspree.io/f/mqayejqy", {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(dataInfo),
      })
      .then(res => res.json())
      .then(data => console.log("Sent successfully: ", data))
      .catch(err => console.log("Error: ", err))
   
      document.querySelector('.success-msg').classList.add('show');

      setTimeout(()=>{
      document.querySelector('.success-msg').classList.remove('show');

      }, 5000)
      console.log(dataInfo)
      formItm.reset()
   }

}

function validateEmail(email){
   return String(email).match(
         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      )
}


submitBtn.addEventListener('click', submitHandler)