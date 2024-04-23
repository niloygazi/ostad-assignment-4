import app from "./app.js";
import router from "./src/routes/routes.js";

app.use("/api", router);
