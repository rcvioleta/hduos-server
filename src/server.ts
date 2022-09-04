import http, { Server } from 'http'

import app from './app'

const PORT: number | string = process.env.PORT ?? 3000

const server: Server = http.createServer(app)

server.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`)
})