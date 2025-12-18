const express = require('express')
const router = express.Router()

const userRoutes = require('./user.routes');
const fileRoutes = require('./file.routes');



router.use('/user', userRoutes);
router.use('/file', fileRoutes);

module.exports = router;


router.get('/home',(req,res)=>{
    res.render('home');
})
router.get('/', async (req, res) => {
  const files = await File.find();
  res.render('home', { files });
});




module.exports = router