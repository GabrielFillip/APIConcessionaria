import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Cadastro de concessionária
router.post('/dealerships', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, address, contact } = req.body;
    if (!name || !address || !contact) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      return;
    }
    const dealership = await prisma.dealership.create({
      data: { name, address, contact }
    });
    res.status(201).json(dealership);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar concessionária.' });
  }
});

// Cadastro de cliente
router.post('/customers', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, contact, dealershipId } = req.body;
    if (!name || !contact || !dealershipId) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      return;
    }
    const customer = await prisma.customer.create({
      data: { name, contact, dealershipId }
    });
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar cliente.' });
  }
});

// Cadastro de veículo
router.post('/vehicles', async (req: Request, res: Response): Promise<void> => {
  try {
    const { brand, model, year, chassis, color, fuel, dealershipId } = req.body;
    if (!brand || !model || !year || !chassis || !color || !fuel || !dealershipId) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      return;
    }
    const vehicle = await prisma.vehicle.create({
      data: { brand, model, year, chassis, color, fuel, dealershipId }
    });
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar veículo.' });
  }
});

// Listar todas as concessionárias
router.get('/dealerships', async (req: Request, res: Response): Promise<void> => {
  try {
    const dealerships = await prisma.dealership.findMany();
    res.json(dealerships);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar concessionárias.' });
  }
});

// Buscar concessionária por ID
router.get('/dealerships/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const dealership = await prisma.dealership.findUnique({ where: { id } });
    if (!dealership) {
      res.status(404).json({ error: 'Concessionária não encontrada.' });
      return;
    }
    res.json(dealership);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar concessionária.' });
  }
});

// Atualizar concessionária
router.put('/dealerships/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const { name, address, contact } = req.body;
    const dealership = await prisma.dealership.update({
      where: { id },
      data: { name, address, contact }
    });
    res.json(dealership);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar concessionária.' });
  }
});

// Remover concessionária
router.delete('/dealerships/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await prisma.dealership.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover concessionária.' });
  }
});

// Listar todos os clientes
router.get('/customers', async (req: Request, res: Response): Promise<void> => {
  try {
    const customers = await prisma.customer.findMany();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar clientes.' });
  }
});

// Buscar cliente por ID
router.get('/customers/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const customer = await prisma.customer.findUnique({ where: { id } });
    if (!customer) {
      res.status(404).json({ error: 'Cliente não encontrado.' });
      return;
    }
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cliente.' });
  }
});

// Atualizar cliente
router.put('/customers/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const { name, contact, dealershipId } = req.body;
    const customer = await prisma.customer.update({
      where: { id },
      data: { name, contact, dealershipId }
    });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar cliente.' });
  }
});

// Remover cliente
router.delete('/customers/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await prisma.customer.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover cliente.' });
  }
});

// Listar todos os veículos
router.get('/vehicles', async (req: Request, res: Response): Promise<void> => {
  try {
    const vehicles = await prisma.vehicle.findMany();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar veículos.' });
  }
});

// Buscar veículo por ID
router.get('/vehicles/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const vehicle = await prisma.vehicle.findUnique({ where: { id } });
    if (!vehicle) {
      res.status(404).json({ error: 'Veículo não encontrado.' });
      return;
    }
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar veículo.' });
  }
});

// Atualizar veículo
router.put('/vehicles/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const { brand, model, year, chassis, color, fuel, dealershipId } = req.body;
    const vehicle = await prisma.vehicle.update({
      where: { id },
      data: { brand, model, year, chassis, color, fuel, dealershipId }
    });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar veículo.' });
  }
});

// Remover veículo
router.delete('/vehicles/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await prisma.vehicle.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover veículo.' });
  }
});

export default router;
