import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { PrismaClient } from '@prisma/client';
import swaggerDocument from './swagger.json'; // Certifique-se que resolveJsonModule está ativado no tsconfig.json
import routes from './routes';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
