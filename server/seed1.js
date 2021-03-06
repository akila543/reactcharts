const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var data=[
  {
  "name":"RS200",
  "company":"BAJAJ",
    "data":[
      {
    "year":2010,
    kms_sum:[{
    month:"may",
    value:14
    },
    {
      month:'sep',
      value:47
    },
    {
      month:'oct',
      value:56
    },
    {
      month:'dec',
      value:58
    }
  ]
},
{
  "year":2011,
  kms_sum:[{
    month:'Jan',
    value:60
  },
{
  month:'Mar',
  value:97
},
{
  month:'Apr',
  value:112
},
{
  month:'May',
  value:132
},
{
  month:'Sep',
  value:164
},
{
month:'Oct',
value:177
}
]
},
{
"year":2012,
kms_sum:[{
month:"jan",
value:186
},
{
month:'feb',
value:195
},
{
month:'apr',
value:214
},
{
month:'jun',
value:214
},
{
  month:'aug',
  value:219
}
]
},
{
"year":2013,
kms_sum:[{
month:"jan",
value:231
},
{
month:'feb',
value:249
},
{
month:'apr',
value:269
},
{
month:'may',
value:277
},
{
  month:'jul',
  value:278
},
{
  month:'aug',
  value:279
},
{
  month:'sep',
  value:286
},
{
  month:'nov',
  value:315
}
]
},
{
"year":2014,
kms_sum:[{
month:"feb",
value:328
},
{
month:'mar',
value:337
},
{
month:'may',
value:351
},
{
month:'sep',
value:361
}
]
},
{
"year":2015,
kms_sum:[{
month:"feb",
value:380
},
{
month:'mar',
value:388
},
{
month:'apr',
value:403
},
{
month:'may',
value:410
}
]
},
{
"year":2016,
kms_sum:[{
month:"oct",
value:422
},
{
month:'nov',
value:429
},
{
month:'dec',
value:458
}
]
},
{
"year":2017,
kms_sum:[{
month:"mar",
value:467
},
{
month:'apr',
value:483
},
{
month:'may',
value:494
},
{
  month:'sep',
  value:506
},
{
  month:'oct',
  value:511
}
]
}
]}
];

MongoClient.connect(url, function(err,client) {
  if (err)
    throw err;

  const db = client.db('bikedata');

  //inserting the opportunities
  db.collection("bike").insertMany(data,function(err,result) {
    if (err) throw err;
    console.log("inserted");
    // client.close();
  })

  client.close();
});
