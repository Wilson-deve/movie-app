import { Client, Databases } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);
const database = new Databases(client);

export const updateSearchCount = async () => {
  try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, {
      queries: [
        {
          search: "search_count",
        },
      ],
    });
  } catch (error) {
    console.error("Error updating search count:", error);
  }
};
