import React from 'react'
import {app1} from './app1'

import { getFirestore } from "firebase/firestore";

import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 

const db = getFirestore(app1);
export default class Firebase1 extends React.Component{
constructor(){
    super()
}

componentDidMount=async()=>{
    console.log(app1);
const citiesRef = collection(db, "cities");

await setDoc(doc(citiesRef, "SF1"), {
    name: "hanu", state: "CA", country: "USA", });


this.readFire()
}
readFire=async()=>{
    const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  console.log("Document data:", docSnap.data().name);
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}

}
    render(){
        return(
            <>
            <h1>firebase1</h1>
            </>
        )
    }
}