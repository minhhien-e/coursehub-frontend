import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchCertificates } from '../store/certificatesSlice';
import { CertificateCard } from './CertificateCard';
import { Loader2 } from 'lucide-react';

export const CertificatesView = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector((state) => state.certificates);

  useEffect(() => {
    dispatch(fetchCertificates());
  }, [dispatch]);

  if (isLoading && items.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <Loader2 className="w-10 h-10 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white mb-2">Certificates</h1>
        <p className="text-zinc-400">{items.length} certificates earned</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {items.map(cert => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
      
    </div>
  );
};
