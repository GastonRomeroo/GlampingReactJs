import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {collection, addDoc,doc, getDoc, getFirestore} from "firebase/firestore";

//Herramientas de importacion que pueden ser utiles

//import {collection, addDoc} from "firebase/firestore";
//import ArraydeProductos from "./json/ArrayDeProductos.json";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams(); 
    /* promesa de un JSON
    useEffect(() => {

        /*const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ArraydeProductos.find(item => item.id === parseInt(id)));
            }, 900)
        });
            
        promesa.then((data) => {
            setItem(data);
        });

    }, [id]);*/


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
    }, [])
    


    return (
        <div>
            <div className="container">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;