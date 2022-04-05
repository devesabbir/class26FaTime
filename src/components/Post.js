
class Post {
    constructor() {
        this.post_timeline = document.getElementById('post-timeline')
      
    }

    getPost(post) {
        let posst = '';
        post.sort().map(data => {
            let {
                name,
                user_photo,
                content,
                post_photo
            } = data

            posst += `
            
               
            <div class="card shadow-sm my-2">
            <div class="card-body">
                <div class="post-timeline">
                     <div class="user-info">
                          <div class="user d-flex">
                           <img class="user-timeline" src="${user_photo}" alt="">
                           <h3>${name}</h3>
                          </div>
                           <button class="deletebtn" ><i class='bx bx-dots-horizontal-rounded' ></i></button>
                     </div>
                     <div class="user-post my-1">
                           <p>${content}</p>
                           <img src="${post_photo}}" alt="">  
                     </div>
                </div>
            </div>
       </div>
              
        `

        })

        this.post_timeline.innerHTML = posst;
    }

   

   
}

const post = new Post()
export default post