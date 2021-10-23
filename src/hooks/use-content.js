import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

// here 'target' is 'films' or 'series' - user selects
// and this hook conditionally displays the content for each accordingly

// this hook is implemented on the browse page browse.js
export default function useContent(target) {
    const [content, setContent] = useState([]);
    const { firebaseApp } = useContext(FirebaseContext);

    useEffect(() => {
        firebaseApp
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    // we need doc id for each item because react needs item id's
                    docId: contentObj.id,
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, []);

    // return an object of series or films that we will call 'content'
    return { [target]: content };
}
