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
            
            // Pay: {
            //     type: Schema.Types.ObjectId,
            //     ref: "Employer"
            // },
            Company: req.body.Company,
            // Company:
            // {
            //     type: Schema.Types.ObjectId,
            //     ref: "Employer"
            // },
            // Stack: [req.body.Stack],
            ExpMin: req.body.ExpMin,
            ExpMax: req.body.ExpMax,
            RemoteOpt: req.body.RemoteOpt,
            Notes: [req.body.Notes]

        }).then((job) => {
            Employer.findOneAndUpdate(
                {Name: req.body.Company},
                { $push: { Jobs: req.body.id} },
                {upsert: true},
            ).then ( emp => {
                res.redirect('/employer')
            });
            
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
            Company: req.body.Company,
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
    
    Job.findOneAndDelete({_id: req.params.id})
    .then( then => {
        console.log('Deletion successful');
        res.redirect("/job")
    })

    }

}

