import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import ArraydeProductos from "./json/ArrayDeProductos.json";
import {doc, getDoc, getFirestore} from "firebase/firestore";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    /* promesa de un JSON
    useEffect(() => {

        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(ArraydeProductos.find(item => item.id === parseInt(id)));
            }, 900)
        });

        promesa.then((data) => {
            setItem(data);
        });

    }, [id]);*/


    //para consultar en Firestore por id
    useEffect(()=>{
        const db = getFirestore();
        const documento = doc(db, "items","FrYa7kr4I742Fluh2sKO");
        getDoc(documento).then((snapShot) => {
            if(snapShot.exists()){
                setItem({id:snapShot.id, ...snapShot.data()})
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