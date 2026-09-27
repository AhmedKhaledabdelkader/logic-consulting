import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  ContactApiResponse,
  ContactPayload,
} from '../models/contact.models';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://dallas-clean-level-thru.trycloudflare.com/api/contact';

  sendContact(data: ContactPayload): Observable<ContactApiResponse> {
    return this.http.post<ContactApiResponse>(
      this.apiUrl,
      data
    );
  }
}