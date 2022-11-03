// routes/api/clubs.js

const express = require('express');
const router = express.Router();

// Load Club model
const Club = require('../../models/Club');

// @route GET api/clubs/test
// @description tests clubs route
// @access Public
router.get('/test', (req, res) => res.send('club route testing!'));

// @route GET api/clubs
// @description Get all clubs
// @access Public
router.get('/', (req, res) => {
  Club.find()
    .then(club => res.json(clubs))
    .catch(err => res.status(404).json({ noclubsfound: 'No Club found' }));
});

// @route GET api/clubs/:id
// @description Get single club by id
// @access Public
router.get('/:id', (req, res) => {
  Club.findById(req.params.id)
    .then(club => res.json(club))
    .catch(err => res.status(404).json({ noclubfound: 'No Club found' }));
});

// @route GET api/clubs
// @description add/save club
// @access Public
router.post('/', (req, res) => {
  Club.create(req.body)
    .then(club => res.json({ msg: 'Club added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this club' }));
});

// @route GET api/clubs/:id
// @description Update club
// @access Public
router.put('/:id', (req, res) => {
  club.findByIdAndUpdate(req.params.id, req.body)
    .then(club => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/clubs/:id
// @description Delete club by id
// @access Public
router.delete('/:id', (req, res) => {
  Club.findByIdAndRemove(req.params.id, req.body)
    .then(club => res.json({ mgs: 'Club entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a club' }));
});

module.exports = router;
