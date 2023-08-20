const sectionOneDetails = [
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587155655_honeymoon_2.png",
        name : "Honeymoon",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587129212_family_vacation.png",
        name : "Family",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587155639_road_trip.png",
        name : "Road Trips",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587129234_beach5.png",
        name : "Beaches",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587155671_tourist_attraction_4.png",
        name : "Tourist Attractions",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587129289_hill1.png",
        name : "Hill Stations",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587129307_adventure_activities.png",
        name : "Adventure",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/840131/Image/1577788799_historical_places.jpg",
        name : "Historical Places",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587155687_weekend_getaways.png",
        name : "Weekend Getaways",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587129369_trekking_route_3.png",
        name : "Trekking",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/840131/Image/1577788857_nightlife.jpg",
        name : "Nightlife",
    },
    {
        image : "https://cdn1.tripoto.com/media/filter/tst/img/840131/Image/1577788847_shopping.jpg",
        name : "Shopping",
    },
] 

let partOne = document.querySelector('#firstAppend');
function displayDataOne(data){
    data.forEach((ele) => {
        let divOne = document.createElement('div');

        let imageOne = document.createElement('img');
        imageOne.src = ele.image;
        let nameOne = document.createElement('p');
        nameOne.innerText = ele.name;

        divOne.append(imageOne,nameOne);
        partOne.append(divOne);
    })
}

displayDataOne(sectionOneDetails);

const sectionTwoDetails = [
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587157804_bizarre.png",
        name : "When it's bizzare",
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587158025_colorful.png",
        name : "When it's colorful",
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587158119_adventure_activities_3.png",
        name : "When it's educational",
    },
    
]

let partTwo = document.querySelector('#secondAppend');
function displayDataTwo(data){
    data.forEach((ele) => {
        let divOne = document.createElement('div');

        let imageOne = document.createElement('img');
        imageOne.src = ele.image;
        let nameOne = document.createElement('p');
        nameOne.innerText = ele.name;

        divOne.append(imageOne,nameOne);
        partTwo.append(divOne);
    })
}

displayDataTwo(sectionTwoDetails);

const sectionThreeDetails = [
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587155857_hill2.png",
        name : "Explore Hill Stations",
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587156126_indian_cities.png",
        name : "Explore Indian Cities",
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587156162_beach1.png",
        name : "Explore Beaches",
    },
    
]

let partThree = document.querySelector('#thirdAppend');
function displayDataThree(data){
    data.forEach((ele) => {
        let divOne = document.createElement('div');

        let imageOne = document.createElement('img');
        imageOne.src = ele.image;
        let nameOne = document.createElement('p');
        nameOne.innerText = ele.name;

        divOne.append(imageOne,nameOne);
        partThree.append(divOne);
    })
}

displayDataThree(sectionThreeDetails);

const sectionFourDetails = [
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587156462_top_30_destinations_in_the_world.png",
        name : "Top 30 destinations in the world",
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587156797_29_places_for_2019.png",
        name : "29 Places for 2019",
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587156312_top_30_experiences_in_india.png",
        name : "Top 30 Experiences in India",
    },
    
]

let partFour = document.querySelector('#fourthAppend');
function displayDataFour(data){
    data.forEach((ele) => {
        let divOne = document.createElement('div');

        let imageOne = document.createElement('img');
        imageOne.src = ele.image;
        let nameOne = document.createElement('p');
        nameOne.innerText = ele.name;

        divOne.append(imageOne,nameOne);
        partFour.append(divOne);
    })
}

displayDataFour(sectionFourDetails);

const sectionFiveDetails = [
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587157582_travel_planner.png",
        name : "Monthly-Travel Planner",
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587156893_travel_hacks.png",
        name : "Travel Hacks",
    },
    {
        image: "https://cdn1.tripoto.com/media/filter/tst/img/837823/Image/1587156576_upcoming_festivals.png",
        name : "Upcoming Festival Breaks",
    },
    
]

let partFive = document.querySelector('#fifthAppend');
function displayDataFive(data){
    data.forEach((ele) => {
        let divOne = document.createElement('div');

        let imageOne = document.createElement('img');
        imageOne.src = ele.image;
        let nameOne = document.createElement('p');
        nameOne.innerText = ele.name;

        divOne.append(imageOne,nameOne);
        partFive.append(divOne);
    })
}

displayDataFive(sectionFiveDetails);


