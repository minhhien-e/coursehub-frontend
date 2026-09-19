import { useState, useRef } from 'react';
import { Camera } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Label } from '@/components/ui/Label';
import { useSettings } from '@/features/profile/hooks/useSettings';
import { useAppSelector } from '@/store/hooks';

export const ProfileForm = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(user?.avatarUrl || null);
  const [avatarFile, setAvatarFile] = useState<File | undefined>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { updateProfile, isLoading } = useSettings();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (avatarUrl && !avatarUrl.startsWith('http')) URL.revokeObjectURL(avatarUrl);
      const newUrl = URL.createObjectURL(file);
      setAvatarUrl(newUrl);
      setAvatarFile(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const headline = formData.get('headline') as string;
    const bio = formData.get('bio') as string;
    const location = formData.get('location') as string;
    
    await updateProfile({
      fullName,
      email,
      headline,
      bio,
      location,
      avatarFile,
      avatarUrl: avatarUrl || undefined
    });
  };

  const defaultFullName = user ? `${user.firstName} ${user.lastName}`.trim() : '';

  return (
    <div className="bg-[#121814] rounded-xl border border-[#1b251e] p-6 md:p-8 max-w-4xl shadow-sm">
      <h3 className="text-lg font-bold text-zinc-100 mb-6">Profile Information</h3>

      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 rounded-full bg-zinc-800 overflow-hidden flex-shrink-0">
          <img 
            src={avatarUrl || `https://ui-avatars.com/api/?name=${defaultFullName || 'Guest'}&background=333&color=fff`} 
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
            <Input id="fullName" name="fullName" defaultValue={defaultFullName} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" required>Email</Label>
            <Input id="email" name="email" type="email" defaultValue={user?.email || ''} required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="headline">Headline</Label>
          <Input id="headline" name="headline" defaultValue="" placeholder="e.g. Full-Stack Developer" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea 
            id="bio" 
            name="bio"
            defaultValue=""
            placeholder="Tell us a little bit about yourself"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" defaultValue="" placeholder="e.g. San Francisco, CA" />
        </div>
        
        <div className="border-t border-[#1b251e] my-8"></div>

        <h3 className="text-lg font-bold text-zinc-100 mb-6">Social Links</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input id="website" name="website" defaultValue="" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitter">Twitter</Label>
            <Input id="twitter" name="twitter" defaultValue="" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input id="linkedin" name="linkedin" defaultValue="" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="github">GitHub</Label>
            <Input id="github" name="github" defaultValue="" />
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

