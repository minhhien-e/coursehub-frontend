import type { Certificate } from '../types';
import { mockCertificates } from '../data/mockCertificates';

export const certificatesService = {
  async getCertificates(): Promise<Certificate[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCertificates);
      }, 500);
    });
  }
};
