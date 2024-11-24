// client/src/utils/api.ts
import Auth from './auth';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

const API = {
  async fetch(endpoint: string, options: FetchOptions = {}) {
    const token = Auth.getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    const response = await fetch(`/api${endpoint}`, {
      ...options,
      headers,
    });

    if (response.status === 401) {
      Auth.logout();
      window.location.assign('/login');
      throw new Error('Authentication expired');
    }

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'API request failed');
    }

    return response.json();
  },

  getTickets() {
    return this.fetch('/tickets');
  },

  getTicket(id: number) {
    return this.fetch(`/tickets/${id}`);
  },

  createTicket(data: any) {
    return this.fetch('/tickets', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  updateTicket(id: number, data: any) {
    return this.fetch(`/tickets/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  deleteTicket(id: number) {
    return this.fetch(`/tickets/${id}`, {
      method: 'DELETE',
    });
  }
};

export default API;