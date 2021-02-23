var menuSelector = function (space) {
  this.space = space;
  this.init();
};

menuSelector.prototype.init = function () {
  this.food0 = [{ name: "Stew", src: "menu/food/국밥.jpg" }, { name: "Pho", src: "menu/food/쌀국수.jpeg" }, { name: "Noodle", src: "menu/food/라면.jpg" }, 
  { name: "Rib stew", src: "menu/food/갈비탕.jpg" },{ name: "Chicken soup", src: "menu/food/삼계탕.jpg" }, 
  { name: "Redbean porridge", src: "menu/food/팥죽.jpg" }, { name: "Seafood noodle soup", src: "menu/food/짬뽕.jpg" }, 
  { name: "Thick noodle soup", src: "menu/food/칼국수.jpg" }, { name: "Nabe", src: "menu/food/샤브샤브.jpg" }, 
  { name: "Seafood stew", src: "menu/food/해물탕.jpg" }, { name: "Fish egg soup", src: "menu/food/알탕.jpg" }, { name: "Burnt rice", src: "menu/food/누룽지.jpeg" }, 
  { name: "Porridge", src: "menu/food/죽.jpg" }, { name: "Udon", src: "menu/food/우동.jpeg" }, { name: "Arme stew", src: "menu/food/부대찌개.jpg"}]

  // hot 
  this.food1 = [{ name: "Cold noodle", src: "menu/food/냉면.jpeg" }, { name: "냉모밀", src: "menu/food/냉모밀.jpg" }, { name: "콩국수", src: "menu/food/콩국수.jpg" },
  { name: "North Korean style cold noodle", src: "menu/food/평양냉면.jpg" }, { name: "Pad thai", src: "menu/food/팟타이.jpg" }, { name: "Vietnamese", src: "menu/food/분짜.jpg" }, 
  { name: "Salmon sashimi", src: "menu/food/연어회.jpg" }, { name: "Leaf meal", src: "menu/food/쌈밥.jpg" }, { name: "Cold Ramen", src: "menu/food/냉라멘.jpg" }, 
  { name: "Cold seafood noodle soup", src: "menu/food/냉짬뽕.jpg" },  { name: "Chicken soup", src: "menu/food/삼계탕.jpg" }]

  // raining 
  this.food2 = [{ name: "Seafood noodle soup", src: "menu/food/짬뽕.jpg" }, { name: "Thick noodle soup", src: "menu/food/칼국수.jpg" }, { name: "Fish bone soup", src: "menu/food/매운탕.jpg" }, 
  { name: "Fish egg soup", src: "menu/food/알탕.jpg" }, { name: "수제비", src: "menu/food/수제비.jpg" }, { name: "잔치국수", src: "menu/food/잔치국수.jpg" }, 
  { name: "Ramen", src: "menu/food/라멘.jpg" }, { name: "Tofu stew", src: "menu/food/순두부.jpg" }, { name: "Black noodle", src: "menu/food/짜장면.jpg" }, 
  { name: "Pork bone stew", src: "menu/food/뼈해장국.jpeg" }, { name: "Pork intestine noodle", src: "menu/food/곱창전골.jpg" },{ name: "Fried chicken", src: "menu/food/치킨.jpg" }, 
  { name: "Pizza", src: "menu/food/피자.jpeg" }]

  // Pissed off
  this.food3 = [{ name: "Spicy braised pork", src: "menu/food/불족발.jpg" }, { name: "Spicy chicken stew", src: "menu/food/닭볶음탕.jpeg" }, { name: "Seafood noodle soup", src: "menu/food/짬뽕.jpg" }, 
  { name: "Noodle", src: "menu/food/라면.jpg" }, { name: "Pork bone stew", src: "menu/food/뼈해장국.jpeg" }, { name: "Steamed fish", src: "menu/food/아구찜.jpg" }, 
  { name: "Ma-ra soup", src: "menu/food/마라탕.jpeg" }, { name: "Whole chicken soup", src: "menu/food/닭한마리.jpg" }, { name: "Spicy rib stew", src: "menu/food/매운갈비찜.jpg" },
  { name: "Steamed seafood", src: "menu/food/해물찜.jpg" }, { name: "Spicy octopus", src: "menu/food/불낙지.png" }, { name: "Chicken feet", src: "menu/food/닭발.jpg" }]

  // depressed 
  this.food4 = [{ name: "Seafood noodle soup", src: "menu/food/짬뽕.jpg" }, { name: "Cream pasta", src: "menu/food/크림파스타.jpg" }, { name: "Cold noodle", src: "menu/food/냉면.jpeg" },
  { name: "Spicy cold noodle", src: "menu/food/쫄면.jpg" }, { name: "White noodle", src: "menu/food/울면.jpg" }, { name: "Bibimbap", src: "menu/food/비빔밥.jpg" }, 
  { name: "Burger", src: "menu/food/수제버거.jpg" }]

  // pay day 
  this.food5 = [{ name: "Beef BBQ", src: "menu/food/소고기.jpg" }, { name: "Pork belly BBQ", src: "menu/food/삼겹살.jpg" }, { name: "Tuna sashimi", src: "menu/food/참치회.jpg" }, 
  { name: "Steak", src: "menu/food/스테이크.jpeg" }, { name: "Steamed Ox tail", src: "menu/food/소꼬리찜.jpg" }, { name: "Lobster", src: "menu/food/랍스터.jpg" }, 
  { name: "King crab", src: "menu/food/킹크랩.jpg" },{ name: "Steamed seafood", src: "menu/food/해물찜.jpg" }, { name: "Lamb chop", src: "menu/food/양갈비.jpg" }]

  // so so
  this.food6 = [ { name: "Gimbap", src: "menu/food/김밥.jpg" }, {name: "Spicy rice cake", src: "menu/food/떡볶이.jpg" }, { name: "Salad", src: "menu/food/샐러드.jpg" }, 
  { name: "Black pudding", src: "menu/food/순대.jpg" }, { name: "Sandwich", src: "menu/food/샌드위치.png" },  { name: "Corn dog", src: "menu/food/핫도그.jpg" }]

  // hungry 
  this.food7 = [ { name: "Saucy rice", src: "menu/food/덮밥.png" },{ name: "Ramen", src: "menu/food/라멘.jpg" },{ name: "Donburi", src: "menu/food/돈부리.jpg" }, 
  { name: "Pho", src: "menu/food/쌀국수.jpeg" }, { name: "Leaf meal", src: "menu/food/쌈밥.jpg" }, { name: "Tofu stew", src: "menu/food/순두부.jpg" }]

  // starving 
  this.food8 = [{ name:"Pizza", src: "menu/food/피자.jpeg" },{ name:"Fried chicken", src: "menu/food/치킨.jpg" },{ name:"Burger", src: "menu/food/햄버거.jpg" },
  { name:"Braised pork", src: "menu/food/족발.jpg" }, { name:"Steamed chicken", src: "menu/food/찜닭.jpg" }, { name: "Braised pork belly", src: "menu/food/보쌈.jpg" }, 
  { name: "Katsu", src: "menu/food/돈까스.jpg" }, { name: "Bibimbap", src: "menu/food/비빔밥.jpg" }]

  this.foodArr = [this.food0, this.food1, this.food2, this.food3, this.food4, this.food5, this.food6, this.food7, this.food8]
  // last result array
  this.result = [];
  this.pickOpt = [];
  this.initElement();
};

