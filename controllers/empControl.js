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
        console.log(req.query);
        Employer.create({
            Name: req.body.Name,
            Notes: req.body.Notes,
            AveragePay: req.body.AveragePay,
            Website: req.body.Website,
            Headquarters: req.body.Headquarters,
        }).then( () => {
            res.redirect('/employer')
        })
    },

    // edit: (req,res) => {
    //     Employer.findById(req.params.id)
    //     .then( emp => {
    //         res.render('../views/empViews/empEdit', {emp});
    //     });
        // var websiteField = document.querySelectorAll("input[name='Website']");
        //     websiteField.placeholder = emp.Website
    // },

    update: (req,res) => {
// Found the conditional setup within the method here at: 

// https://stackoverflow.com/questions/53092397/conditionally-updating-items-in-mongoose-query

// It's so obvious but I had it in the mongoose method and after the then and before it so this was simple and a God-send.

        var updateBlock = {};
        var emp = req.params.id
        var update = req.body
        
        if (emp.Name !== req.body.Name) {
            updateBlock[Name] = req.body.Name
        }

        Employer.findByIdAndUpdate(
            emp,
            {
                $set: {updateBlock}  
            },
            {},
            function () {},
            )
    }

    

}