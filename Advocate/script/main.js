// HEADER

// Definiowanie obiektu - header slider
let headerSliderObj = {
    SliderContainer: document.getElementById('header-slider-list'),
    SliderItems: document.getElementsByClassName('header-slider-item'),
    SliderButtonLeft: document.getElementById('header-left-button'),
    SliderButtonRight: document.getElementById('header-right-button'),
    SliderNumber: 0,
    SlideItemClass: 'header-slider-item',
    newSlideFirstItem: 'new-header-slide-first-item',
    NewSlideLastItem: 'new-header-slide-last-item',
    CenterButtonsAreaButton: 'header-center-buttons-area-button',
    CenterButtonsArea: 'header-center-buttons-area',
    activeClass: 'header-active',
    BulletButtons: document.getElementsByClassName('header-center-buttons-area-button'),
    letsSlideStart: 0,
    BulletButtons: document.getElementsByClassName('header-center-buttons-area-button'),
    BulletButtonContainer: document.getElementById('header-center-buttons-area')
}

// Definiowanie obiektu - comment slider
let commentSliderObj = {
    SliderContainer: document.getElementById('comment-slider-list'),
    SliderItems: document.getElementsByClassName('comment-slider-item'),
    SliderButtonLeft: document.getElementById('comment-left-button'),
    SliderButtonRight: document.getElementById('comment-right-button'),
    SliderNumber: 0,
    SlideItemClass: 'comment-slider-item',
    newSlideFirstItem: 'new-comment-slide-first-item',
    NewSlideLastItem: 'new-comment-slide-last-item',
    CenterButtonsAreaButton: 'comment-center-buttons-area-button',
    CenterButtonsArea: 'comment-center-buttons-area',
    activeClass: 'comment-active',
    BulletButtons: document.getElementsByClassName('comment-center-buttons-area-button'),
    letsSlideStart: 0,
    BulletButtons: document.getElementsByClassName('comment-center-buttons-area-button'),
    BulletButtonContainer: document.getElementById('comment-center-buttons-area')
}

// Definiowanie funkcji budującej slider
letsSlide = function (parametr) {

        // dodanie ostatniego i pierwszego
    SlideListChanger = function () {
        let newSliderFirstItem= document.createElement('li')
        newSliderFirstItem.innerHTML = parametr.SliderItems[parametr.SliderItems.length-1].innerHTML;
        newSliderFirstItem.classList.add(parametr.SlideItemClass)
        newSliderFirstItem.setAttribute('id', parametr.newSlideFirstItem)
        let newSliderLastItem= document.createElement('li')
        newSliderLastItem.innerHTML = parametr.SliderItems[0].innerHTML;
        newSliderLastItem.classList.add(parametr.SlideItemClass)
        newSliderLastItem.setAttribute('id', parametr.NewSlideLastItem)
        parametr.SliderContainer.appendChild(newSliderLastItem)
        parametr.SliderContainer.insertBefore(newSliderFirstItem, parametr.SliderContainer.childNodes[0])
    }

    SlideListChanger(parametr);

    // rozwinięcie kropek
    BulletButtonBuilder = function () {
        if(parametr.letsSlideStart === 0)
        for (let i = 0; parametr.SliderItems.length-3 > i; i++){
            let newBulletButton = document.createElement('button')
            newBulletButton.classList.add(parametr.CenterButtonsAreaButton)
            parametr.BulletButtonContainer.appendChild(newBulletButton)
            parametr.BulletButtons[0].classList.add(parametr.activeClass)
        }
        parametr.letsSlideStart = 1;
    }

    BulletButtonBuilder(parametr)

    // obsługa kropek
    for (let i = 0; parametr.BulletButtons.length > i; i++) {
        parametr.BulletButtons[i].addEventListener("click", function() {
            parametr.SliderContainer.style.transition = "transform 0.8s ease-in-out";
            parametr.SliderContainer.style.transform = 'translateX(' + (-parametr.SliderItems[0].clientWidth * i) + 'px';
            parametr.SliderNumber = i;
            BulletButtonBuilder(parametr)
            clearInterval(SliderInterval);
        SliderInterval = setInterval (SliderintervalFunction, 5000)
        })
    }

    // obsługa kropek - doddanie aktywacji
    BulletButtonActiveBuilder = function (parametr) {
        parametr.BulletButtons[parametr.SliderNumber].classList.add(parametr.activeClass)
    }

    // obsługa slidera
    parametr.SliderButtonRight.addEventListener('click', function (){
        if (parametr.SliderNumber >= parametr.SliderItems.length -2) return 
        parametr.SliderContainer.style.transition = "transform 0.8s ease-in-out";
        parametr.SliderNumber++;
        parametr.SliderContainer.style.transform = 'translateX(' + (-parametr.SliderItems[0].clientWidth * parametr.SliderNumber) + 'px';
        clearInterval(SliderInterval);            
        SliderInterval = setInterval (SliderintervalFunction, 5000)
    })

    parametr.SliderButtonLeft.addEventListener('click', function (){
        if (parametr.SliderNumber <= -1) return 
        parametr.SliderContainer.style.transition = "transform 0.8s ease-in-out";
        parametr.SliderNumber--;
        parametr.SliderContainer.style.transform = 'translateX(' + (-parametr.SliderItems[0].clientWidth * parametr.SliderNumber) + 'px';
        clearInterval(SliderInterval);
        SliderInterval = setInterval (SliderintervalFunction, 5000)
    })

    parametr.SliderContainer.addEventListener('transitionstart',function (){
        for (let i = 0; parametr.BulletButtons.length > i; i++){
            parametr.BulletButtons[i].classList.remove(parametr.activeClass)
        }
    })
        
    parametr.SliderContainer.addEventListener('transitionend',function (){
        if (parametr.SliderItems[parametr.SliderNumber+1].id === parametr.NewSlideLastItem){
            parametr.SliderContainer.style.transition = "none";
            parametr.SliderNumber = 0;
            parametr.SliderContainer.style.transform = 'translateX(' + (-parametr.SliderItems[0].clientWidth * parametr.SliderNumber) + 'px';
        }
        if (parametr.SliderItems[parametr.SliderNumber+1].id === parametr.newSlideFirstItem){
            parametr.SliderContainer.style.transition = "none";
            parametr.SliderNumber = parametr.SliderItems.length - 3;
            parametr.SliderContainer.style.transform = 'translateX(' + (-parametr.SliderItems[0].clientWidth * parametr.SliderNumber) + 'px';
        }
        BulletButtonActiveBuilder(parametr)
    })

    // // Zapętlenie
    let SliderintervalFunction = function(){
        if (parametr.SliderNumber >= parametr.SliderItems.length -2) return 
        parametr.SliderContainer.style.transition = "transform 0.8s ease-in-out";
        parametr.SliderNumber++;
        parametr.SliderContainer.style.transform = 'translateX(' + (-parametr.SliderItems[0].clientWidth * parametr.SliderNumber) + 'px';
    }

    let SliderInterval = setInterval (SliderintervalFunction, 5000)

    // Dopasowanie do okna
    window.addEventListener('resize', function(){
        parametr.SliderContainer.style.transition = "none";
        parametr.SliderContainer.style.transform = 'translateX(' + (-parametr.SliderItems[0].clientWidth * parametr.SliderNumber) + 'px';
    });

}

