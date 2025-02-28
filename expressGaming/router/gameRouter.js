const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let games = [
  {
    id: "adowb1b3bb",
    game: "League of Legends",
    description: "League of Legends is a team-based game with over 140 champions to make epic plays with."
  },
  {
    id: "kd7b9ks2nda",
    game: "PlayerUnknown's Battlegrounds",
    description: "PLAYERUNKNOWN'S BATTLEGROUNDS is a last-man-standing shooter being developed with community feedback."
  }
];

router.get('/get-all-games', (req, res) => {
  res.json(games);
});

router.get('/get-game-by-id/:id', (req, res) => {
  const game = games.find(g => g.id === req.params.id);
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: "The game with the id does not exist, please check id" });
  }
});

router.post('/create-new-game', (req, res) => {
  const { game, description } = req.body;
  if (!game || !description) {
    return res.status(400).json({ message: "cannot leave text area blank" });
  }
  if (games.some(g => g.game.toLowerCase() === game.toLowerCase())) {
    return res.status(400).json({ message: "Game already exists, cannot add game" });
  }
  const newGame = { id: uuidv4(), game, description };
  games.push(newGame);
  res.status(201).json(games);
});

router.put('/update-game/:id', (req, res) => {
  const index = games.findIndex(g => g.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "game not found, cannot update" });
  }
  const { game, description } = req.body;
  if (game === '' || description === '') {
    return res.status(400).json({ message: "cannot update with empty values" });
  }
  if (game) games[index].game = game;
  if (description) games[index].description = description;
  res.json(games[index]);
});

router.delete('/delete-game/:id', (req, res) => {
  const index = games.findIndex(g => g.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "game not found, cannot delete" });
  }
  games.splice(index, 1);
  res.json({ message: "Game deleted successfully" });
});

// Extra Credit
router.get('/get-game-by-name/:name', (req, res) => {
  const game = games.find(g => g.game.toLowerCase() === req.params.name.toLowerCase());
  if (game) {
    res.json(game);
  } else {
    res.status(404).json({ message: "The game does not exist, please check name" });
  }
});

module.exports = router;
