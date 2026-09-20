import { Award, Download, Share2, ExternalLink } from 'lucide-react';
import type { Certificate } from '../types';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div className="bg-surface border border-borderDim rounded-xl overflow-hidden flex flex-col hover:border-borderDim transition-colors">
      
      {/* Top Section */}
      <div className="p-8 pb-10 flex flex-col items-center text-center relative overflow-hidden">
        {/* Subtle glow effect behind icon */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />
        
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 relative z-10">
          <Award className="text-emerald-500" size={24} />
        </div>
        
        <h3 className="text-xl font-bold text-white tracking-wide mb-1 relative z-10">
          Certificate of Completion
        </h3>
        <p className="text-textMuted text-sm mb-4 relative z-10">This certifies that</p>
        
        <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
          {certificate.studentName}
        </h2>
        
        <p className="text-textMuted text-sm mb-2 relative z-10">has completed</p>
        <h4 className="text-lg font-medium text-white max-w-sm relative z-10 leading-snug">
          {certificate.courseName}
        </h4>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-borderDim" />

      {/* Bottom Section */}
      <div className="p-6 bg-surface flex-1 flex flex-col justify-between">
        
        <div className="grid grid-cols-[auto_1fr] gap-y-3 gap-x-6 text-sm mb-6">
          <span className="text-textMuted">Instructor</span>
          <span className="text-white text-right font-medium">{certificate.instructor}</span>
          
          <span className="text-textMuted">Completed</span>
          <span className="text-white text-right font-medium">{certificate.completedDate}</span>
          
          <span className="text-textMuted">Credential ID</span>
          <span className="text-white text-right font-mono text-xs">{certificate.credentialId}</span>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {certificate.skills.map(skill => (
            <span 
              key={skill} 
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-pink-500/20 text-pink-400 border border-pink-500/20"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto">
          <button className="w-9 h-9 rounded-lg bg-surfaceHighlight border border-borderDim hover:bg-surfaceHighlight text-textMuted hover:text-textMain flex items-center justify-center transition-colors">
            <Download size={16} />
          </button>
          <button className="w-9 h-9 rounded-lg bg-surfaceHighlight border border-borderDim hover:bg-surfaceHighlight text-textMuted hover:text-textMain flex items-center justify-center transition-colors">
            <Share2 size={16} />
          </button>
          <button className="w-9 h-9 rounded-lg bg-surfaceHighlight border border-borderDim hover:bg-surfaceHighlight text-textMuted hover:text-textMain flex items-center justify-center transition-colors">
            <ExternalLink size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
