import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.json({ message: 'Another router without graphql' }))

export default router