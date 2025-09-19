
const firstName = document.getElementById("first")
const lastName = document.getElementById("last")
const score = document.getElementById("score")
const submitBtn = document.getElementById("submit-btn")

const listContainer = document.querySelector('.list-tbl')
const summaryCont = document.querySelector('.summary')
const selectFilter = document.getElementById('select')

const newBtn = document.querySelector('.add-new')
const formBg = document.querySelector('.form-cont')
const formAct = document.querySelector('.form')
// Bring up form modal
newBtn.addEventListener('click', ()=>{
   formBg.classList.add('show')
   formAct.classList.add('show')
   firstName.focus()
   document.body.style.overflow = 'hidden'
})
formBg.addEventListener('click', ()=>{
   formBg.classList.remove('show')
   formAct.classList.remove('show')
   document.body.style.overflow = 'visible'
})


let templateArray = [
  { name: "Smith John", score: 87 },
  { name: "Johnson Emma", score: 43 },
  { name: "Williams Noah", score: 66 },
  { name: "Brown Olivia", score: 92 },
  { name: "Jones Liam", score: 15 },
  { name: "Garcia Ava", score: 73 },
  { name: "Miller Isabella", score: 58 },
  { name: "Davis Mason", score: 94 },
  { name: "Rodriguez Sophia", score: 21 },
  { name: "Martinez Lucas", score: 39 },
  { name: "Hernandez Amelia", score: 78 },
  { name: "Lopez Ethan", score: 50 },
  { name: "Gonzalez Mia", score: 99 },
  { name: "Wilson Charlotte", score: 12 },
  { name: "Anderson James", score: 64 },
  { name: "Thomas Benjamin", score: 80 },
  { name: "Taylor Harper", score: 34 },
  { name: "Moore Ella", score: 47 },
  { name: "Jackson Daniel", score: 70 },
  { name: "Martin Grace", score: 88 },
  { name: "Lee Henry", score: 59 },
  { name: "Perez Chloe", score: 25 },
  { name: "Thompson Samuel", score: 82 },
  { name: "White Evelyn", score: 46 },
  { name: "Harris Logan", score: 91 },
  { name: "Sanchez Aria", score: 63 },
  { name: "Clark David", score: 29 },
  { name: "Ramirez Zoe", score: 76 },
  { name: "Lewis Carter", score: 54 },
  { name: "Robinson Lily", score: 18 },
  { name: "Walker Owen", score: 84 },
  { name: "Young Scarlett", score: 67 },
  { name: "Allen Jack", score: 36 },
  { name: "King Layla", score: 99 },
  { name: "Wright Wyatt", score: 27 },
  { name: "Scott Hannah", score: 60 },
  { name: "Torres Luke", score: 74 },
  { name: "Nguyen Natalie", score: 10 },
  { name: "Hill Isaac", score: 96 },
  { name: "Flores Lillian", score: 41 },
  { name: "Green Gabriel", score: 85 },
  { name: "Adams Victoria", score: 52 },
  { name: "Nelson Jackson", score: 33 },
  { name: "Baker Zoey", score: 89 },
  { name: "Hall Levi", score: 19 },
  { name: "Rivera Riley", score: 75 },
  { name: "Campbell Penelope", score: 22 },
  { name: "Mitchell Sebastian", score: 98 },
  { name: "Carter Nora", score: 56 },
  { name: "Roberts Matthew", score: 31 },
  { name: "Gomez Eleanor", score: 93 },
  { name: "Phillips Aiden", score: 65 },
  { name: "Evans Stella", score: 38 },
  { name: "Turner Julian", score: 72 },
  { name: "Diaz Aurora", score: 16 },
  { name: "Parker Mila", score: 100 },
  { name: "Cruz Anthony", score: 45 },
  { name: "Edwards Camila", score: 11 },
  { name: "Collins Joseph", score: 83 },
  { name: "Reyes Paisley", score: 28 },
  { name: "Stewart Johnathan", score: 90 },
  { name: "Morris Elena", score: 35 },
  { name: "Morales Asher", score: 68 },
  { name: "Murphy Violet", score: 55 },
  { name: "Cook David", score: 13 },
  { name: "Rogers Aurora", score: 71 },
  { name: "Gutierrez Thomas", score: 40 },
  { name: "Ortiz Addison", score: 95 },
  { name: "Morgan Ezra", score: 26 },
  { name: "Cooper Hazel", score: 79 },
  { name: "Peterson Lincoln", score: 17 },
  { name: "Bailey Ellie", score: 62 },
  { name: "Reed Santiago", score: 48 },
  { name: "Kelly Brooklyn", score: 100 },
  { name: "Howard Caleb", score: 37 },
  { name: "Ramos Bella", score: 53 },
  { name: "Kim Josiah", score: 81 },
  { name: "Cox Skylar", score: 20 },
  { name: "Ward Isaiah", score: 69 },
  { name: "Richardson Lucy", score: 42 },
  { name: "Watson Charles", score: 61 },
  { name: "Brooks Savannah", score: 14 },
  { name: "Chavez Nolan", score: 86 },
  { name: "Wood Madelyn", score: 32 },
  { name: "James Elias", score: 44 },
  { name: "Bennett Aubrey", score: 9 },
  { name: "Gray Eliana", score: 97 },
  { name: "Mendoza Christopher", score: 23 },
  { name: "Ruiz Kennedy", score: 57 },
  { name: "Hughes Nathan", score: 30 },
  { name: "Price Sarah", score: 77 },
  { name: "Alvarez Dylan", score: 8 },
  { name: "Castillo Hailey", score: 49 },
  { name: "Sanders Elias", score: 7 },
  { name: "Patel Gianna", score: 51 },
  { name: "Myers Andrew", score: 24 },
  { name: "Long Anna", score: 6 },
  { name: "Ross Samuel", score: 2 },
  { name: "Foster Leah", score: 64 }
];


