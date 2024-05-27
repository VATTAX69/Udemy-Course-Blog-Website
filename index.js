import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 4000
let submitted = false
let newPost = ''
let postsArr = []

class Post {
  constructor(userName, title, postContent){
      this.userName = userName
      this.title = title
      this.postContent = postContent
  }
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))


app.get('/', (req, res) =>{
  res.render('index.ejs', {postsArr})  
})

app.post('/submit', (req, res) =>{
  const username = req.body.userName
  const title = req.body.postHeader
  const content = req.body.postContent

  newPost = new Post(username, title, content)
  postsArr.push(newPost)

  res.redirect("/"); 
})

app.listen(port, () =>{
    console.log(`Listening on port: ${port}`)
})

