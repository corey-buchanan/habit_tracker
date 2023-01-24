import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signInWithRedirect, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { firebaseConfig } from './config.js';
import { readable } from 'svelte/store';

const app = initializeApp(firebaseConfig);

const userMapper = claims => ({
    id: claims.user_id,
    name: claims.name,
    email: claims.email,
    picture: claims.picture
});

export const initAuth = (useRedirect = false) => {
    const auth = getAuth();

    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        if (useRedirect) {
            return signInWithRedirect(auth, provider);
        } else {
            return signInWithPopup(auth, provider);
        }
    }

    const signUpWithEmail = (email, password) => {
        console.log("Signing up");
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     const user = userCredential.user;
            // })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    }

    const signInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     // Signed in 
            //     const user = userCredential.user;
            // })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    }

    const signUserOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error.code, error.message);
        });
    }

    const user = readable(null, set => {
        const unsub = auth.onAuthStateChanged(async fireUser => {
            if (fireUser) {
                const token = await fireUser.getIdTokenResult();
                const user = userMapper(token.claims)
                set(user)
            } else {
                set(null)
            }
        });
        return unsub;
    });

    return {
        user,
        loginWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        signUserOut
    };
}