let studentsArray = JSON.parse(localStorage.getItem('students')) || templateArray;


editList()

submitBtn.addEventListener('click', (event)=>{
   event.preventDefault()
   if(firstName.value.trim() !== '' && lastName.value.trim() !== "" && score.value !== ''){
      if(!isNaN(Number(score.value)) && Number(score.value) >= 0  && Number(score.value) <= 100){
         let studnt = {name: lastName.value + " " + firstName.value, score: Number(score.value)}
         firstName.value = ''
         lastName.value = ''
         score.value = ''
   
         studentsArray.push(studnt)
         localStorage.setItem('students', JSON.stringify(studentsArray))
         editList()
         selectFilter.value = 'all'
         selectFilter.dispatchEvent(new Event('change'))
         firstName.focus()

      } else {
         alert("Please input a score between 0 and 100")
      }
   } else {
      alert("Please fill in all input fields")
   }
})




function editList(){
   listContainer.innerHTML = ''
   summaryCont.innerText = ''
   if(studentsArray.length == 0){
      let nun = document.createElement('P')
      nun.innerText = 'No student record'
      nun.style.marginTop = '0.5rem'
      listContainer.append(nun)
      summaryCont.innerText = "No Average"
   } else {
      if(selectFilter.value == 'all'){
         studentsArray.forEach((itm,index)=>{
            let item = document.createElement('tr')
            item.classList.add('item')
            listContainer.append(item)

            let numArea = document.createElement('td')
            numArea.innerText = index + 1;
            item.append(numArea)
      
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
      
            let btnArea = document.createElement('td')
            let delBtn = document.createElement('button')
            delBtn.classList.add('del-btn')
            let delImg = document.createElement('img');
            delImg.src = './bin.png'
            delBtn.append(delImg)
            item.append(delBtn)
            btnArea.append(delBtn)
            item.append(btnArea)
            btnArea.addEventListener('click', confirmDelete)
   
         })
         let sumScores = studentsArray.reduce((acc, curnt) => acc + curnt.score, 0)
         summaryCont.innerText = "The average score of the class is " + (sumScores/studentsArray.length).toFixed(2)
      } else {
         let filteredItm = studentsArray.filter((itm)=>{
            return getGrade(itm.score) == selectFilter.value
         })

         if(filteredItm.length == 0){
            let emp = document.createElement("P")
            emp.innerText = "No Record"
            summaryCont.innerText = "No Average"
            listContainer.append(emp)

         } else {
            filteredItm.forEach((itm,index)=>{
               let item = document.createElement('tr')
               item.classList.add('item')
               listContainer.append(item)

            let numArea = document.createElement('td')
            numArea.innerText = index + 1;
            item.append(numArea)

         
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
         
            let btnArea = document.createElement('td')
            let delBtn = document.createElement('button')
            delBtn.classList.add('del-btn')
            let delImg = document.createElement('img');
            delImg.src = './bin.png'
            delBtn.append(delImg)
            item.append(delBtn)
            btnArea.append(delBtn)
            item.append(btnArea)
            btnArea.addEventListener('click', confirmDelete)
      
            })
            let sumScores = filteredItm.reduce((acc, curnt) => acc + curnt.score, 0)
            summaryCont.innerText = "The average score of the students with a grade " + selectFilter.value +" is " + (sumScores/filteredItm.length).toFixed(2)

         }
      }
   }
}

const delCont = document.querySelector('.deleteCont');
const delAct = document.querySelector('.deleteConfirm')
const delConfBtn = document.querySelector('.delBtnConf')
const cancelBtn = document.querySelector('.cancelBtn')
const delConfTitle = document.querySelector('.delConfTitle')
let delIdx
function confirmDelete(){
   delCont.classList.add('show')
   delAct.classList.add('show')
   document.body.style.overflow = 'hidden'
   delIdx = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement)
}
delConfBtn.addEventListener('click', deleteItem)

cancelBtn.addEventListener('click', ()=>{
   delCont.classList.remove('show')
   delAct.classList.remove('show')
   document.body.style.overflow = 'visible'
})

function deleteItem(){
   studentsArray.splice(delIdx, 1)
   editList()
   localStorage.setItem('students', JSON.stringify(studentsArray))

   // Remove the delete modal
   delCont.classList.remove('show')
   delAct.classList.remove('show')

}


function getGrade (num){
   if(num >= 70){
      return 'A'
   } else if(num < 70 && num >= 60){
      return 'B'

   } else if (num < 60 && num >= 50){
      return 'C'

   } else if (num < 50 && num >= 45){
      return 'D'

   } else if (num < 45){
      return 'F'

   }
}


selectFilter.addEventListener('change', ()=>{
   editList()
})



// Clear the list
const clearConf = document.querySelector('.clearAllConfirm')

function clearAllConf(){
   delCont.classList.add('show')
   clearConf.classList.add('show')
   document.body.style.overflow = 'hidden'
   delIdx = Array.from(this.parentElement.parentElement.children).indexOf(this.parentElement)

}

const clearAll = document.querySelector('.clearAll')
clearAll.addEventListener('click', clearAllConf)

const clearBtn = document.querySelector('.clearAllConf');
clearBtn.addEventListener('click', ()=>{
   studentsArray.length = 0
   editList()
   localStorage.setItem('students', JSON.stringify(studentsArray))
   delCont.classList.remove('show')
   clearConf.classList.remove('show')
})

const clearCancel = document.querySelector('.clearCancelBtn')
clearCancel.addEventListener('click', ()=>{
   delCont.classList.remove('show')
   clearConf.classList.remove('show')
   document.body.style.overflow = 'visible'
})
