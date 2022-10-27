const express = require('express')
const router = express.Router()
const {TransactionController} = require('./../controller/transaction')

router.get('/',TransactionController.getProduct)
router.post('/',TransactionController.insert)
router.put('/:id',TransactionController.update)
router.delete('/:id',TransactionController.delete)

module.exports = router
