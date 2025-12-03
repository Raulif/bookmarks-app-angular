import { Injectable } from '@angular/core';
import { FetchOptions } from '../../types/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  customFetch = async ({ url, method, payload }: FetchOptions) => {
    try {
      const response = await fetch(url, {
        method: method ?? 'GET',
        ...(payload ? { body: JSON.stringify(payload) } : []),
      });
      return await response.json();
    } catch (e) {
      console.error('Error in customFetch', e);
      console.error('Error url: ', url);
      console.error('Error method: ', method);
    }
  };
}
