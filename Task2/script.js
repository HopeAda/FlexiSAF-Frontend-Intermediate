
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
  { id: 1, name: "Smith John", score: 85 },
  { id: 2, name: "Johnson Emily", score: 72 },
  { id: 3, name: "Williams Daniel", score: 64 },
  { id: 4, name: "Brown Sophia", score: 91 },
  { id: 5, name: "Jones Michael", score: 78 },
  { id: 6, name: "Garcia Olivia", score: 59 },
  { id: 7, name: "Miller James", score: 88 },
  { id: 8, name: "Davis Isabella", score: 95 },
  { id: 9, name: "Rodriguez Ethan", score: 47 },
  { id: 10, name: "Martinez Ava", score: 83 },
  { id: 11, name: "Hernandez Noah", score: 76 },
  { id: 12, name: "Lopez Mia", score: 68 },
  { id: 13, name: "Gonzalez Alexander", score: 54 },
  { id: 14, name: "Wilson Amelia", score: 89 },
  { id: 15, name: "Anderson Mason", score: 62 },
  { id: 16, name: "Thomas Charlotte", score: 73 },
  { id: 17, name: "Taylor Benjamin", score: 81 },
  { id: 18, name: "Moore Harper", score: 97 },
  { id: 19, name: "Jackson Elijah", score: 44 },
  { id: 20, name: "Martin Abigail", score: 90 },
  { id: 21, name: "Lee Logan", score: 67 },
  { id: 22, name: "Perez Chloe", score: 82 },
  { id: 23, name: "Thompson Lucas", score: 74 },
  { id: 24, name: "White Lily", score: 65 },
  { id: 25, name: "Harris Jacob", score: 92 },
  { id: 26, name: "Sanchez Grace", score: 87 },
  { id: 27, name: "Clark Samuel", score: 53 },
  { id: 28, name: "Ramirez Zoey", score: 70 },
  { id: 29, name: "Lewis Carter", score: 60 },
  { id: 30, name: "Robinson Layla", score: 85 },
  { id: 31, name: "Walker Jayden", score: 93 },
  { id: 32, name: "Young Penelope", score: 77 },
  { id: 33, name: "Allen David", score: 69 },
  { id: 34, name: "King Aria", score: 58 },
  { id: 35, name: "Wright Matthew", score: 84 },
  { id: 36, name: "Scott Eleanor", score: 79 },
  { id: 37, name: "Torres Joseph", score: 72 },
  { id: 38, name: "Nguyen Scarlett", score: 64 },
  { id: 39, name: "Hill Gabriel", score: 55 },
  { id: 40, name: "Flores Hannah", score: 96 },
  { id: 41, name: "Green Anthony", score: 82 },
  { id: 42, name: "Adams Victoria", score: 73 },
  { id: 43, name: "Nelson Andrew", score: 91 },
  { id: 44, name: "Baker Zoey", score: 49 },
  { id: 45, name: "Hall Joshua", score: 63 },
  { id: 46, name: "Rivera Natalie", score: 87 },
  { id: 47, name: "Campbell Christian", score: 94 },
  { id: 48, name: "Mitchell Nora", score: 59 },
  { id: 49, name: "Carter Dylan", score: 76 },
  { id: 50, name: "Roberts Aurora", score: 83 },
  { id: 51, name: "Gomez Isaac", score: 68 },
  { id: 52, name: "Phillips Hazel", score: 80 },
  { id: 53, name: "Evans Luke", score: 71 },
  { id: 54, name: "Turner Violet", score: 62 },
  { id: 55, name: "Diaz Henry", score: 93 },
  { id: 56, name: "Parker Stella", score: 77 },
  { id: 57, name: "Cruz Owen", score: 66 },
  { id: 58, name: "Edwards Zoey", score: 85 },
  { id: 59, name: "Collins Julian", score: 90 },
  { id: 60, name: "Reyes Addison", score: 52 },
  { id: 61, name: "Stewart Levi", score: 75 },
  { id: 62, name: "Morris Eleanor", score: 84 },
  { id: 63, name: "Morales Ryan", score: 61 },
  { id: 64, name: "Murphy Lillian", score: 78 },
  { id: 65, name: "Cook Caleb", score: 95 },
  { id: 66, name: "Rogers Zoey", score: 71 },
  { id: 67, name: "Morgan Nathan", score: 57 },
  { id: 68, name: "Peterson Brooklyn", score: 82 },
  { id: 69, name: "Bailey Jonathan", score: 64 },
  { id: 70, name: "Cooper Leah", score: 86 },
  { id: 71, name: "Richardson Aaron", score: 92 },
  { id: 72, name: "Cox Savannah", score: 60 },
  { id: 73, name: "Howard Adrian", score: 89 },
  { id: 74, name: "Ward Audrey", score: 73 },
  { id: 75, name: "Torres Adam", score: 58 },
  { id: 76, name: "Gray Paisley", score: 96 },
  { id: 77, name: "Ramsey Thomas", score: 70 },
  { id: 78, name: "Watson Bella", score: 83 },
  { id: 79, name: "Brooks Charles", score: 77 },
  { id: 80, name: "Kelly Anna", score: 65 },
  { id: 81, name: "Sanders Dominic", score: 59 },
  { id: 82, name: "Price Madeline", score: 91 },
  { id: 83, name: "Bennett Xavier", score: 74 },
  { id: 84, name: "Wood Sarah", score: 88 },
  { id: 85, name: "Barnes Christopher", score: 62 },
  { id: 86, name: "Ross Claire", score: 81 },
  { id: 87, name: "Henderson Eli", score: 56 },
  { id: 88, name: "Cole Peyton", score: 85 },
  { id: 89, name: "Jenkins Everly", score: 94 },
  { id: 90, name: "Perry Jordan", score: 67 },
  { id: 91, name: "Powell Camila", score: 72 },
  { id: 92, name: "Long Isaiah", score: 79 },
  { id: 93, name: "Patterson Lucy", score: 63 },
  { id: 94, name: "Hughes Asher", score: 87 },
  { id: 95, name: "Flores Mila", score: 76 },
  { id: 96, name: "Washington Leo", score: 90 },
  { id: 97, name: "Butler Ellie", score: 68 },
  { id: 98, name: "Simmons Jack", score: 55 },
  { id: 99, name: "Foster Skylar", score: 82 },
  { id: 100, name: "Gonzales Aiden", score: 93 }
];


let studentsArray = JSON.parse(localStorage.getItem('students')) || templateArray;


editList()

submitBtn.addEventListener('click', (event)=>{
   event.preventDefault()
   if(firstName.value.trim() !== '' && lastName.value.trim() !== "" && score.value !== ''){
      if(!isNaN(Number(score.value)) && Number(score.value) >= 0  && Number(score.value) <= 100){
         let studnt = {id:Date.now(), name: lastName.value + " " + firstName.value, score: Number(score.value)}
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

            item.setAttribute("data-id", itm.id)

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

               item.setAttribute("data-id", itm.id)


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
   delIdx = this.parentElement.getAttribute("data-id")

}
delConfBtn.addEventListener('click', deleteItem)

cancelBtn.addEventListener('click', ()=>{
   delCont.classList.remove('show')
   delAct.classList.remove('show')
   document.body.style.overflow = 'visible'
})

function deleteItem(){
   let mainDelId = studentsArray.find(stud => stud.id == delIdx)
   studentsArray.splice(mainDelId, 1)
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
