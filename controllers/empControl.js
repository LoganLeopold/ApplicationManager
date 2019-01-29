const Employer = require('../models/employer')
const Job = require('../models/job')

module.exports = {

    list: (req,res) => { 
        Employer.find({}).
        populate({
            path: "Jobs",
        }).
        then( emps => {
            res.render('../views/empViews/empIndex', { emps } ) 
            // res.send(emps)
        })
        
    },

    new: (req,res) => {
        res.render('../views/empViews/empNew')
    },

    create: (req,res) => {
        console.log(req.body);
        Employer.create({
            Name: req.body.Name,
            Notes: req.body.Notes,
            AveragePay: req.body.AveragePay,
            Website: req.body.Website,
            Headquarters: req.body.Headquarters,
        }).then( () => {
            res.redirect('/employer')
        })
    }

}