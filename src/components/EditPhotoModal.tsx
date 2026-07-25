import { useState, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Camera, Upload, Check, RefreshCw, Sparkles, Image as ImageIcon, Sliders, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface EditPhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: string;
  onSaveImage: (newImageUrl: string) => void;
}

export const PHOTO_PRESETS = [
  {
    id: 'studio-dark',
    name: 'Modern Dark Studio',
    tag: 'Active Default',
    url: '/src/assets/images/rohit_bajiya_new_photo_1784976478907.jpg',
    desc: 'Editorial dark studio portrait with subtle purple glow'
  },
  {
    id: 'glass-office',
    name: 'Corporate Glass Lobby',
    tag: 'Executive',
    url: '/src/assets/images/rohit_bajiya_hd_1784976297065.jpg',
    desc: 'Modern architectural background with natural bokeh'
  },
  {
    id: 'corporate-hq',
    name: 'High-Tech HQ',
    tag: 'LinkedIn Pro',
    url: '/src/assets/images/rohit_bajiya_prof_1784975845960.jpg',
    desc: 'Professional lighting with glass building backdrop'
  },
  {
    id: 'natural-sunlight',
    name: 'Natural Outdoor',
    tag: 'Casual Tech',
    url: '/src/assets/images/rohit_bajiya_photo_1784975515380.jpg',
    desc: 'Crisp light blue shirt with natural warm sunlight'
  }
];

export default function EditPhotoModal({
  isOpen,
  onClose,
  currentImage,
  onSaveImage
}: EditPhotoModalProps) {
  const [selectedImage, setSelectedImage] = useState<string>(currentImage);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [isSavedToast, setIsSavedToast] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB. Please choose a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const resultStr = event.target.result as string;
          setSelectedImage(resultStr);
          setUploadedFileName(file.name);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApply = () => {
    onSaveImage(selectedImage);
    setIsSavedToast(true);
    setTimeout(() => {
      setIsSavedToast(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    const defaultImg = PERSONAL_INFO.profileImage;
    setSelectedImage(defaultImg);
    setUploadedFileName(null);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-[#0F0F0F] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header */}
          <div className="p-6 bg-[#141414] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block">
                  PROFILE CUSTOMIZATION
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Edit Portfolio Photo
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: Live Preview Card */}
            <div className="md:col-span-5 flex flex-col items-center">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5 self-start">
                <ImageIcon className="w-3.5 h-3.5 text-[#8B5CF6]" />
                Live Card Preview
              </span>

              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-2xl bg-[#121212] group">
                <img
                  src={selectedImage}
                  alt="Portfolio Photo Preview"
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-purple-300">ROHIT BAJIYA</p>
                    <p className="text-xs font-semibold text-white">DevOps Engineer</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                    Live
                  </span>
                </div>
              </div>

              {uploadedFileName && (
                <div className="mt-3 text-center">
                  <span className="text-[11px] font-mono text-purple-300 truncate max-w-[200px] block">
                    File: {uploadedFileName}
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Presets & Upload Controls */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Custom File Upload Box */}
              <div>
                <label className="text-xs font-mono text-gray-300 block mb-2">
                  1. UPLOAD CUSTOM PHOTO FROM DEVICE
                </label>

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-dashed border-purple-500/40 hover:border-purple-400 text-center flex flex-col items-center justify-center gap-2 transition-all group interactive"
                >
                  <div className="p-3 rounded-full bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-white">
                    Click to select photo from computer
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    Supports PNG, JPG, WEBP up to 10MB
                  </span>
                </button>
              </div>

              {/* Preset Gallery */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono text-gray-300 block">
                    2. OR SELECT A PRE-DESIGNED STYLE
                  </label>
                  <button
                    onClick={handleReset}
                    className="text-[11px] font-mono text-purple-400 hover:underline flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset Default</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {PHOTO_PRESETS.map((preset) => {
                    const isSelected = selectedImage === preset.url;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setSelectedImage(preset.url);
                          setUploadedFileName(null);
                        }}
                        className={`p-2.5 rounded-xl border text-left flex items-center gap-2.5 transition-all ${
                          isSelected
                            ? 'bg-purple-500/20 border-purple-500 text-white shadow-lg'
                            : 'bg-white/[0.02] border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <img
                          src={preset.url}
                          alt={preset.name}
                          className="w-10 h-10 rounded-lg object-cover object-top shrink-0 border border-white/10"
                        />
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold text-white truncate">{preset.name}</p>
                          <p className="text-[10px] text-purple-300 font-mono truncate">{preset.tag}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Save & Action Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleApply}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-xl shadow-purple-950/50 transition-all interactive"
                >
                  <Check className="w-4 h-4" />
                  <span>Set Portfolio Photo</span>
                </button>
              </div>

            </div>

          </div>

          {/* Toast Notification */}
          <AnimatePresence>
            {isSavedToast && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute inset-x-0 bottom-6 mx-auto w-fit px-6 py-3 rounded-full bg-emerald-500/90 text-white font-mono text-xs font-bold shadow-2xl flex items-center gap-2 z-50"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Profile photo updated successfully!</span>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
