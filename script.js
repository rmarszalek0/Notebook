import anime from "/anime.es.js";
//TO DO: fake backend w postaci jsona


const sendButton = document.querySelector('.btn-primary');
const ul = document.querySelector('ul');
const inputText = document.querySelector('#input-form')
let liArr = document.querySelectorAll('li')
let blankFilled = 0

//dodawanie do listy
sendButton.addEventListener
    ('click', () => {

        if (liArr.length > 8) {//dodanie scrollbara 
            document.querySelector('ul').style.overflowY = 'scroll';
        }
        if (blankFilled !== 3 && inputText.value !== ''){    //wypełnienie pierwszych 3 rzędów
            liArr[blankFilled].textContent = inputText.value
            blankFilled++
            inputText.value = '';
            return
        }
        if (inputText.value == '') {//brak wpisanego tekstu
            console.log(inputText.value)
            anime({
                targets: '.real-center',
                easing: 'linear',
                duration: 150,
                translateX: "100%",
                translateX: [
                    {
                        value: 20,
                    },
                    {
                        value: -20,
                    },
                    {
                        value: 0,
                    },
                ],
            });
            return
        }
        let newLi = document.createElement("li");
        newLi.textContent = inputText.value;
        console.log(newLi.textContent)
        ul.appendChild(newLi)
   anime({
            targets: newLi,
            easing: 'linear',
       duration:500,
       opacity: 1,
            translateX: [
                {
                    value: 200,
                },
                {
                    
                },
                
            ],
        });
        inputText.value = '';
        liArr = document.querySelectorAll('li')
    }
)


//to samo tylko w przypadku wciśnięcia enter
inputText.addEventListener
    ('keypress', () => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (liArr.length > 8) {//dodanie scrollbara 
                document.querySelector('ul').style.overflowY = 'scroll';
            }
            if (blankFilled !== 3 && inputText.value !== ''){    //wypełnienie pierwszych 3 rzędów
                liArr[blankFilled].textContent = inputText.value
                blankFilled++
                inputText.value = '';
                return
            }
            if (inputText.value == '') {//brak wpisanego tekstu
                console.log(inputText.value)
                anime({
                    targets: '.real-center',
                    easing: 'linear',
                    duration: 150,
                    translateX: "100%",
                    translateX: [
                        {
                            value: 20,
                        },
                        {
                            value: -20,
                        },
                        {
                            value: 0,
                        },
                    ],
                });
                return
            }
            let newLi = document.createElement("li");
            newLi.textContent = inputText.value;
            console.log(newLi.textContent)
            ul.appendChild(newLi)
       anime({
                targets: newLi,
                easing: 'linear',
           duration:500,
           opacity: 1,
                translateX: [
                    {
                        value: 200,
                    },
                    {
                        
                    },
                    
                ],
            });
            inputText.value = '';
            liArr = document.querySelectorAll('li')




        }
})






//animacja usuwania

document.querySelector('.center').addEventListener
    ('mouseover', () => {
        if (blankFilled !== 3) {
        return
    } 
    let i = null
    for (i = 0; i < liArr.length; i++){
    liArr[i].addEventListener
        ('click', (e) => {
               anime({
                targets: e.target,
                translateX: -250,
                   duration: 2000,
                opacity: 0,

            
              })  
            setTimeout(() => { e.target.remove() }, 400);
            liArr--
       
       

        })
       

} 

})













