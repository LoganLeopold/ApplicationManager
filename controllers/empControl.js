const Employer = require('../models/employer')
const Job = require('../models/job')

module.exports = {

    list: (req, res) => {
        Employer.find({}).
            populate({
                path: "Jobs",
            }).
            then(emps => {
                res.render('../views/empViews/empIndex', { emps })
                // res.send(emps)
            })

    },

    new: (req, res) => {
        res.render('../views/empViews/empNew')
    },

    create: (req, res) => {
        Employer.create({
            Name: req.body.Name,
            Notes: [req.body.Notes],
            AveragePay: req.body.AveragePay,
            Website: req.body.Website,
            Headquarters: req.body.Headquarters,
        }).then(() => {
            res.redirect('/employer')
        })
    },

    edit: (req, res) => {
        Employer.findById(req.params.id)
            .then(emp => {
                res.render('../views/empViews/empEdit', { emp });
                console.log(emp.id)
            });
            
        // var websiteField = document.querySelectorAll("input[name='Website']");
        //     websiteField.placeholder = emp.Website
    },

    update: (req, res) => {
 
        Employer.findOneAndUpdate({_id: req.params.id}, { $set: {
                Name: req.body.Name,
                Headquarters: req.body.Headquarters,
                AveragePay: req.body.AveragePay,
                Website: req.body.Website}
        })
        .then((emp) => {
            console.log(req.body.AveragePay)
            res.redirect('/employer')
            console.log('Update successful')
        })
    }

}







 // Found the conditional setup within the method here at: 

        // https://stackoverflow.com/questions/53092397/conditionally-updating-items-in-mongoose-query

        // It's so obvious but I had it in the mongoose method and after the then and before it so this was simple and a God-send.

        // var updateBlock = {};
        // var updateSetBlock = {}
        // var emp = req.params.id
        // var update = req.body

        // if (update.Name !== null) {
        //     updateBlock[Name] = update.Name
        // }

        // if (emp.Notes.includes(update.Notes) ) {
        //     return
        // } else {
        //     updateSetBlock[Notes] = [update.Notes]
        // }

         // if (req.body.Name !== null) {
            //     emp.Name = req.body.Name
            // }

            // if (update.AveragePay !== null) {
            //     emp.AveragePay = req.body.AveragePay
            // }
            
            // emp.save( (err, product) => {
            //     console.log(err);
            //     res.redirect('/employer');
            // })

  // {
            
            // },
            // {
            //     {$set: {updateBlock}},
            //     $addToSet: {updateSetBlock},
            //     AveragePay: req.body.AveragePay 

            // },