menuSelector.prototype.initElement = function () {
         
  var options = [{name:"Cold",src: "menu/cold.jpeg" }, { name: "Hot", src: "menu/hot.jpeg" }, { name: "Raining", src: "menu/raining.jpg" }
    , { name: "Pissed off", src: "menu/annoying.jpeg" }, { name: "Depressed", src: "menu/sad.jpg" }, { name: "Pay day!!", src: "menu/flex.jpeg" }
    , { name: "so so", src: "menu/hungry.jpg" }, { name: "Hungry", src: "menu/starving.jpg" }, { name: "Starving", src: "menu/배고파.png" }];
  var questions = ["How's weather today?", "How's feeling today?", "How hungry?"];
  var currentTab = 0; // Current tab is set to be the first tab (0)
  var that = this;
  for (i = 0; i < questions.length; i++) {
    var tab = document.createElement('div');
    var title =document.createElement('span');
    title.setAttribute('class','title');
    var titleH = document.createElement('h1');
    var container =document.createElement('section')
    container.setAttribute('class','container');
   
    //배열에서 받아서 넣기
    title.innerHTML += questions[i];
    titleH.appendChild(title);
    container.appendChild(titleH);

    tab.setAttribute('class','tab');
    tab.appendChild(container);
    for (j = i*3; j < (i*3)+3; j++) {   
      // check box option
      var checkBox = document.createElement('input');
      checkBox.setAttribute('type','checkbox');
      checkBox.setAttribute('class','food');
      checkBox.setAttribute('id','checkId');
      // option image
      var optImg =document.createElement('img');
      optImg.setAttribute('class', optImg);
      optImg.setAttribute('src', options[j].src);

      optImg.onclick = function(){imgChecked();};
        // checkbod div
      var optDiv = document.createElement('div');
      optDiv.setAttribute('class','optDiv');
      // option name

      optDiv.appendChild(checkBox);
      // adding question
      optDiv.innerHTML += options[j].name;
      var imgDiv = document.createElement('div');
      // checkbox and image div
      imgDiv.appendChild(optImg);

      //span으로 한번 더 감싸기
      var span = document.createElement('span');
      span.appendChild(optDiv);
      span.appendChild(imgDiv);

      //옵션 마지막 div
      var optDiv2 = document.createElement('div');
      optDiv2.setAttribute('class', 'option');
      optDiv2.appendChild(span);
      //옵션들 텝에 넣기
      tab.appendChild(optDiv2);
    }

        //버튼
    var btn1 = document.createElement('button');
    btn1.setAttribute('id','prevBtn');
    btn1.innerHTML += 'back';
    btn1.onclick = function(){
        nextPrev(-1);
    };
    var btn2 = document.createElement('button');
    btn2.setAttribute('id','nextBtn');
    btn2.onclick = function(){
        nextPrev(1);
    };
    //버튼 div  
    var btnDiv = document.createElement('div');
    btnDiv.setAttribute('class','btnDiv');
    btnDiv.appendChild(btn1);
    btnDiv.appendChild(btn2);
    //텝 밑에 붙이기
    tab.appendChild(btnDiv);

    //아웃터로 감싸기
    this.space.appendChild(tab);
  }

    showTab(currentTab); // Display the current tab
    
    setInterval(borderColor,100);
    function borderColor() {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      optImg.style.borderColor = "#"+randomColor;
    }
    
  function showTab(n) {
    // animation for question
    $(document).ready(function() {
    $(".title").lettering();
  });

$(document).ready(function() {
animation();
});

function animation() {
var title1 = new TimelineMax();
title1.staggerFromTo(".title span", 0.5, 
{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);

}
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.querySelectorAll("#prevBtn")[n].style.display = "none";
  } else {
    document.querySelectorAll("#prevBtn")[n].style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.querySelectorAll("#nextBtn")[n].innerHTML = "result";
  } else {
    document.querySelectorAll("#nextBtn")[n].innerHTML = "Next";
  }
 
}
function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
      // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    collectResult();        
    resultShow();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);

}

