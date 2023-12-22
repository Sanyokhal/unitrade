import { firebaseDB } from "@/firebase-config";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { query } from "firebase/firestore/lite";
import { where } from "firebase/firestore/lite";

class DbOperations {
  constructor(collectionTitle) {
    this.dbCollection = collection(firebaseDB, collectionTitle);
  }
  loadItemsList() {
    return new Promise((resolve, reject) => {
      getDocs(this.dbCollection)
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.docs.forEach((doc) => {
            list.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          resolve(list);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  addItem(item) {
    return new Promise((resolve, reject) => {
      addDoc(this.dbCollection, item)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  deleteItem(id) {
    return new Promise((resolve, reject) => {
      deleteDoc(doc(this.dbCollection, id))
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  updateItem(itemId, data) {
    return new Promise((resolve, reject) => {
      const oldDocRef = doc(this.dbCollection, itemId);
      updateDoc(oldDocRef, data)
        .then(() => {
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  loadFilteredData(fieldTitle, compareOperator, valueToCompare) {
    const q = query(
      this.dbCollection,
      where(fieldTitle, compareOperator, valueToCompare)
    );
    return new Promise((resolve, reject) => {
      getDocs(q)
        .then((querySnapshot) => {
          const list = [];
          querySnapshot.docs.forEach((doc) => {
            list.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          resolve(list);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default DbOperations;
