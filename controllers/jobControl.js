const Employer = require('../models/employer')
const Job = require('../models/job')

module.exports = {

    list: (req, res) => {

        Job.find({})
        .then(jobs => {
            res.render('../views/jobViews/jobIndex', { jobs })
        })
    },

    new: (req, res) => {

        res.render('../views/jobViews/jobNew')

    },


    create: (req, res) => {

        Job.create({

            Title: req.body.Title,
            Location: req.body.Location,
            // //trying to populate the pay with Employer's avg pay
            // Pay: {
            //     type: Schema.Types.ObjectId,
            //     ref: "Employer"
            // },
            // Company:
            // {
            //     type: Schema.Types.ObjectId,
            //     ref: "Employer"
            // },
            Stack: [req.body.Stack],
            ExpMin: req.body.ExpMin,
            ExpMax: req.body.ExpMax,
            RemoteOpt: req.body.RemoteOpt,
            Notes: [req.body.Notes]

        })

    },

    edit: (req, res) => {

        Job.findById(req.params.id)
            .then(job => {
                res.render('../views/jobViews/jobEdit', { job });
                console.log(job.id)
            });

    },

    update: (req, res) => {

        Job.findOneAndUpdate({_id: req.params.id}, { $set: {
            Title: req.body.Title,
            Location: req.body.Location,
            // //trying to populate the pay with Employer's avg pay
            // Pay: {
            //     type: Schema.Types.ObjectId,
            //     ref: "Employer"
            // },
            // Company:
            // {
            //     type: Schema.Types.ObjectId,
            //     ref: "Employer"
            // },
            Stack: [req.body.Stack],
            ExpMin: req.body.ExpMin,
            ExpMax: req.body.ExpMax,
            RemoteOpt: req.body.RemoteOpt,
            Notes: [req.body.Notes] 
        }
    })
    .then((emp) => {
        console.log(req.body)
        res.redirect('/job')
        console.log('Update successful')
    })

    },

    delete: (req, res) => {
    
    Employer.findOneAndDelete({_id: req.params.id})
    .then( then => {
        console.log('Deletion successful');
        res.redirect("/job")
    })

    }

}

