const Employer = require('../models/employer')
const Job = require('../models/job')

module.exports = {

    list: (req,res) => { 
        Employer.find({}).then( emps => {
            res.render('../views/empViews/empIndex', emps)
        })
        
    },
    
}