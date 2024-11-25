import { inject, Injectable } from '@angular/core';
import { collectionData, docData, DocumentReference, Firestore, collection } from '@angular/fire/firestore';
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: Firestore = inject(Firestore);
  constructor() {  }

  getDocument<tipo>(enlace: string){
    const document = doc(this.firestore, enlace) as DocumentReference<tipo, any>;
    return getDoc<tipo, any>(document)
  }

  getDocumentChanges<tipo>(enlace: string) {
    console.log('getDocumentChanges -> ', enlace);
    const document = doc(this.firestore, enlace);
    return docData(document) as Observable<tipo>;
  }

  getCollectionChanges<tipo>(path:string) {
    const refcollection = collection(this.firestore, path);
    return collectionData(refcollection) as Observable<tipo[]>;
  }

  createDocument(data: any, enlace: string) {
    const document = doc(this.firestore, enlace);
    return setDoc(document, data);
  }

  createDocumentID(data: any, enlace: string, idDoc: string) {
    const document = doc (this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data);
  }

  async updateDocumentID(data: any, enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return updateDoc(document, data)
  }

  async updateDocument(data: any, enlace: string) {
    const document = doc(this.firestore, enlace);
    return updateDoc(document, data)
  }

  deleteDocumentID(enlace: string, idDoc: string) {
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return deleteDoc(document);
  }

  deleteDocFromRef(ref: any) {
    return deleteDoc(ref)
  }

  createIdDoc() {
    return uuidv4()
  }

  async getDoc<T>(path: string, id: string): Promise<T | undefined> {
    try {
      const documentRef = doc(this.firestore, `${path}/${id}`);
      const docSnap = await getDoc(documentRef);
      if (docSnap.exists()) {
        return docSnap.data() as T;
      } else {
        console.error('Documento no encontrado');
        return undefined;
      }
    } catch (error) {
      console.error('Error al obtener el documento:', error);
      throw error;
    }
  }


}
