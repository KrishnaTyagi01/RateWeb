

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

window.onload = function () {
    showBox();
    console.log("content script running")
};