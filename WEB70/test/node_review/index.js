const express = require("express");
const { connectToDb, db } = require("./db");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.get("/products", async (req, res) => {
  try {
    const { token } = req.query;
    if (token) {
      const query = req.query.lowQuantity ? { instock: { $lt: 100 } } : {};
      const products = await db.inventories.find(query).toArray();

      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await db.users.findOne({ username });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ username }, "secret", { expiresIn: "1h" });

  res.json({ token });
});
app.get("/orders", async (req, res) => {
  try {
    const { token } = req.query;
    if (token) {
      const orders = await db.orders.find({}).toArray();

      for (const order of orders) {
        order.products = await db.inventories.findOne({ sku: order.item });
      }
      res.json(orders);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(3000, () => {
  console.log("App is running at 3000");
  connectToDb();
});
