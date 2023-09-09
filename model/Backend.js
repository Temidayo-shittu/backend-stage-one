const mongoose= require('mongoose')
const validator= require('validator')

const BackendSchema = new mongoose.Schema({
    slack_name:{
        type:String,
        required:[true, 'Please provide your slack-name'],
    },
    current_day:{
        type:String,
    },
    utc_time:{
        type:Date,
        default: Date.now()
    },
    track:{
        type:String
    },
    github_file_url:{
        type:String
    },
    github_repo_url: {
        type:String
    },
    status_code: {
        type: String,
        default: '200'
    }
})


module.exports= mongoose.model('Backend',BackendSchema)