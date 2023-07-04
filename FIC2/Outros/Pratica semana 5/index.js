const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const porta = 443;

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '/home.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.send(html);
    }
  });
});

app.get('/p1.html', (req, res) => {
  const filePath = path.join(__dirname, 'p1.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.send(html);
    }
  });
});

app.get('/p2.html', (req, res) => {
  const filePath = path.join(__dirname, 'p2.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.send(html);
    }
  });
});

app.get('/p3.html', (req, res) => {
  const filePath = path.join(__dirname, 'p3.html');
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erro interno do servidor');
    } else {
      res.send(html);
    }
  });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});