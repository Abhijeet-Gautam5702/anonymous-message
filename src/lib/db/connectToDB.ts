import mongoose from "mongoose";

// TypeScript type for the connection-object containing the mongoDB Connection Status
type ConnectionType = {
  isConnected?: number; // An optional field with data-type as number
};

// Initialize the connection object
/*
    NOTE: Due to the edge-time nature of NextJS, the backend isn't running all the time. So the connection will be made once initially and then we will check whether the connection is present or not. If already present, then there is no need to make another connection to the database.

    For the very first time, the connection object will be empty, and will be populated when the connection is made for the first time. 
    From the next time onwards, this connection object will be checked for existing connections.
*/
const connection: ConnectionType = {};

const connectToDB = async (): Promise<void> => {
  // Check if the connection is already present
  if (connection.isConnected) {
    console.log(`MongoDB Database Already Connected`);
    return;
  }
  // If connection not already present => Attempt to make a connection request to the Database
  try {
    const response = await mongoose.connect(
      `${process.env.MONGO_DB_CONNECTION_STRING}/${process.env.DB_NAME}` || ""
    );

    // After the connection is successfully done => populate the connection object
    connection.isConnected = response.connections[0].readyState;

    console.log(`MongoDB Database Connection Successful`);
  } catch (error: any) {
    console.log(
      `MongoDB Database Connection Failed | Error = ${error.message}`
    );
    process.exit(1); // Exit the process in case of any error
  }
};

export default connectToDB;
