const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const score = document.getElementById("score")
const submitBtn = document.getElementById("submit-btn")

const listContainer = document.querySelector('.list')



let studentsArray = []
editList()

submitBtn.addEventListener('click', (event)=>{
   event.preventDefault()
   if(firstName.value !== '' && lastName.value !== "" && score.value !== ''){
      let studnt = {name: lastName.value + " " + firstName.value, score: Number(score.value)}
      firstName.value = ''
      lastName.value = ''
      score.value = ''
      console.log(studnt)
      studentsArray.push(studnt)
      console.log(studentsArray)
      editList()
   }
})




function editList(){
   listContainer.innerHTML = ''
   if(studentsArray.length == 0){
      let nun = document.createElement('P')
      nun.innerText = 'No student record'
      listContainer.append(nun)
   } else {
      studentsArray.forEach((itm)=>{
         let item = document.createElement('div')
         item.classList.add('item')
         listContainer.append(item)
   
         let nameArea = document.createElement('div')
         nameArea.classList.add('name')
         nameArea.innerText = itm.name
         item.append(nameArea)
   
         
         let scoreArea = document.createElement('div')
         scoreArea.classList.add('score')
         scoreArea.innerText = "Score: " + itm.score
         item.append(scoreArea)
   
         let delBtn = document.createElement('button')
         delBtn.classList.add('del-btn')
         delBtn.innerText = 'DELETE'
         item.append(delBtn)
         delBtn.addEventListener('click', deleteItem)
      })
   }
}

function deleteItem(){
   let idx = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement)
   console.log('idx of itm is', idx)
   studentsArray.splice(idx, 1)
   console.log(studentsArray)
   editList()
}