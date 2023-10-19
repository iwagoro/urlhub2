import db from "../utils/firebase";
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc, addDoc, query, limit, where, orderBy, startAt, endAt } from "firebase/firestore";

//get url/preset data
const getData = async (email: string, type: string, num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, orderBy("date"), limit(num));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });

    return data;
};

const getRecentData = async (email: string, type: string, num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, orderBy("date"), limit(num));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });

    return data;
};

//get url/preset data with field name
const getDataWithLowName = async (email: string, type: string, name: string, num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, orderBy("lowName"), startAt(name.toLowerCase()), endAt(name.toLocaleLowerCase() + "\uf8ff"), limit(num));
    const snapshot = await getDocs(q);
    const result = snapshot.docs.map((doc) => doc.data());
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });

    return data;
};

//set data with random name
const addData = async (email: string, type: string, data: any) => {
    const collectionRef = collection(db, "User", email, type);
    await addDoc(collectionRef, data);
};

const setData = async (email: string, type: string, name: string, data: any) => {
    const docRef = doc(db, "User", email, type, name);
    await setDoc(docRef, data);
};

//set data with specified name
const updateData = async (email: string, type: string, name: string, data: any) => {
    const docRef = doc(db, "User", email, type, name);
    await updateDoc(docRef, data);
};

export { getData, setData, updateData, addData, getDataWithLowName, getRecentData };
