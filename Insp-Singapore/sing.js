const imageDetails_1 = [
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178326_1.jpg",
        ele : "https://www.visitsingapore.com/en_in/festivals-events-singapore/annual-highlights/singapore-international-arts-festival/",
    },
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178357_2.jpg",
        ele : "https://www.visitsingapore.com/festivals-events-singapore/cultural-festivals/dragon-boat-festival/",
    },
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178374_3.jpg",
        ele : "https://www.visitsingapore.com/en_in/festivals-events-singapore/annual-highlights/singapore-food-festival/",
    },
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178396_4.jpg",
        ele : "https://www.visitsingapore.com/en_in/festivals-events-singapore/cultural-festivals/national-day/",
    },
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178422_5.jpg",
        ele : "https://www.visitsingapore.com/en_in/festivals-events-singapore/annual-highlights/singapore-night-festival/",
    },
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178447_6.jpg",
        ele : "https://www.visitsingapore.com/en_in/festivals-events-singapore/cultural-festivals/mid-autumn-festival/",
    },
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1645178473_7.jpg",
        ele : "https://www.visitsingapore.com/en_in/festivals-events-singapore/annual-highlights/singapore-cocktail-festival/",
    },
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643281749_card_8.jpg",
        ele : "https://www.visitsingapore.com/en_in/festivals-events-singapore/cultural-festivals/deepavali/",
    },
    {
        image_url: "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1643281767_card_9.jpg",
        ele : "https://www.visitsingapore.com/en_in/festivals-events-singapore/cultural-festivals/christmas/",
    },
]

const imageDetails_2 = [
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1653379073_jcr_content_renderimage_carousel_rect_265_149.jpg",
        name : "Dragon Boat Festival",
        date : "3 June, 2022",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1653379191_jcr_content_renderimage_carousel_rect_265_149_1.jpg",
        name : "Hari Raya Haji",
        date : "10 July, 2022",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1653379073_jcr_content_renderimage_carousel_rect_265_149.jpg",
        name : "Hungry Ghost Festival",
        date : "12 August, 2022",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/1745358/Image/1653379191_jcr_content_renderimage_carousel_rect_265_149_1.jpg",
        name : "World Gourmet Summit",
        date : "17-23 August, 2022",
    },
]

let appendOne = document.querySelector('#append_1');

function displayData(data){
    data.forEach(function(ele){
        let divOne = document.createElement('div');
        
        let imageOne = document.createElement('img');
        imageOne.src = ele.image_url;

        imageOne.addEventListener('click', ()=>{
            window.location.href = "https://www.visitsingapore.com/en_in/festivals-events-singapore/annual-highlights/singapore-international-arts-festival/";
        })

        divOne.append(imageOne);
        appendOne.append(divOne);
    })
}

displayData(imageDetails_1);

let appendTwo = document.querySelector('#static_5>#append_2');

function displayDiv(data){
    data.forEach(function(el){
        let divTwo = document.createElement('div');
        
        let imageTwo = document.createElement('img');
        imageTwo.src = el.image;
        let nameTwo = document.createElement('p');
        nameTwo.innerText = el.name;
        let dateTwo = document.createElement('p');
        dateTwo.innerText = el.date;



        divTwo.append(imageTwo,nameTwo,dateTwo);
        appendTwo.append(divTwo);
    })
}

displayDiv(imageDetails_2);

const exploreBtn_1 = document.querySelector('#static_5>img');
exploreBtn_1.addEventListener('click', () => {
    window.location.href = 'https://www.tripoto.com/collections/visit-singapore-videos';
});

const inspireBtn = document.querySelector('#sing_redirect>img');
inspireBtn.addEventListener('click', () => {
    window.location.href = 'https://www.tripoto.com/collections/visit-singapore-articles';
});

const travelBtn = document.querySelector('#sing_redirect>img+img');
travelBtn.addEventListener('click', () => {
    window.location.href = 'https://trust.stb.gov.sg/site/content/tagaem/landing-page/bulletin-board/bulletin-board-news.html?id=232';
});

// insta-https://www.instagram.com/visit_singapore/
// https://www.facebook.com/VisitSingaporeIN
// https://www.youtube.com/channel/UCU1jyt5hG6SboKJtOVlF4ug

var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,2000);
  
}

changeSlide();