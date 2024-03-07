import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Faq } from './faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  firestore: Firestore = inject(Firestore);

  async getAll(): Promise<Faq[]> {
    let faqs: Faq[] = [];
    const querySnapshot = await getDocs(collection(this.firestore, 'faq'));
    querySnapshot.forEach((doc) => {
      faqs.push(doc.data() as Faq);
    });
    return faqs;
  }
}
