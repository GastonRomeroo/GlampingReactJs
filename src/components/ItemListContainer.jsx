import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ArraydeProductos from "./json/ArrayDeProductos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams() 

   /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? ArraydeProductos.filter(item =>  item.cat === id) : ArraydeProductos);
            }, 2000);
        });
        promesa.then((data) => {
            setItems(data);
        })
    }, [id])
    */



//INSERTO LOS PRODUCTOS DE JSON A FIRESTORE
   /*
   useEffect(() =>{
    const db = getFirestore();
    const itemsCollection = collection(db, "items")
    ArraydeProductos.forEach((item) => {
        addDoc(itemsCollection, item);
    })

   }, [])
   */
//CONSULTAR COLLECTION DE MIS PRODUCTOS

   useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db,"items");
    //const q = query(itemsCollection, where("cat", "==", "Carpas"))
    const q = id ? query(itemsCollection, where("cat", "==", id)) : itemsCollection;


    getDocs(q).then((snapShot) =>{
        setItems(snapShot.docs.map((doc) => 
        ({id: doc.id, ...doc.data()})
        ))
    });
   },[])


    return (
        <div className="container py-3">
            <ItemList items={items} />
        </div>
    )
};

export default ItemListContainer