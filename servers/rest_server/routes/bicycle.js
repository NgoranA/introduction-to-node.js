const express = require("express")
const router = express.Router()
const model = require("../model")

router.get("/", function (req, res, next) {

})
router.get("/:id", function (req, res, next) {
  const { id } = req.params
  model.bicycle.read(id, (err, data) => {
    if (err) {
      if (err.message === "not found") {
        next()
      } else {
        next(err)
      }
    } else {
      res.send(data)
    }
  })
})

router.post('/create', function (req, res, next) {
  const { brand, color } = req.body
  const id = model.bicycle.uid()
  model.bicycle.create(id, { brand, color }, (err, result) => {
    if (err) {
      if (err.message === "resource exists") {
        next()
      } else {
        next(err)
      }
    } else {
      res.status(200).json({ message: `Bicycle with id ${result} was created successfully` })
    }
  })
})

router.put("/:id/update", function (req, res, next) {
  const id = req.params.id
  const { brand, color } = req.body
  model.bicycle.update(id, { brand, color }, (err) => {
    if (err) {
      if (err.message === "not found") {
        next()
      } else {
        next(err)
      }
    } else {
      res.status(200).json({ message: `Bicycle was updated successfully` })
    }
  })


})


router.delete('/:id', function (req, res, next) {
  model.bicycle.del(req.params.id, (err) => {
    if (err) {
      if (err.message === 'not found') return next();
      return next(err);
    }
    // Successful deletion
    res.status(204).json({ message: "successfully deleted" }); // 204 No Content is standard
  });
});


module.exports = router
