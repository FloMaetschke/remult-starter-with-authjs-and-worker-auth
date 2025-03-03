import express from "express";
import { auth } from "./auth.js";
import { api } from "./api.js";
import { customApi } from './custom-api'

const app = express();

app.set("trust proxy", true);
app.use("/auth/*", auth);
app.use(api);

// Füge den benutzerdefinierten Router hinzu
app.use(customApi);

// This code is responsible for serving the frontend files.
const frontendFiles = process.cwd() + "/dist/remult-starter-with-authjs-and-worker-auth/browser";
app.use(express.static(frontendFiles));
app.get("/*", (_, res) => {
  res.sendFile(frontendFiles + "/index.html");
});
// end of frontend serving code



app.listen(process.env["PORT"] || 6004, () => console.log("Server started"));
