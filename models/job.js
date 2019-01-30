const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Job = new Schema ({

    Title: String,
    Location: String,
    //trying to populate the pay with Employer's avg pay
    Pay: {
        type: Schema.Types.ObjectId,
        ref: "Employer"
    },
    Company:
        {
          type: Schema.Types.ObjectId,
          ref: "Employer"
        },
    Stack: [String],
    ExpMin: Number,
    ExpMax: Number,
    RemoteOpt: String,
    Notes: []

})

module.exports = mongoose.model('Job', Job)
