import { user } from "../components/Auth.svelte";
import { getDatabase, ref, set, onValue } from "firebase/database";

let uid = "";
user.subscribe(u => {
    if (u !== null) uid=u.id;
});

let db = getDatabase();

export const datastore = () => {
    
    const writeUserData = (path, data) => {
        set(ref(db, `users/${uid}/${path}`), data);
    }
    
    const readUserData = (path, onUpdate) => {
        const userDataRef = ref(db, `users/${uid}/${path}`);
        
        onValue(userDataRef, (snapshot) => {
            onUpdate(snapshot.val());
        });
    }

    return {
        readUserData,
        writeUserData
    }
    
}
