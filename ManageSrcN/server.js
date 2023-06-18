const app = require("./src/app");
const PORT = process.env.PORT || 3052;

const server = app.listen(PORT, () => {
    console.log(`******* Server running on port http://localhost:${PORT} *******`);
});

//# CRT + C -> server đóng
process.on('SIGINT', () => {
    server.close(() => { console.log('******* Server Exit *******'); });
});