// checked options
function collectResult() {
  // checked option
  var selection = document.getElementsByClassName("food");
      k=0;
      f=0;
  for (i = 0; i < selection.length; i++) {
    if (selection[i].checked){
      that.pickOpt[f++] = options[i].name;
      for(j=0;j<that.foodArr[i].length;j++){
    that.result[k++]=that.foodArr[i][j];
  
    }
    }
  }
  if(k==0){
    that.pickOpt[f]="Anything";
    for (i = 0; i < selection.length; i++) {
              for(j=0;j<that.foodArr[i].length;j++){
    that.result[k++]=that.foodArr[i][j];
  }
}
}
}
function imgChecked() {
  var optImgCk = document.getElementsByClassName("optImg");
  var ckBox = document.getElementsByClassName("food");
     for(i=0; i<options.length;i++){
    if(optImgCk[i]=onclick){
      food[i]=checked;
    }
  }
}
// result
function resultShow(){

//새 창 전체 div

var resultDiv = document.createElement('div');
resultDiv.setAttribute = ('class', 'resultDiv');
// result list
var headLine = document.createElement('span');
var resultH = document.createElement('h1');
var resultSection = document.createElement('section');
resultSection.setAttribute('class','container');
headLine.setAttribute('class','title');
//선택한 옵션값 받아오기
var resultLine = document.createElement('div');
resultLine.setAttribute('id' , 'resultLine');

headLine.innerHTML += "Selected options";
resultLine.setAttribute('value' , that.pickOpt);
resultLine.innerHTML += that.pickOpt;
//다시하기 버튼
var restartBtn = document.createElement('button');
restartBtn.setAttribute('class','restartBtn');
restartBtn.innerHTML += "Pick again";
var showResult = document.createElement('button');
showResult.setAttribute('class','showResult');
showResult.innerHTML += "What's the menu?";
var btnsDiv = document.createElement('div');
//버튼 감싸는 div
btnsDiv.setAttribute('class', 'btnsDiv');
btnsDiv.appendChild(restartBtn);
btnsDiv.appendChild(showResult);

resultH.appendChild(headLine);
resultSection.appendChild(resultH);
resultDiv.appendChild(resultSection);
resultDiv.appendChild(resultLine);
resultDiv.appendChild(btnsDiv);

that.space.innerHTML = '';
that.space.appendChild(resultDiv);
restartBtn.onclick = function(){
  resultDiv.style.display = "none";
      that.init();
              }
   showResult.onclick = function(){
    Realresult();
      }         
      $(document).ready(function() {
$(".title").lettering();

});
$(document).ready(function() {
animation();
}, 1000);

function animation() {
var title1 = new TimelineMax();

title1.staggerFromTo(".title span", 0.5, 
{ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
{ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
}           
               
}

function Realresult(){
var lastWin = document.createElement('div');
lastWin.setAttribute('class','lastWin');
var lastTitle = document.createElement('div');
lastTitle.setAttribute('class', 'lastTitle');
lastTitle.innerHTML = "Lunch for today is..";
var foodImg = document.createElement('img');
foodImg.setAttribute('class', 'foodImg');
foodImg.setAttribute('id', 'foodImg');
k =Math.floor(Math.random()*k);
foodImg.src = that.result[k].src;
// foodImg.src = "menu/food/갈비탕.jpg";
var lastMenu =document.createElement('div');
lastMenu.setAttribute('class', 'lastMenu');
lastMenu.innerHTML=that.result[k].name;
var redo = document.createElement('button');
redo.setAttribute('class','redo');
redo.innerHTML += "Pick again";
redo.onclick = function(){
    lastWin.style.display = "none";
    that.init();
}
lastWin.appendChild(lastTitle);
lastWin.appendChild(foodImg);
lastWin.appendChild(lastMenu);
lastWin.appendChild(redo);
that.space.innerHTML = '';
that.space.appendChild(lastWin);
// border effect
setInterval(borderColor,100);
function borderColor() {
var randomColor = Math.floor(Math.random()*16777215).toString(16);
foodImg.style.borderColor = "#"+randomColor;
}
}
}