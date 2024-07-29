const express = require('express');
const app = express();

// Route: /sayHello
app.get('/sayHello', (req, res) => {
    res.json({ message: 'Hello  Vinod Kumar Goud user mobile number is 7674922470' });
});

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
