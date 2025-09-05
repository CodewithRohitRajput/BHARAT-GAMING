"use strict";
// const express = require('express');
// const ConnectDB = require('./config/db')
// const cors = require('cors');
// const dotenv = require('dotenv')
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_js_1 = __importDefault(require("./config/db.js"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const login_js_1 = __importDefault(require("./routes/login.js"));
const signup_js_1 = __importDefault(require("./routes/signup.js"));
const Tournament_js_1 = __importDefault(require("./routes/Tournament.js"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const role_js_1 = __importDefault(require("./routes/role.js"));
const razorpay_js_1 = __importDefault(require("./routes/razorpay.js"));
const team_js_1 = __importDefault(require("./routes/team.js"));
const profile_js_1 = __importDefault(require("./routes/profile.js"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: ['https://bharat-gaming.vercel.app/',
        'http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
(0, db_js_1.default)();
app.use('/login', login_js_1.default);
app.use('/signup', signup_js_1.default);
app.use('/Tournament', Tournament_js_1.default);
app.use('/role', role_js_1.default);
app.use('/payment', razorpay_js_1.default);
app.use('/team', team_js_1.default);
app.use('/Userprofile', profile_js_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
