**Planning

My idea was to create something useful and something I have been thinking A LOT about managing is the application process, so I thought I'd tackle the management of that process. The app in its full form will allow a user to login and query employers and jobs they've created in the database with full CRUD functionality and relationships between all of the models. A fully realized version would also have a task management system for folks to be able to keep track of their last touchpoint on an app/necessary take-home tech interview dates/etc. 

**Models

My two functioning models are Employers and Jobs. 

The Employer model is as follows:

```
    Name: String,
    Headquarters: String,
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
```

The Jobs model is as follows:

```
    Title: String,
    Location: String,
    Company: String,
    Stack: [String],
    ExpMin: Number,
    ExpMax: Number,
    RemoteOpt: String,
    Notes: []

})
```