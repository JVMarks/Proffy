import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//METODOS
//GET: BUSCAR OU LISTAR UMA INFORMAÇÃO
//POST: CRIAR ALGUMA NOVA INFORMAÇÃO
//PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE
//DELETE: DELETAR UMA INFORMAÇÃO EXISTENTE 


app.listen(8020);