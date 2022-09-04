import express, { Router, Request, Response } from 'express'

const testRoute: Router = express.Router()

testRoute.use('/test', (req: Request, res: Response) => {
  return res.json({
    message: "Test route works!"
  })
})

export default testRoute