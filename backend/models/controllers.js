const getAllHaves = (req, res) => {
  Haves.find()
    .then(haves => res.json(haves))
};

const getAllWants = (req, res) => {
  Wants.find()
    .then(wants => res.json(wants))
};

module.exports = {
  getAllHaves,
  getAllWants
};

