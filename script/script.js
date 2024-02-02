const texts = [
	{
		id: 1,
		text: "Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют от нас анализа модели развития. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание дальнейших направлений развития."
	},
	{
		id: 2,
		text: "Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям. Таким образом реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий."
	},
	{
		id: 3,
		text: "Не следует, однако забывать, что сложившаяся структура организации позволяет выполнять важные задания по разработке системы обучения кадров, соответствует насущным потребностям. Разнообразный и богатый опыт консультация с широким активом способствует подготовки и реализации форм развития. Задача организации, в особенности же консультация с широким активом в значительной степени обуславливает создание форм развития. Задача организации, в особенности же консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации. Повседневная практика показывает, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач."
	},
	{
		id: 4,
		text: "Задача организации, в особенности же укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Товарищи! сложившаяся структура организации в значительной степени обуславливает создание дальнейших направлений развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции способствует подготовки и реализации соответствующий условий активизации. Таким образом укрепление и развитие структуры требуют определения и уточнения направлений прогрессивного развития."
	}
];


const btnsContainer = document.querySelector('.btns');
btnsContainer.innerHTML = ''; // Очищаем содержимое контейнера кнопок старое

for (let i = 0; i < texts.length; i++) {
    const button = document.createElement('button');
    button.innerText = `${i + 1} text`;
    btnsContainer.appendChild(button);
}
const btnsNodeList= document.querySelectorAll(".btns button");

  btnsNodeList.forEach(elem => {
    elem.addEventListener("click", event =>{
        const btnIndex = [...btnsNodeList].indexOf(event.target);
    // console.log(btnIndex);
    // const {text} = texts.filter(elem => elem.id === btnIndex + 1);
    const text = texts.find(({id}) => id === btnIndex + 1).text;
    //const {text} = texts.find(({id}) => id === btnIndex + 1);//второй вариант написания
    const currentTextNode = document.querySelector(".current_text");
    currentTextNode.innerText = text;
})
})
const leftButtonNode = document.getElementById("left_button");
const rightButtonNode = document.getElementById("right_button");
// leftButtonNode.type = "button";
// rightButtonNode.type = "button";

let textIndex=0;
rightButtonNode.addEventListener("click", () => {
    
    if (textIndex=== texts.length-1) {
        textIndex = 0;
    } else {
        textIndex++;
    }
     const text= texts[textIndex].text;
     const currentTextNode = document.querySelector(".current_text");
     currentTextNode.innerText = text;
     //localStorage.setItem('textIndex', textIndex); 
});

leftButtonNode.addEventListener ("click", ()=> {
    // console.log("begin",textIndex); 
    if (textIndex===0){
        textIndex=texts.length-1;
    }else{
       textIndex--; 
    }
    const text = texts[textIndex].text;
    const currentTextNode = document.querySelector(".current_text");
    currentTextNode.innerHTML = `<p>${text}</p>`;

    //localStorage.setItem('textIndex', textIndex); 
     //console.log("end",text);
 });
  