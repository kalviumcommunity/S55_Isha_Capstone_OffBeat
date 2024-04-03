const express = require("express")
const router = express.Router()
const {getStatus} =require('./db')
const {userModel} = require('./Schema')

router.use(express.json())

router.get('/connect', async (req, res) => {
    const connectionStatus = await getStatus()
    res.send(connectionStatus)
 })

router.get('/data',async(req,res)=>{
    try{
        const test = await userModel.find()
        res.json(test)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;