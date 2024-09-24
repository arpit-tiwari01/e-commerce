import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

export const fetchCollection = (collectionName, setState, setLoading) => {
  setLoading(true);
  const q = query(collection(fireDB, collectionName), orderBy("time"));
  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    const dataArray = [];
    QuerySnapshot.forEach((doc) => {
      dataArray.push({ ...doc.data(), id: doc.id });
    });
    setState(dataArray);
    setLoading(false);
  });
  return unsubscribe;
};

export const deleteDocument = async (collectionName, id, setLoading) => {
  setLoading(true);
  try {
    await deleteDoc(doc(fireDB, collectionName, id));
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error removing document: ", e);
    throw e;
  } finally {
    setLoading(false);
  }
};
