import jwt from 'jsonwebtoken';

//json web token is a secure way to share information between two parties such as a web server and client
//https://jwt.io/
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, "abc123", {
    expiresIn: '30d',
  });
  
  // Set JWT as an HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: true, // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;