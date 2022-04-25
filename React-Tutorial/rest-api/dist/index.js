"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// Database
const URL = process.env.MONGODB_URL;
mongoose_1.default.connect(URL, {
    autoIndex: false
}, (err) => {
    if (err)
        throw err;
    console.log('Mongodb connection.');
});
// Routes
app.get('/api/products', (req, res) => {
    res.json({ msg: 'Get all products.' });
});
app.get('/api/products/:id', (req, res) => {
    res.json({ msg: 'Get a product by id ${req.params.id}.' });
});
app.post('/', (req, res) => {
    res.json({ msg: 'Add new product.' });
});
app.put('/api/products/:id', (req, res) => {
    res.json({ msg: 'Update product by id ${req.params.id}' });
});
app.delete('/api/products/:id', (req, res) => {
    res.json({ msg: 'Delete a product by id ${req.params.id}' });
});
// Start server Listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map