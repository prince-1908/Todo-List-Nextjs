import { Client, Databases } from "appwrite";
import config from "@/configuaration/appwriteConfig";

const client = new Client();

client
	.setEndpoint(config.appwriteUrl) // API Endpoint
	.setProject(config.appwriteProjectId); // Project ID

const databases = new Databases(client);

export { databases };
