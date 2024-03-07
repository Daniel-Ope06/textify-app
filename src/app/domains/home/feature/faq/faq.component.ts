import { Component, OnInit, inject } from '@angular/core';
import { FaqService } from '../../data-access/faq.service';
import { LoadingSpinnerComponent } from '../../../shared/ui/loading-spinner/loading-spinner.component';

@Component({
  selector: 'faq',
  standalone: true,
  imports: [LoadingSpinnerComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  private faqService: FaqService = inject(FaqService);
  faqs: { question: string, answer: string, isOpen: boolean }[] = [];

  ngOnInit() {
    this.faqService.getAll().then((faqs) => {
      for (let faq of faqs) {
        this.faqs.push({ question: faq.question, answer: faq.answer, isOpen: false });
      }
    });
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
