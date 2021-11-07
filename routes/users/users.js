import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import { check, validationResult } from 'express-validator';
import User from '../../models/Users.js';

const router = express.Router();

// @route    POST api/users
// @desc     Register user
// @access   Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('mobile', 'Please add a 10 digit mobile number').isMobilePhone(),
    check('pincode', 'Please add a 6 digit pincode number').isLength({
      min: 6,
      max: 6,
    }),
    check('age', 'Please enter a valid age').isNumeric(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, mobile, pincode, age, password } = req.body;

    try {
      let user = await User.findOne({ mobile });

      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        name,
        mobile,
        pincode,
        age,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

export default router;
