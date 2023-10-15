const submitBtn = document.querySelector('.submit_btn')
const userName = document.querySelector('#user')
const comment = document.querySelector('#comment')
const likeIcon = document.querySelector('.heart_icon')
const count = document.querySelector('.count')
const commentsCont = document.querySelector('.comments_container')

likeIcon.addEventListener('click', likeVideo)
submitBtn.addEventListener('click', submitFeedback)


feedbackArr = []
let positiveFeedback = false
let likesCount = 0

function submitFeedback(e){
    // get user name
    const userForm = userName.value 
    // get feedback
    const commentForm = comment.value 
    // if inputs are not empty
    if(userForm && commentForm !== ''){
        // create new feedback
        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "userName": userForm,
            "userComment": commentForm,
            "typeOfFeedback": positiveFeedback
        }
        // add new feedback to array
        feedbackArr.push(newFeedback)
        // if liked add to count
        if(positiveFeedback === true){
            addLikes()
        }
        // clear inputs 
        resetForm()
        // add feedback to list
        addFeedback(newFeedback)
    }


    e.preventDefault()
}

function likeVideo(){
    likeIcon.classList.toggle('liked')

    if(likeIcon.classList.contains('liked')){
        likeIcon.innerHTML = `<i class="fas fa-heart"></i>`
        // set feedback to liked
        positiveFeedback = true
    } else {
        likeIcon.innerHTML = `<i class="far fa-heart"></i>`
        // set feedback to not liked
        positiveFeedback = false
    }
}

function addLikes(){
    likesCount++
    count.innerHTML = likesCount
}

function resetForm(){
    userName.value = ''
    comment.value = ''
    likeIcon.innerHTML = `<i class="far fa-heart"></i>`
    positiveFeedback = false
}

function addFeedback(item){
    // select first letter of the user name
    const letter = (item.userName).charAt(0)
    // create new div
    const div = document.createElement('div')
    // add class
    div.classList = 'comment_card'
    // add id
    div.id = item.id 
    // add html
    div.innerHTML = `
    <div class="pic center_display">
                    ${letter}
                </div>
                <div class="comment_info">
                    <small class="nickname">
                        ${item.userName}
                    </small>
                    <p class="comment">
                        ${item.userComment}
                    </p>
                    <div class="comment_bottom">
                        <div class="heart_icon-comment">
                            ${item.typeOfFeedback ? `<i class="fas fa-heart positive"></i>` : `<i class="far fa-heart"></i>`}
                        </div>
                        <button>
                            Reply
                        </button>
                    </div>
                </div>
    `
    // insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend', div)
}


// firebase..................................................................
{/* <script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
</script> 
const firebaseConfig = {
    apiKey: "AIzaSyAD9H8gQgJI622z6AWfJObkRfX6dPji3ME",
    authDomain: "database-149e4.firebaseapp.com",
    databaseURL: "https://database-149e4-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "database-149e4",
    storageBucket: "database-149e4.appspot.com",
    messagingSenderId: "485573327691",
    appId: "1:485573327691:web:3a8fa45d9518a34e03c6ce"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var commentFormDB =firebase.database().ref('commentForm');

  document.getElementById("commentForm").addEventListener("submit",submitForm)

  function submitForm(e) {
    e.preventDefault();
  
    var user = getElementVal("user");
    var comment = getElementVal("comment");
    // var msgContent = getElementVal("msgContent");
   
    saveMessages(user,comment);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("commentForm").reset();
  }
  
  const saveMessages = (user,comment) => {
    var newContactForm = commentFormDB.push();
  
    newCommentForm.set({
      user: user,
      comment: comment,
      
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }; */}