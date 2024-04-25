const router = require("express").Router();
const { User} = require("../models/user");
router.get('/', async (req, res) => {
	try {
	  const users = await User.find({});
	  res.json(users);
	} catch (error) {
	  console.error('Error fetching messages:', error);
	  res.status(500).json({ error: 'Internal server error' });
	}
  });

module.exports = router;