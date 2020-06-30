import AuthController from './controllers/AuthController';

export default function (App) {
  App.get('/', (req, res) => {
    res.status(200).send({ message: 'Welcome to Node.js API 😁' })
  })

  App.post('/login', AuthController.authenticate)
  App.get('/load-session', AuthController.validateSession, AuthController.loadSession)
}
