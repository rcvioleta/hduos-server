import express, { Application, Request, Response } from 'express'

import testRoute from './routes/test.routes'

const app: Application = express()

app.use(express.json())

app.use('/api', testRoute)

app.use('*', (req: Request, res: Response) => {
  res.send("Route not found 4o4")
})

export default app