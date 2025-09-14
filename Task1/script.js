
const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const score = document.getElementById("score")
const submitBtn = document.getElementById("submit-btn")

const listContainer = document.querySelector('.list-tbl')
const summaryCont = document.querySelector('.summary')
const selectFilter = document.getElementById('select')



let studentsArray = []
editList()

submitBtn.addEventListener('click', (event)=>{
   event.preventDefault()
   if(firstName.value !== '' && lastName.value !== "" && score.value !== ''){
      let studnt = {name: lastName.value + " " + firstName.value, score: Number(score.value)}
      firstName.value = ''
      lastName.value = ''
      score.value = ''

      studentsArray.push(studnt)
      editList()
      selectFilter.value = 'all'
   }
})




function editList(){
   listContainer.innerHTML = ''
   summaryCont.innerText = ''
   if(studentsArray.length == 0){
      let nun = document.createElement('P')
      nun.innerText = 'No student record'
      listContainer.append(nun)
   } else {
      if(selectFilter.value == 'all'){
         studentsArray.map((itm)=>{
            let item = document.createElement('tr')
            item.classList.add('item')
            listContainer.append(item)
      
            let nameArea = document.createElement('td')
            nameArea.classList.add('name')
            nameArea.innerText = itm.name
            item.append(nameArea)
      
            
            let scoreArea = document.createElement('td')
            scoreArea.classList.add('score')
            scoreArea.innerText =  + itm.score
            item.append(scoreArea)
   
            let gradeArea = document.createElement('td')
            gradeArea.classList.add('grade')
            gradeArea.innerText = getGrade(itm.score)
            item.append(gradeArea)
      
            let delBtn = document.createElement('button')
            delBtn.classList.add('del-btn')
            delBtn.innerText = 'DELETE'
            item.append(delBtn)
            delBtn.addEventListener('click', deleteItem)
   
            let sumScores = studentsArray.reduce((acc, curnt) => acc + curnt.score, 0)
            summaryCont.innerText = "The average score of the class is " + (sumScores/studentsArray.length).toFixed(2)
         })
      } else {
         let filteredItm = studentsArray.filter((itm)=>{
            return getGrade(itm.score) == selectFilter.value
         })

         if(filteredItm.length == 0){
            let emp = document.createElement("P")
            emp.innerText = "No Record"
            listContainer.append(emp)

         } else {
            filteredItm.map((itm)=>{
               let item = document.createElement('tr')
               item.classList.add('item')
               listContainer.append(item)
         
               let nameArea = document.createElement('td')
               nameArea.classList.add('name')
               nameArea.innerText =  itm.name
               item.append(nameArea)
         
               
               let scoreArea = document.createElement('td')
               scoreArea.classList.add('score')
               scoreArea.innerText =  itm.score
               item.append(scoreArea)
      
               let gradeArea = document.createElement('td')
               gradeArea.classList.add('grade')
               gradeArea.innerText = getGrade(itm.score)
               item.append(gradeArea)
         
               let delBtn = document.createElement('button')
               delBtn.classList.add('del-btn')
               delBtn.innerText = 'DELETE'
               item.append(delBtn)
               delBtn.addEventListener('click', deleteItem)
      
               let sumScores = studentsArray.reduce((acc, curnt) => acc + curnt.score, 0)
               summaryCont.innerText = "The average score of the students with a grade " + selectFilter.value +" is " + (sumScores/filteredItm.length).toFixed(2)
            })

         }
      }
   }
}

function deleteItem(){
   let idx = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement)
   studentsArray.splice(idx, 1)
   editList()
}


function getGrade (num){
   if(num > 75){
      return 'A'
   } else if(num < 75 && num >= 65){
      return 'B'

   } else if (num < 65 && num >= 55){
      return 'C'

   } else if (num < 55 && num >= 45){
      return 'P'

   } else if (num < 45){
      return 'F'

   }
}


selectFilter.addEventListener('change', ()=>{
   editList()
})