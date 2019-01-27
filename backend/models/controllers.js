const getAllHaves = (req, res) => {
  // Haves.find()
  //   .then(haves => res.json(haves))
  const haves = ["Pasta Maker", "Pitchfork", "Snowshoes", "Movie Projector"];
  res.json(haves)
};

const getAllWants = (req, res) => {
  // Wants.find()
  //   .then(wants => res.json(wants))
  const wants = ["Pasta Maker", "Pitchfork", "Snowshoes", "Movie Projector"];
  res.json(wants)
};

module.exports = {
  getAllHaves,
  getAllWants
};

