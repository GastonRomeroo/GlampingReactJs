import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";

//Herramientas de importacion que pueden ser utiles

//import {collection, addDoc} from "firebase/firestore";
//import ArraydeProductos from "./json/ArrayDeProductos.json";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams(); 


//INSERTO LOS PRODUCTOS DE JSON A FIRESTORE
   
//    useEffect(() =>{
//     const db = getFirestore();
//     const itemsCollection = collection(db, "items")
//     ArraydeProductos.forEach((item) => {
//         addDoc(itemsCollection, item);
//     })

//    }, [])
   

    //para consultar en Firestore por id
    useEffect(()=>{
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if(snapShot.exists()){
                setItem({id: snapShot.id, ...snapShot.data()})
            }
        })
    },[])
    


    return (
        <div>
            <div className="container">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;