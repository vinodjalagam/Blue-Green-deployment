const express = require('express');
const app = express();

// Route: /sayHello
app.get('/sayHello', (req, res) => {
    res.json({ message: 'Hello  vinod kumar WelCome Bacck' });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
