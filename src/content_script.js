

function showBox() {
    var results = document.getElementsByClassName("kvH3mc BToiNc UK95Uc");

    for (let i = 0; i < results.length; i++) {
        var body = results[i];
        var appended = document.createElement("div");
        appended.classList.add('maindiv');
        appended.style.cssText = "display:flex;justify-content:space-between;margin-top:10px;padding:10px;border: 1.3px solid gray;" 
       
        
        var commentCount = 225;
        var likeCount = 311;

        // ======== left div elements ============
        
        var leftdiv = document.createElement('div');
        leftdiv.classList.add('leftdiv');
        leftdiv.style.cssText = "display:flex; align-items:center;" 
        
        var tagline = document.createElement('span');
        tagline.textContent = `Ditch the SEO`
        tagline.classList.add('tagline');


        var logo = document.createElement('img');
        logo.src = chrome.runtime.getURL("assets/logo.svg");
        logo.style.cssText = "width:16px; height:16px;margin-right:5px;";

        // ======== left div elements end ============
        
        // ======== right div elements ============

        var rightdiv = document.createElement('div');
        rightdiv.classList.add('rightdiv');
        rightdiv.style.cssText = "display:flex; align-items:center;" 


        var heart = document.createElement('img');
        heart.src = chrome.runtime.getURL("assets/heart.svg");
        heart.style.cssText = "width:16px; height:16px;margin-right:5px;";


        var likes = document.createElement('span');
        likes.textContent = `${likeCount} people found this useful`
        likes.classList.add('likes');
        likes.style.cssText = "margin-right:5px;" 
       
        var commentimg = document.createElement('img');
        commentimg.src = chrome.runtime.getURL("assets/comment.svg");
        commentimg.style.cssText = "width:16px; height:16px;margin-right:5px;";

        var comments = document.createElement('span');
        comments.textContent = `${commentCount} comments`
        comments.classList.add('comments');
        comments.style.cssText = "" 

         // ======== right div elements end ============

        leftdiv.appendChild(logo);
        leftdiv.appendChild(tagline);

        rightdiv.appendChild(heart)
        rightdiv.appendChild(likes)
        rightdiv.appendChild(commentimg)
        rightdiv.appendChild(comments)

        appended.append(leftdiv)
        appended.append(rightdiv)

        body.append(appended);
      }
}
function openDialog() {
    document.getElementById('reviewbox').style.visibility = 'visible';
    console.log("listening to hover")
}
function closeDialog() {
    document.getElementById('reviewbox').style.visibility = 'hidden';
    console.log("leaving..")
}




function showIcon() {
    var body = document.getElementsByTagName("body")[0];
    // var icondiv = document.createElement('div'); 
    // icondiv.style.cssText = "font-size: 2rem;position: fixed;z-index:10; bottom: 1rem; right: 1rem;" 
    // icondiv.textContent = `My Icon`
    var logobtn = document.createElement('img');
    logobtn.src = chrome.runtime.getURL("assets/logo.svg");
    logobtn.setAttribute("id","getweblogobtn");
    logobtn.addEventListener('mouseover', openDialog);
    // logobtn.addEventListener('', closeDialog);
    logobtn.style.cssText = "width:4rem; height:4rem; position: fixed;z-index:10000; bottom: 2rem; right: 2rem;cursor: pointer;";
   
    var reviewBox = document.createElement('div');
    reviewBox.classList.add('reviewbox');
    reviewBox.setAttribute("id","reviewbox");
    reviewBox.style.cssText = 'height:50vh; width:30vw; visibility: hidden; display:fixed; background:red;position:fixed;z-index:10000; bottom:5.5rem; right:5.5rem';
   
   

    // I'm using "click" but it works with any event
    document.addEventListener('click', event => {
      const isClickInside = reviewBox.contains(event.target)
    
      if (!isClickInside) {
        // The click was OUTSIDE the specifiedElement, do something
        console.log("click was outside man")
        closeDialog();
      }
    })

   
    body.appendChild(logobtn);
    body.appendChild(reviewBox);
   


}

window.onload = function () {
    showBox();
    showIcon();
    console.log("content script running")
};