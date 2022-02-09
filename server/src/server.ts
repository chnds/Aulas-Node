import express from 'express';

const app = express();

const users = [
    'Caio',
    'Diego',
    'Laura',
    'Paulo',
];

app.get('/users',(request, response) => {

   return response.json(users);
});

app.get('/users/:id', (request,response)=> {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users',(request,response) => {
    const user = {
        name: 'Diego',
        email: 'Diego@rocketseat.com.br',
    }

    return response.json(user);
})

app.listen(3333);