letsSlide(headerSliderObj)
letsSlide(commentSliderObj)


// HEADER
// NAV


let basicNavButton = document.getElementById('basic-nav-button')
let basicNavList = document.getElementById('basic-nav-list')

basicNavButton.addEventListener('click', function () {
    basicNavList.classList.toggle('display-none');
})

// NAV
// FAQ

let FAQObj = {
    questionsListElementButtons: document.querySelectorAll('.questions-list-element-button'),
    answerListElementText: document.querySelectorAll('answer-list-element-text'),
    qArea: document.getElementById('width-changer'),
    aArea: document.getElementById('answer-container'),  
    aAreaContent: document.getElementById('answer-area'),
    text: document.querySelectorAll('.answer-list-element-text')
}

letsAnswer = function (parametr){
    for (let i = 0; parametr.questionsListElementButtons.length > i; i++) {

        parametr.questionsListElementButtons[i].addEventListener('click', function(){

            if( parametr.questionsListElementButtons[i].classList.contains('on-active') == false){
                for (let i = 0; parametr.questionsListElementButtons.length > i; i++) {
                    parametr.questionsListElementButtons[i].classList.remove('on-active')
                    parametr.questionsListElementButtons[i].innerHTML="+"}
                parametr.questionsListElementButtons[i].classList.add('on-active')
                parametr.questionsListElementButtons[i].innerHTML="-"
                parametr.qArea.classList.add('on-active')
                parametr.aArea.classList.add('on-active')
                parametr.aAreaContent.innerText = parametr.text[i].innerHTML
                parametr.aAreaContent.classList.add('on-active')
                
            } else {
                for (let i = 0; parametr.questionsListElementButtons.length > i; i++) {
                    parametr.questionsListElementButtons[i].classList.remove('on-active')
                    parametr.questionsListElementButtons[i].innerHTML="+"
                    parametr.qArea.classList.remove('on-active')
                    parametr.aArea.classList.remove('on-active')
                    parametr.aAreaContent.innerText = ""
                    parametr.aAreaContent.classList.remove('on-active')
                }
            }
        })
    }
}

letsAnswer(FAQObj)


// FAQ 
// VALIDATION

let submitForm = document.getElementById('form');
let validationInfo = document.getElementById('validation-info');

