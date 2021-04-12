const express = require('express')
const {connection} = require('./datatabse')
const cors = require('cors')
const morgan = require('morgan')

const app = express();

require('./datatabse').connection()

const port = process.env.PORT || 3000
 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(cors({origin:'http://localhost:4200'}))

app.post('/users', async (req,res)=>{
   const {name,lastname,email} = req.body
   const pool = await connection()
   await pool.query('INSERT into users (name, lastname, email) values(?,?,?)',[name,lastname, email])
   return res.json({message:'user registred successfully'})
})

app.get('/users',async  (req,res)=>{
  const limit = 5
  const {page}= req.query
  const offset = (page - 1) * limit
  const pool = await connection()
  const users = await pool.query('SELECT * FROM users LIMIT ? OFFSET ?',[limit, offset])
  return res.json(users[0])
})


app.listen(port,()=>console.log('server on port 3000'))