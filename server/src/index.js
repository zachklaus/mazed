const { Server } = require ("./server");

const mazedServer = new Server('localhost', 8081);
mazedServer.run();