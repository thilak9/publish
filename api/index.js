const app = require("./api");

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Express departed from port ${port}`))