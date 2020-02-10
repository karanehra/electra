import * as express from "express"

export const registerRoutes = (app: express.Application) => {
  app.get("/", (req, res) => {
    res.send("Hello")
  })
}
