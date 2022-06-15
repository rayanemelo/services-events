import { app } from "./app";

const port = process.env.PORT || 3006;

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

process.on("SIGINT", () => {
  server.close();
  console.log("Server stopped");
});
