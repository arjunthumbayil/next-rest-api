const mongoose = require(mongoose);

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: string,
    required: [true, "Please name the hero"],
    unique: true,
    trim: true,
  },
  realName: {
    type: string,
    required: true,
    maxLength: [200, "Please keep real name short"],
  },
});

module.exports = mongoose.model.Hero || mongoose.model("Hero", HeroSchema);
