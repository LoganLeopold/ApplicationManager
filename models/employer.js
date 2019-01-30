const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Employer = new Schema ({

    Name: String,
    // Headquarters: String,
    Offices: [String],
    Jobs: [
        {
          type: Schema.Types.ObjectId,
          ref: "Job"
        }
      ],
    Notes: [],
    AveragePay: Number,
    Website: String,
    Headquarters: String,

})

module.exports = mongoose.model('Employer', Employer)