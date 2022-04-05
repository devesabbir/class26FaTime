import './style.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/js/dist/modal'
import './app'
import '../node_modules/boxicons/css/boxicons.min.css'
import axios from 'axios'
import post from './components/Post'
// post show on load
document.addEventListener('DOMContentLoaded', getposts)
// getpostformdb
function getposts() {
   axios.get('http://localhost:9090/post').then(res => {
      post.getPost(res.data)
   })
}

// addPostFormElement
const add_post_form = document.getElementById('add_post_form')
add_post_form.addEventListener('submit', add_post)

// addPostFunction
function add_post(e) {
   e.preventDefault()
   const form_data = new FormData(e.target);
   const data = Object.fromEntries(form_data.entries())

   if( data.name == '', data.author_photo == '', data.content == '', data.post_img == ''){
       alert('All Fieild Required!')
   }else{

      axios.post('http://localhost:9090/post', {
         name: data.name,
         user_photo: data.author_photo,
         content: data.content,
         post_photo: data.post_img
   
      }).then(res => {
         getposts() 
      })
   
   }

}

// deleteFunction
