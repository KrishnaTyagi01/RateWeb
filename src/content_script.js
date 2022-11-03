

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
    
    var logobtn = document.createElement('img');
    logobtn.src = chrome.runtime.getURL("assets/logo.svg");
    logobtn.setAttribute("id","getweblogobtn");
    logobtn.addEventListener('mouseover', openDialog);
    logobtn.style.cssText = "width:4rem; height:4rem; position: fixed;z-index:10000; bottom: 2rem; right: 2rem;cursor: pointer;";
   
    var reviewBox = document.createElement('div');
    reviewBox.classList.add('reviewbox');
    reviewBox.setAttribute("id","reviewbox");
    reviewBox.style.cssText =
     "height:50vh; width:30vw;background-color:#202124; visibility: hidden;position:fixed;z-index:10000; bottom:5.5rem; right:5.5rem;box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; display:flex; flex-direction:column; ";


    var reviewHeader = document.createElement('div');
    reviewHeader.classList.add('reviewheader');
    reviewHeader.textContent = "comments(9)";
    reviewHeader.style.cssText = 
    'height:15%;background-color:#2D2F30;font-weight: 500;font-size: 1.5rem;padding:1rem;color: #FFFFFF;display:flex; align-items:center;'

    var reviewbody = document.createElement('div');
    reviewbody.classList.add('reviewbody');
    reviewbody.style.cssText = 'height:70%;background-color:#202124;overflow-y: auto'

    // ============= COMMENT START ================= //

    var commentDiv = document.createElement('div');
    commentDiv.style.cssText = 'border-bottom: 1px solid #2D2F31; padding:1rem;'

    var userName = document.createElement('h3');
    userName.textContent = 'Krishna Tyagi';
    userName.style.cssText = 'font-weight:400;font-size:16px;color: #FFFFFF;'

    var comment = document.createElement('p');
    comment.textContent = 'This is a comment sample. Users with Ditch the SEO extension can comment on the links and help the community to search better..'
    comment.style.cssText = 'font-weight: 400;font-size: 14px;color: #FFFFFF;opacity: 0.5;letter-spacing:1px;'

    var addComment = document.createElement('input');
    addComment.classList.add('addcomment');
    addComment.placeholder = "Add Your Comment here"
    addComment.style.cssText =
   'height:15%;background-color:#202124;padding:1rem;font-size: 14px;opacity: 0.5;font-weight: 400;color: #FFFFFF;box-shadow: 0px -5px 25px 7px rgba(0, 0, 0, 0.5);border-radius: 4px 4px 0px 0px;border-top: 1px solid #2D2F30;'

    commentDiv.appendChild(userName)
    commentDiv.appendChild(comment)

 // ============= COMMENT END ================= //
 reviewbody.appendChild(commentDiv);
    for(let i=0; i<2; i++){
      var cloned = commentDiv.cloneNode(true);
      reviewbody.appendChild(cloned);
    }

    reviewBox.appendChild(reviewHeader)
    reviewBox.appendChild(reviewbody)
    reviewBox.appendChild(addComment)

  
    
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