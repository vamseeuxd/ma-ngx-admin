import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Item {
  id: string;
  name: string;
}

@Injectable(
  {
    providedIn: 'root',
  },
)
export class StudentDetails {

  items: Observable<Item[]>;
  private itemsCollection: AngularFirestoreCollection<Item>;

  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    // .valueChanges() is simple. It just returns the
    // JSON data without metadata. If you need the
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
    this.items = this.itemsCollection.valueChanges();
  }

  addItem(name: string) {
    // Persist a document id
    const id = this.afs.createId();
    const item: Item = {id, name};
    this.itemsCollection.doc(id).set(item);
  }

}
