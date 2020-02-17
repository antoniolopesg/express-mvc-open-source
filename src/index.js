import Server from './server';

const PORT = process.env.PORT || 3000;

Server.listen(PORT, () => {
  console.log(`Express server listening on: http://localhost:${PORT}`);
});
