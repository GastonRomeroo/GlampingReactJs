import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//import ArraydeProductos from "./json/ArrayDeProductos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const { id } = useParams()



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
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("cat", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setLoading(false);
        });
    }, [id]);


    return (
        <div className="container py-3">
            {loading ? <loading /> :<ItemList items={items}/>}
        </div>
    )
};

export default ItemListContainer