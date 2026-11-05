import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import {
  ContactApiResponse,
  ContactPayload,
} from '../models/contact.models';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = environment.contactUrl;

  sendContact(data: ContactPayload): Observable<ContactApiResponse> {
    return this.http.post<ContactApiResponse>(
      this.apiUrl,
      data
    );
  }
}