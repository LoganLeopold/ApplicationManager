// I have no idea how to seed so I took this directly from Express-Twitter

const Employer = require('../models/employer')
const Job = require('../models/job')

function seed () {
    
    Employer.find({}).remove(() => {
    Job.find({}).remove(() => {
        let Employer1 = Employer.create({
            
                Name: 'Employer1',
                Headquarters: 'San Francisco',
                Offices: ['New York','Los Angeles','San Francisco'],
                Jobs: [],
                AveragePay: 75000,
                Url: 'https://employer1.com'
            
        }).then(emp => {
                Promise.all([
                    Job.create({

                        Title: 'Junior Developer',
                        Location: 'San Francisco',
                        Pay: emp.AveragePay,
                        Company: emp._id,
                        Stack: ['SCSS','Javascript','Python', 'React'],
                        ExpMin: 2,
                        ExpMax: 5,
                        RemoteOpt: 'Yes',
                        Notes: 'This company seems really great at providing mentorship from their values page and allows folks to work from home or elsewhere provided time overlap with team during the day.'

                      }).then(job => {
                        emp.Jobs.push(job);
                      }),

                      Job.create({

                        Title: 'Software Engineer',
                        Location: 'New York',
                        Pay: emp.AveragePay,
                        Company: emp._id,
                        Stack: ['SCSS','Javascript','Python', 'React'],
                        ExpMin: 2,
                        ExpMax: 5,
                        RemoteOpt: 'Yes',
                        Notes: 'This company seems really great at providing mentorship from their values page and allows folks to work from home or elsewhere provided time overlap with team during the day.'

                      }).then(job => {
                        emp.Jobs.push(job);
                      })

            ]).then(() => {
                emp.save(err => console.log(err));
            })
        })
    })  
})

}

module.exports = seed()