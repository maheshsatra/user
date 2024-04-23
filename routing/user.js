const { userInfo } = require("../shema/userShema");
const router  = require("express").Router()

router.post("/createUser",async (req,res)=>{
    try {
        const { name, email, mobile } = req.body;
        const user = new userInfo({ name, email, mobile });
        const newUser = await user.save();
        res.status(201).send({
            status:"successfully created user",
            newUser
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})
router.get("/getUser",async (req,res)=>{
    try {
        const users = await userInfo.find();
        res.send({
            users
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
})

// Delete an employee by ID
router.delete('/deleteUser/:id', async (req, res) => {
    try {
      const  id = req.params.id;
      const deleteduser = await userInfo.findByIdAndDelete( id);
  
      if (deleteduser) {
        return res.status(200).json({ message: 'Successfully deleted User.', deleteduser });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  module.exports=router