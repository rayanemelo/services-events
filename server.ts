import { app } from "./src/app";

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Server started on port ${port}`));

// process.on("SIGINT", () => {
//   server.close();
//   console.log("Server stopped");
// });