function validation(event) {
    validationInfo.innerHTML = '';
    
    let error = false;

    let nameData = {
        inputValue: document.getElementById('name-input'),
        validationInfoText: 'Name is required.'
    };
    nameData.inputValue.classList.remove('form-error')
    if (nameData.inputValue.value.trim() === '') {
        error = true
        nameData.inputValue.classList.add('form-error')
        let newValidationInfo = document.createElement('li');
        newValidationInfo.classList.add('form-error')
        newValidationInfo.innerText = nameData.validationInfoText;
        validationInfo.appendChild(newValidationInfo);
        event.preventDefault();
    };

    let emailData = {
        inputValue: document.getElementById('email-input'),
        validationInfoText1: 'Email is required.',
        validationInfoText2: 'Email must contain @.'
    };
    emailData.inputValue.classList.remove('form-error')
    if (emailData.inputValue.value.trim() === '') {
        error = true
        emailData.inputValue.classList.add('form-error')
        let newValidationInfo = document.createElement('li');
        newValidationInfo.classList.add('form-error')
        newValidationInfo.innerText = emailData.validationInfoText1;
        validationInfo.appendChild(newValidationInfo);
        event.preventDefault();
    } else if (!emailData.inputValue.value.includes('@')){
        error = true
        emailData.inputValue.classList.add('form-error')
        let newValidationInfo = document.createElement('li');
        newValidationInfo.classList.add('form-error')
        newValidationInfo.innerText = emailData.validationInfoText2;
        validationInfo.appendChild(newValidationInfo);
        event.preventDefault();
    };
    
    let phoneData = {
        inputValue: document.getElementById('phone-input'),
        validationInfoText1: 'Phone is required.',
        validationInfoText2: 'Wrong phone number.'
    };
    phoneData.inputValue.classList.remove('form-error')
    if (phoneData.inputValue.value.trim() === '') {
        error = true
        phoneData.inputValue.classList.add('form-error')
        let newValidationInfo = document.createElement('li');
        newValidationInfo.classList.add('form-error')
        newValidationInfo.innerText = phoneData.validationInfoText1;
        validationInfo.appendChild(newValidationInfo);
        event.preventDefault();
    } else if (isNaN(parseInt(phoneData.inputValue.value)) == true){
        error = true
        phoneData.inputValue.classList.add('form-error')
        let newValidationInfo = document.createElement('li');
        newValidationInfo.classList.add('form-error')
        newValidationInfo.innerText = phoneData.validationInfoText2;
        validationInfo.appendChild(newValidationInfo);
        event.preventDefault();
    };
    
    let textData = {
        inputValue: document.getElementById('message-input'),
        validationInfoText: 'Message is required.'
    };
    textData.inputValue.classList.remove('form-error')
    if (textData.inputValue.value.trim() === '') {
        error = true
        textData.inputValue.classList.add('form-error')
        let newValidationInfo = document.createElement('li');
        newValidationInfo.classList.add('form-error')
        newValidationInfo.innerText = textData.validationInfoText;
        validationInfo.appendChild(newValidationInfo);
        event.preventDefault();
    };
    
    if (error === false) {

        let newValidationInfo = document.createElement('li');
        newValidationInfo.classList.add('form-done')
        newValidationInfo.innerText = "Thank you, the message has been sent. ";
        validationInfo.appendChild(newValidationInfo);
        event.preventDefault();
    }
}

submitForm.addEventListener('submit', validation);

// VALIDATION
// CONTRAST

let allP = document.querySelectorAll('p');
let allSpan = document.querySelectorAll('span');
let allH1 = document.querySelectorAll('h1');
let allH2 = document.querySelectorAll('h2');
let allH3 = document.querySelectorAll('h3');
let allA = document.querySelectorAll('a');
let allButton = document.querySelectorAll('button');
let allInput = document.querySelectorAll('input');
let allTextArea = document.querySelectorAll('textarea');
let allBlack = document.getElementsByClassName('black')
let body = document.querySelectorAll('body')
let nav = document.querySelectorAll('nav')
let button = document.getElementById('text-contrast-button');
let mainNav = document.querySelectorAll('div.main-nav')

button.addEventListener('click', function(){
    for (let i=0; allP.length>i; i++) {
        allP[i].classList.toggle('contrast-text'); 
        }
    for (let i=0; allH1.length>i; i++){
        allH1[i].classList.toggle('contrast-text')
    }
    for (let i=0; allH2.length>i; i++){
        allH2[i].classList.toggle('contrast-text')
    }
    for (let i=0; allH3.length>i; i++){
        allH3[i].classList.toggle('contrast-text')
    }
    for (let i=0; allA.length>i; i++){
        allA[i].classList.toggle('contrast-text')
    }
    for (let i=0; allButton.length>i; i++){
        allButton[i].classList.toggle('contrast-text')
    }
    for (let i=0; allSpan.length>i; i++){
        allSpan[i].classList.toggle('contrast-text')
    }
    for (let i=0; allInput.length>i; i++){
        allInput[i].classList.toggle('contrast-text')
    }
    for (let i=0; allTextArea.length>i; i++){
        allTextArea[i].classList.toggle('contrast-text')
    }
    for (let i=0; allBlack.length>i; i++){
        allBlack[i].classList.toggle('contrast-text')
    }
    for (let i=0; body.length>i; i++){
        body[i].classList.toggle('contrast-text')
    }
    for (let i=0; nav.length>i; i++){
        nav[i].classList.toggle('contrast-text')
    }
    for (let i=0; mainNav.length>i; i++){
        mainNav[i].classList.toggle('contrast-text')
    }
})

// CONTRAST