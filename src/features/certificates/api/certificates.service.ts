import api from '@/services/api';
import type { Certificate } from '../types';

export const certificatesService = {
  async getCertificates(): Promise<Certificate[]> {
    const response = await api.get('/certificates');
    return response.data;
  }
};
