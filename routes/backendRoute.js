const express = require ("express");
const Backend = require ("../model/Backend");
const {StatusCodes}= require('http-status-codes')
const CustomError= require('../errors')

const backendRouter = express.Router();

backendRouter.route("/api/task").post(async (req, res) => {

    const backend = await Backend.create(req.body)

    res.status(StatusCodes.CREATED).json({
        message: "Successfully created",
        data: backend
    })
})

backendRouter.route("/api/task").get(async (req, res) => {

    let slack_name = req.query.slack_name;
    let track = req.query.track;

    let backend = await Backend.find({}).paginate({slack_name: slack_name, track: track}).exec();
    res.status(StatusCodes.OK).json('index',{
        message: "Successfully retrieved data",
        data: backend
    })
})




module.exports = backendRouter  ;