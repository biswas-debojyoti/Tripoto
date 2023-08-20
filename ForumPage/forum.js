let followBtn = document.querySelector('#follow_commenter>button');
let click = 0;
followBtn.addEventListener("click", () => {
   click++;
    if(click%2!==0){
        followBtn.innerText = "Following";
        // console.log("yes");
    }
    else{
        followBtn.innerText = "Follow";
        // console.log("no");
    }
});

let btnTwo = document.querySelector(' #two>#comment>#follow_commenter>button');
let clickTwo = 0;
btnTwo.addEventListener("click", () => {
    clickTwo++;
    if(clickTwo%2!==0){
        btnTwo.innerText = "Following";
        // console.log("yes");
    }
    else{
        btnTwo.innerText = "Follow";
        // console.log("no");
    }
})

let btnThree = document.querySelector(' #three>#comment>#follow_commenter>button');
let clickThree = 0;
btnThree.addEventListener("click", () => {
    clickThree++;
    if(clickThree%2!==0){
        btnThree.innerText = "Following";
        // console.log("yes");
    }
    else{
        btnThree.innerText = "Follow";
        // console.log("no");
    }
})

let btnFour = document.querySelector(' #four>#comment>#follow_commenter>button');
let clickFour = 0;
btnFour.addEventListener("click", () => {
    clickFour++;
    if(clickFour%2!==0){
        btnFour.innerText = "Following";
        // console.log("yes");
    }
    else{
        btnFour.innerText = "Follow";
        // console.log("no");
    }
})

let btnFive = document.querySelector(' #five>#comment>#follow_commenter>button');
let clickFive = 0;
btnFive.addEventListener("click", () => {
    clickFive++;
    if(clickFive%2!==0){
        btnFive.innerText = "Following";
        // console.log("yes");
    }
    else{
        btnFive.innerText = "Follow";
        // console.log("no");
    }
})

let btnSix = document.querySelector(' #six>#comment>#follow_commenter>button');
let clickSix = 0;
btnSix.addEventListener("click", () => {
    clickSix++;
    if(clickSix%2!==0){
        btnSix.innerText = "Following";
        // console.log("yes");
    }
    else{
        btnSix.innerText = "Follow";
        // console.log("no");
    }
});

let btnSeven = document.querySelector(' #seven>#comment>#follow_commenter>button');
let clickSeven = 0;
btnSeven.addEventListener("click", () => {
    clickSeven++;
    if(clickSeven%2!==0){
        btnSeven.innerText = "Following";
        // console.log("yes");
    }
    else{
        btnSeven.innerText = "Follow";
        // console.log("no");
    }
})


// --------------------------------------------------------
let appendPost = document.querySelector('#textFromPost');
let postText = document.querySelector('#post_text');
let postBtn = document.querySelector('#forum_post_button');

postBtn.addEventListener("click" , () => {
    let postDiv = document.createElement('div');

    let postDivFlex = document.createElement('div');
    let postImage = document.createElement('img');
    postImage.src = "https://static2.tripoto.com/media/filter/tst/img/311219/TripDocument/1624442336_def_prof.jpg";
    let postName = document.createElement('p');
    postName.innerText = "Anonymous  User";
    let postDesc = document.createElement('p');
    postDesc.innerText = postText.value;

    postDivFlex.append(postImage,postName);
    postDiv.append(postDivFlex,postDesc);
    appendPost.append(postDiv);
});