const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var data=[
  {
  "name":"RS200",
  "company":"BAJAJ",
    "data":[
      {"date":"May 2010",
        "kms_sum":14,
        "service_activities":{
          "major":"firstservice",
          "minor":null,
          "tyre_in_percentage":99,
          "parts_changed":["oilfilter"]
        }
      },
      {"date":"Sep 2010",
        "kms_sum":47,
        "service_activities":{
         "major":null,
         "minor":null,
         "tyre_in_percentage":null,
          "parts_changed":[]
          }
      },
      {"date":"Oct 2010",
        "kms_sum":56,
        "service_activities":{
         "major":null,
         "minor":null,
         "tyre_in_percentage":null,
          "parts_changed":[]
          }
      },
      {"date":"Dec 2010",
        "kms_sum":58,
        "service_activities":{
         "major":null,
         "minor":null,
         "tyre_in_percentage":null,
          "parts_changed":[]
          }
      },
      {"date":"Jan 2011",
        "kms_sum":60,
        "service_activities":{
         "major":null,
         "minor":null,
         "tyre_in_percentage":null,
          "parts_changed":[]
          }
      },
      {"date":"Mar 2011",
        "kms_sum":97,
        "service_activities":{
         "major":"second service",
         "minor":null,
         "tyre_in_percentage":95,
          "parts_changed":["air filter","oil filter"]
          }
      },
      {"date":"Apr 2011",
        "kms_sum":112,
        "service_activities":{
         "major":null,
         "minor":null,
         "tyre_in_percentage":null,
          "parts_changed":[]
          }
      },
      {"date":"May 2011",
        "kms_sum":132,
        "service_activities":{
         "major":null,
         "minor":null,
         "tyre_in_percentage":null,
          "parts_changed":[]
          }
      },
      {"date":"Sep 2011",
        "kms_sum":162,
        "service_activities":{
         "major":null,
         "minor":null,
         "tyre_in_percentage":null,
          "parts_changed":[]
          }
      }


  ]
},
{
"name":"Yamaha",
"company":"Yamaha",
  "data":[
    {"date":"11-01-2017",
      "kms_sum":60,
      "service_activities":{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
    {"date":"11-03-2017",
      "kms_sum":97,
      "service_activities":{
       "major":"second service",
       "minor":null,
       "tyre_in_percentage":95,
        "parts_changed":["air filter","oil filter"]
        }
    },
    {"date":"11-04-2017",
      "kms_sum":112,
      "service_activities":{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
    {"date":"11-05-2017",
      "kms_sum":132,
      "service_activities":{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
    {
      "date":"10-09-2017",
      "kms_sum":47,
      "service_activities":{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
    {"date":"11-09-2017",
      "kms_sum":164,
      "service_activities":{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
    {
      "date":"05-10-2017",
      "kms_sum":14,
      "service_activities":{
        "major":"firstservice",
        "minor":null,
        "tyre_in_percentage":99,
        "parts_changed":["oil filter"]
      }
    },

    {
      "date":"10-10-2017",
      "kms_sum":56,
      "service_activities":{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
    {"date":"10-11-2017",
      "kms_sum":58,
      "service_activities":{
        "major":null,
        "minor":null,
        "tyre_in_percentage":null,
        "parts_changed":[]
      }
    },
]
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
