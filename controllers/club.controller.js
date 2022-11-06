const Club = require('../routes/api/clubs')

exports.findAll = (req,res) => {
  Club.find()
    .then(club => res.json({clubs: clubs}))
    .catch(err => res.status(404).json({ noclubsfound: 'No Club found' }));
}