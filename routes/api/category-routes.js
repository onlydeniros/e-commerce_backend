const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['product_name']
    }
  })
    .then(dbCategory => res.json(dbCategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['category_id']
    }
  })
    .then(dbCategory => res.json(dbCategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })

});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then(dbCategory => res.json(dbCategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbCategory => res.json(dbCategory))
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategory => {
      if (!dbCategory) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(dbCategory)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err)
    })
});

module.exports = router;
