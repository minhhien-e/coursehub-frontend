import { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import { useSettings } from '@/hooks/useSettings';

export const ProfileForm = () => {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { updateProfile, isLoading } = useSettings();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (avatarUrl) URL.revokeObjectURL(avatarUrl);
      const newUrl = URL.createObjectURL(file);
      setAvatarUrl(newUrl);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateProfile({
      fullName: 'Alex Johnson', // Hardcoded for now
      email: 'alex.johnson@example.com'
    });
  };

  return (
    <div className="bg-[#121814] rounded-xl border border-[#1b251e] p-6 md:p-8 max-w-4xl shadow-sm">
      <h3 className="text-lg font-bold text-zinc-100 mb-6">Profile Information</h3>

      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0">
          <img 
            src={avatarUrl || "https://ui-avatars.com/api/?name=Alex+Johnson&background=333&color=fff"} 
            alt="Avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <input 
          type="file" 
          className="hidden" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/png, image/jpeg, image/webp" 
        />
        
        <Button 
          type="button"
          variant="outline" 
          size="sm" 
          className="space-x-2 text-xs border-zinc-600"
          onClick={handleButtonClick}
        >
          <Camera className="w-4 h-4" />
          <span>Change Photo</span>
        </Button>
        <div className="text-xs text-zinc-500 self-center">
          JPG, PNG or WebP. Max 5 MB.
        </div>
      </div>

      <div className="text-sm text-zinc-400 mb-6">
        Fields marked with <span className="text-red-500">*</span> are required.
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" required>Full Name</Label>
            <Input id="fullName" defaultValue="Alex Johnson" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" required>Email</Label>
            <Input id="email" type="email" defaultValue="alex.johnson@example.com" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="headline">Headline</Label>
          <Input id="headline" defaultValue="Full-Stack Developer & Lifelong Learner" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea 
            id="bio" 
            defaultValue="Passionate about web development and design. Currently learning advanced React patterns and system design."
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" defaultValue="San Francisco, CA" />
        </div>
        
        <div className="border-t border-[#1b251e] my-8"></div>

        <h3 className="text-lg font-bold text-zinc-100 mb-6">Social Links</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" defaultValue="https://alexjohnson.dev" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter">Twitter</Label>
            <Input id="twitter" defaultValue="https://twitter.com/alexj" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input id="linkedin" defaultValue="https://linkedin.com/in/alexjohnson" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github">GitHub</Label>
            <Input id="github" defaultValue="https://github.com/alexjdev" />
          </div>
        </div>

        <div className="flex justify-end pt-4 mt-6">
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
};
