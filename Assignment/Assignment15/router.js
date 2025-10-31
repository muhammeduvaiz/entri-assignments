const { addBooks, getBooks, updateBooks, deleteBooks, hardDeleteBooks, getBooksByPrice } = require('./Controller/bookController');

const router = require('express').Router();

router.post('/addbooks',addBooks);
router.get('/getbooks',getBooks);
router.put('/updatebooks',updateBooks);
router.delete('/deletebooks',deleteBooks);
router.delete('/harddeletebooks',hardDeleteBooks);
router.get('/getbooksbyprice',getBooksByPrice);
 
module.exports = router;


