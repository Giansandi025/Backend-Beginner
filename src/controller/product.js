const ModelProduct = require("./../model/product");

const ProductController = {
  getProduct: (req, res, next) => {
    const sortby = req.query.sortby
    const sort = req.query.sort
    const page = req.query.page
    const limit = req.query.limit
    ModelProduct.selectData(sortby,sort,page,limit)
      .then((result) => res.send({ result: result.rows }))
      .catch((err) => res.send({ message: "error", err }));
  },
  update: (req, res, next) => {
  ModelProduct.updateData(req.params.id, req.body)
  .then((result) => res.send({ status: 200, message: `berhasil ubah data`}))
  .catch((err) => res.send({ message: "error", err }));
  },
  delete: (req, res, next) => {
    ModelProduct.deleteData(req.params.id)
    .then((result) => res.send({ status: 200, message: `berhasil hapus data` }))
    .catch((err) => res.send({ message: "error", err }));
  },
  insert: (req, res, next) => {
    ModelProduct.insertData(req.body)
      .then((result) => res.send({ status: 200, message: `berhasil memasukan data`, data: result.rows}))
      .catch((err) => res.send({ message: "error", err }));
  },
}

exports.ProductController = ProductController;


