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
    value:14,
    service_activities:{
      "major":"firstservice",
      "minor":null,
      "tyre_in_percentage":99,
      "parts_changed":["oilfilter"]
    }
    },
    {
      month:'sep',
      value:47,
      service_activities:{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
    {
      month:'oct',
      value:56,
      service_activities:{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
    {
      month:'dec',
      value:58,
      service_activities:{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    }
  ]
},
{
  "year":2011,
  kms_sum:[{
    month:'Jan',
    value:60,
    service_activities:{
      "major":null,
      "minor":null,
      "tyre_in_percentage":null,
      "parts_changed":[]
    }

  },
{
  month:'Mar',
  value:97,
  service_activities:{
    "major":"secondservice",
    "minor":null,
    "tyre_in_percentage":95,
    "parts_changed":["oilfilter","airfilter"]
  }
},
{
  month:'Apr',
  value:112,
  service_activities:{
    "major":null,
    "minor":null,
    "tyre_in_percentage":null,
    "parts_changed":[]
  }
},
{
  month:'May',
  value:132,
  service_activities:{
    "major":null,
    "minor":null,
    "tyre_in_percentage":null,
    "parts_changed":[]
  }
},
{
  month:'Sep',
  value:164,
  service_activities:{
    "major":null,
    "minor":null,
    "tyre_in_percentage":null,
    "parts_changed":[]
  }
},
{
month:'Oct',
value:177,
service_activities:{
  "major":null,
  "minor":null,
  "tyre_in_percentage":null,
  "parts_changed":[]
}
}
]
}
]},
{
"name":"Jupiter",
"company":"TVS",
  "data":[
  {
  "year":1991,
  kms_sum:
  [{
  month:"jan",
  value:661,
  service_activities:{
    "major":null,
    "minor":null,
    "tyre_in_percentage":null,
    "parts_changed":[]
  }
},
{
month:"feb",
value:672,
service_activities:{
  "major":null,
  "minor":null,
  "tyre_in_percentage":null,
  "parts_changed":[]
}
},
{
month:"major",
value:711,
service_activities:{
  "major":null,
  "minor":null,
  "tyre_in_percentage":null,
  "parts_changed":[]
}
},
{
month:"jun",
value:714,
service_activities:{
  "major":null,
  "minor":null,
  "tyre_in_percentage":null,
  "parts_changed":[]
}
},
{
month:"sep",
value:727,
service_activities:{
  "major":null,
  "minor":null,
  "tyre_in_percentage":null,
  "parts_changed":[]
}
}
]

},
{
"year":1992,
kms_sum:
[{
month:"may",
value:743,
service_activities:{
  "major":null,
  "minor":null,
  "tyre_in_percentage":null,
  "parts_changed":[]
}
},
{
month:"oct",
value:761,
service_activities:{
"major":null,
"minor":null,
"tyre_in_percentage":null,
"parts_changed":[]
}
},
{
month:"nov",
value:766,
service_activities:{
"major":null,
"minor":null,
"tyre_in_percentage":null,
"parts_changed":[]
}
},
{
month:"dec",
value:768,
service_activities:{
"major":null,
"minor":null,
"tyre_in_percentage":null,
"parts_changed":[]
}
}
]

}]
}
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