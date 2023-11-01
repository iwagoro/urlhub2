import db from "../utils/firebase";
import { collection, getDocs, doc, setDoc, deleteDoc, updateDoc, addDoc, query, limit, where, orderBy, startAt, endAt, startAfter, endBefore } from "firebase/firestore";

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

const getDataWithArray = async (email: string, type: string, array: string[], num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, where("presets", "array-contains-any", array), limit(num));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });
    return data;
};

const getNextRecentData = async (email: string, type: string, num: number, start: Date) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, orderBy("date", "desc"), limit(num), startAfter(start));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });
    return data;
};

const getBeforeRecentData = async (email: string, type: string, num: number, start: Date) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, orderBy("date", "desc"), limit(num), endBefore(start));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });
    return data;
};

const getRecentData = async (email: string, type: string, num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, orderBy("date", "desc"), limit(num));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });

    return data;
};

const getDataWithName = async (email: string, type: string, array: string, num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    const q = query(collectionRef, where("name", "in", array), limit(num));
    const snapshot = await getDocs(q);
    snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // ドキュメントのデータをオブジェクトとして追加
    });
};

//get url/preset data with field name
const getDataWithLowName = async (email: string, type: string, name: string, num: number) => {
    let data: any = [];
    const collectionRef = collection(db, "User", email, type);
    console.log(name);
    const q = query(collectionRef, orderBy("lowName"), startAt(name.toLowerCase()), endAt(name.toLocaleLowerCase() + "\uf8ff"), limit(num));
    const snapshot = await getDocs(q);
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

const deleteData = async (email: string, type: string, name: string) => {
    const docRef = doc(db, "User", email, type, name);
    await deleteDoc(docRef);
};

export { getData, setData, updateData, addData, getDataWithLowName, getRecentData, getNextRecentData, getBeforeRecentData, getDataWithArray, deleteData };
