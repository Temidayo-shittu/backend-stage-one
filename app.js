require('dotenv').config()
const express= require('express');
const app= express();

app.use(express.json())


app.use('/api',(req,res)=>{
    const { slack_name, track} = req.query;
    const date = new Date();
    const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const current_day = daysOfWeek[date.getDay()];
    const utc_time = date.toISOString().slice(0,-5) + 'Z';

    res.status(200).json({
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url: 'https://github.com/Temidayo-shittu/backend-stage-one/blob/master/app.js',
        github_repo_url: 'https://github.com/Temidayo-shittu/backend-stage-one',
        status_code: 200,

    })
})


const port= process.env.PORT || 5000

const start= async()=>{
    try {
        app.listen(port, console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()
