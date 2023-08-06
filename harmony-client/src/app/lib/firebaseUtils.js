import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
	// Your firebase config
}

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

const forumCollection = collection(database, "forum-data")

export { database, forumCollection }
