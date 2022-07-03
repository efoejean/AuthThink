import express, { Request, Response } from 'express';
import itemsContollers from './controller/items.contollers';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json('Hello World!');
});

router.get('/items', async (req: Request, res: Response) => {
  res.json(await itemsContollers.find(req.query));
});

router.get('/items/:id', async (req: Request, res: Response) => {
  try {
    res.json(await itemsContollers.findOne(req.params.id!));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.post('/items/insert', async (req: Request, res: Response) => {
  res.json(await itemsContollers.insert(req.body));
});

router.put('/items/:id', async (req: Request, res: Response) => {
  try {
    res.json(await itemsContollers.update(req.params.id!, req.body));
  } catch {
    res.status(404).json({ message: 'Item not found' });
  }
});

router.delete('/items/delete/:id', async (req: Request, res: Response) => {
  console.log();
  try {
    res.json(await itemsContollers.delete(req.params.id!));
  } catch {
    res.status(404).json({ message: 'Item not found' });
  }
});
export default router;
