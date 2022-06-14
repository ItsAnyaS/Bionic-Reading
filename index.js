window.addEventListener('load', () => {
    const conatiner = document.querySelector('.contianer');
    const content = document.querySelector('.content');
    const body = document.querySelector('.body');
    const form = document.querySelector('.form');
    





    let x = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`




function toBionic(str){
  let tempArr = str.split(' ')
  for (let i = 0; i < tempArr.length; i++){
      if (tempArr[i].length > 100){
        let space = document.createElement('p')
        space.innerHTML = '&nbsp'
        let count = 0
        for (let k = 0; k < tempArr[i].length; k++){
        let xPar = document.createElement('span')     
        let yPar = document.createElement('span')  
        if (count < 8){
          xPar.innerHTML = tempArr[i][k]
          xPar.style.fontWeight = 'bold'
          count++
        } else {
        yPar.innerHTML = tempArr[i][k]
        yPar.style.fontWeight = 'normal'
        count++
        }  
        content.appendChild(xPar)
        content.appendChild(yPar)   
        content.appendChild(space)   
        }
      } else if (tempArr[i].length > 7){
        let count = 0
        let space = document.createElement('p')
        space.innerHTML = '&nbsp'
        for (let k = 0; k < tempArr[i].length; k++){
        let xPar = document.createElement('span')     
        let yPar = document.createElement('span')  
       
        if (count < 5){
          xPar.innerHTML = tempArr[i][k]
          xPar.style.fontWeight = 'bold'
          count++
        } else {
        yPar.innerHTML = tempArr[i][k]
        yPar.style.fontWeight = 'normal'
        count++
        }  
        content.appendChild(xPar)
        content.appendChild(yPar)   
        content.appendChild(space)   
        }
      } else if (tempArr[i].length > 5){
        let count = 0
        let space = document.createElement('p')
        space.innerHTML = '&nbsp'
        for (let k = 0; k < tempArr[i].length; k++){
        let xPar = document.createElement('span')     
        let yPar = document.createElement('span')  
        let test = document.createElement('span')
        if (count < 4){
          xPar.innerHTML = tempArr[i][k]
          xPar.style.fontWeight = 'bold'
          count++
        } else {
        yPar.innerHTML = tempArr[i][k]
        yPar.style.fontWeight = 'normal'
        count++
        } 
        content.appendChild(xPar)
        content.appendChild(yPar)
        content.appendChild(space)
        }
      } else if (tempArr[i].length >= 1){
        let count = 0
        let space = document.createElement('p')
        space.innerHTML = '&nbsp'
        for (let k = 0; k < tempArr[i].length; k++){
        let xPar = document.createElement('span')     
        let yPar = document.createElement('span')  
        let test = document.createElement('span')
        if (count < 5){
          xPar.innerHTML = tempArr[i][k]
          xPar.style.fontWeight = 'bold'
          count++
        } else {
        yPar.innerHTML = tempArr[i][k]
        yPar.style.fontWeight = 'normal'
        count++
        }  
        content.appendChild(xPar)
        content.appendChild(yPar)
        content.appendChild(space)
       }
   }} 

   conatiner.appendChild(content)
    body.appendChild(conatiner)
  

}

toBionic(x)
})

/*

##TODO##

work on bolded key
work on numbers

iterate through each word in the string
iterate and count each letter in the word
bold them when

If 1 letter bold
if < 5 letters 2 bold 
if < 7 letters 3 bold 
if < 10 letters 4 bold 
else bold 1/2


*/