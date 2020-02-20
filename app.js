const express = require('express')
const app = express()
const port = 3001

//include function trashTalk
const GeneratorTrashTalk = require('./trashTalk_generator')

//targets information
let targetList = require('./target_list.json')

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//decode form post request information
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

//include style.css
app.use(express.static('public'))


//route of form post
app.post('/', (req, res) => {

  const target = req.body.target

  //memorise last checked radio box
  targetList.forEach((element) => {
    if (element.id === target)
      element.checked = "checked"
    else
      element.checked = ""
  })

  const trashTalk = GeneratorTrashTalk(target)

  res.render('index', { targets: targetList, trashTalk })
})


app.get('/', (req, res) => {

  //reset radio box checked
  targetList.forEach(element => element.checked = "")

  res.render('index', { targets: targetList })
})


app.listen(port, () => {
  console.log(`Express is running on port ${port}`)
})