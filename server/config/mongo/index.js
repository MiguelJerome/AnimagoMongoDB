import { MongoClient } from "mongodb";

const URI = "mongodb://127.0.0.1:27017/animago";
const options = {};

if (!URL) throw new Error("Please add your Mongo URI to .env.local");

let client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV !== "production") {
	if (!global._mongoClientPromise) {
		global._mongoClientPromise = client.connect();
	}

	clientPromise = global._mongoClientPromise;
} else {
	clientPromise = client.connect();
}

export default clientPromise;
