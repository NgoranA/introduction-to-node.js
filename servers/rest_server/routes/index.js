var express = require('express');
var router = express.Router();

const { BICYCLE_SERVICE_PORT = 4040, BRAND_SERVICE_PORT = 5050 } = process.env
const bicycleService = `http://localhost:${BICYCLE_SERVICE_PORT}`
const brandService = `http://localhost:${BRAND_SERVICE_PORT}`


router.get('/:id', function (req, res, next) {
  const { id } = req.params

  fetch(`${bicycleService}/${id}`).then((response) => {
    if (!response.ok) {
      res.status(response.status).send({
        error: response.statusText,
      })
    }

    return response.json()
  }).then((bicycleData) => {
    if (!bicycleData) return

    fetch(`${brandService}/${id}`).then((response) => {
      if (!response.ok) {
        res.status(response.status).send({
          error: response.statusText,
        })
      }
      return response.json()
    }).then((brandData) => {
      if (!brandData) return
      res.send({
        id: bicycleData.id,
        color: bicycleData.color,
        brand: brandData.name
      })
    }).catch(next)
  }).catch(error => next(error))
})


module.exports = router;
