export module sensor {
  declare var AWS:any;

  export function set_db()
  {
    AWS.config.update({
      region: "sa-east-1",
      endpoint: 'https://dynamodb.sa-east-1.amazonaws.com',
      // accessKeyId default can be used while using the downloadable version of DynamoDB.
      // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
      accessKeyId: "AKIAJI223QIMGMMLAUCA",
      // secretAccessKey default can be used while using the downloadable version of DynamoDB.
      // For security reasons, do not store AWS Credentials in your files. Use Amazon Cognito instead.
      secretAccessKey: "ya4ZgqrgIoGBwxtoFOMIowuZA66hbwO0Tr+xp3J+"
    });
  }

  export function add_data()
  {
    var docClient = new AWS.DynamoDB.DocumentClient();
    var current_time = new Date().getTime();
    var params = {
      TableName: "martinTest",
      Item:{
        "sensor":"try1",
        "timeStamp": current_time.toString()+".txt"
        }
    };
    docClient.put(params, function(err, data) {
      if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
      }
    });
  }
}
