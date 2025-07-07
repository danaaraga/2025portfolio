import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { FaDownload, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { MdZoomIn, MdZoomOut, MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import { useState, useEffect } from 'react';

interface CVViewerProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
}

const CVViewer = ({ isOpen, onClose, cvUrl }: CVViewerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [zoom, setZoom] = useState(100);

  // Enhanced Jade Color Palette with better contrast
  const jadeColor = "#00A878";
  const jadeDark = "#007A5A";
  const jadeLight = "#4ECDC4";
  const textPrimary = "#1F2937"; // Dark gray for better readability
  const textSecondary = "#6B7280"; // Medium gray
  const textMuted = "#9CA3AF"; // Light gray

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isFullscreen, onClose]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50));
  };

  const resetZoom = () => {
    setZoom(100);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Enhanced Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 ${
          isFullscreen ? 'p-0' : ''
        }`}
        style={{ 
          background: `linear-gradient(135deg, ${jadeColor}08 0%, rgba(0,0,0,0.5) 50%, ${jadeDark}08 100%)`,
          backdropFilter: 'blur(12px)',
        }}
        onClick={onClose}
      >
        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          className={`relative w-full bg-white shadow-2xl overflow-hidden border border-white/20 ${
            isFullscreen 
              ? 'h-full rounded-none' 
              : 'max-w-6xl h-[95vh] sm:h-[90vh] rounded-2xl sm:rounded-3xl'
          }`}
          style={{ 
            boxShadow: `0 25px 60px ${jadeColor}20, 0 0 0 1px ${jadeColor}15`,
          }}
          onClick={e => e.stopPropagation()}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Enhanced Header */}
          <motion.div 
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 border-b ${
              isFullscreen ? 'bg-white/98 backdrop-blur-md' : 'bg-white/95 backdrop-blur-sm'
            }`}
            style={{ 
              background: `linear-gradient(135deg, rgba(255,255,255,0.98) 0%, ${jadeColor}05 100%)`,
              borderBottomColor: `${jadeColor}15`
            }}
            layout
          >
            {/* Title Section */}
            <motion.div className="flex items-center gap-3 flex-1">
              <motion.div
                className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl"
                style={{ backgroundColor: `${jadeColor}15` }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: `${jadeColor}20`,
                  boxShadow: `0 4px 12px ${jadeColor}25`
                }}
                transition={{ duration: 0.2 }}
              >
                <FaFileAlt size={20} style={{ color: jadeDark }} />
              </motion.div>
              <div className="min-w-0 flex-1">
                <h3 
                  className="text-lg sm:text-xl font-bold truncate"
                  style={{ color: textPrimary }}
                >
                  Curriculum Vitae
                </h3>
                <p 
                  className="text-sm mt-0.5 flex items-center gap-2"
                  style={{ color: textSecondary }}
                >
                  <span>Dana Raga - Web Developer</span>
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: jadeColor }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </p>
              </div>
            </motion.div>

            {/* Control Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Zoom Controls */}
              <div 
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-xl border"
                style={{ 
                  backgroundColor: 'rgba(249, 250, 251, 0.9)',
                  borderColor: `${jadeColor}20`
                }}
              >
                <motion.button
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: zoom <= 50 ? 'transparent' : 'rgba(255,255,255,0.8)',
                    color: zoom <= 50 ? textMuted : textSecondary
                  }}
                  whileHover={zoom > 50 ? { 
                    scale: 1.05,
                    backgroundColor: `${jadeColor}10`,
                    color: jadeDark
                  } : {}}
                  whileTap={{ scale: 0.95 }}
                  disabled={zoom <= 50}
                >
                  <MdZoomOut size={16} />
                </motion.button>
                
                <motion.button
                  onClick={resetZoom}
                  className="px-2 py-1 text-xs font-semibold rounded transition-all duration-200"
                  style={{ 
                    color: textPrimary,
                    backgroundColor: 'rgba(255,255,255,0.8)'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: `${jadeColor}15`,
                    color: jadeDark
                  }}
                >
                  {zoom}%
                </motion.button>
                
                <motion.button
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg transition-all duration-200"
                  style={{
                    backgroundColor: zoom >= 200 ? 'transparent' : 'rgba(255,255,255,0.8)',
                    color: zoom >= 200 ? textMuted : textSecondary
                  }}
                  whileHover={zoom < 200 ? { 
                    scale: 1.05,
                    backgroundColor: `${jadeColor}10`,
                    color: jadeDark
                  } : {}}
                  whileTap={{ scale: 0.95 }}
                  disabled={zoom >= 200}
                >
                  <MdZoomIn size={16} />
                </motion.button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {/* Download Button - Enhanced */}
                <motion.a
                  href={cvUrl}
                  download="Dana_Raga_CV.pdf"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
                  style={{
                    backgroundColor: jadeColor,
                    boxShadow: `0 4px 12px ${jadeColor}30`,
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: jadeDark,
                    boxShadow: `0 6px 20px ${jadeColor}40`,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaDownload size={14} className='text-white' />
                  <span className="hidden sm:inline text-white">Download</span>
                </motion.a>

                {/* External Link Button - Enhanced */}
                <motion.a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderColor: `${jadeColor}25`,
                    color: textSecondary
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: `${jadeColor}08`,
                    borderColor: `${jadeColor}40`,
                    color: jadeDark,
                    boxShadow: `0 4px 12px ${jadeColor}20`
                  }}
                  whileTap={{ scale: 0.95 }}
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt size={16} />
                </motion.a>

                {/* Fullscreen Button - Enhanced */}
                <motion.button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2.5 rounded-xl border transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderColor: `${jadeColor}25`,
                    color: textSecondary
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: `${jadeColor}08`,
                    borderColor: `${jadeColor}40`,
                    color: jadeDark,
                    boxShadow: `0 4px 12px ${jadeColor}20`
                  }}
                  whileTap={{ scale: 0.95 }}
                  title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? (
                    <MdFullscreenExit size={16} />
                  ) : (
                    <MdFullscreen size={16} />
                  )}
                </motion.button>
                
                {/* Close Button - Enhanced */}
                <motion.button
                  onClick={onClose}
                  className="p-2.5 rounded-xl border transition-all duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderColor: 'rgba(239, 68, 68, 0.25)',
                    color: textSecondary
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(254, 242, 242, 0.9)',
                    borderColor: 'rgba(239, 68, 68, 0.4)',
                    color: '#DC2626',
                    boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  title="Close (Esc)"
                >
                  <IoMdClose size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CV Content Area */}
          <motion.div 
            className="relative overflow-hidden"
            style={{ 
              height: isFullscreen ? 'calc(100vh - 80px)' : 'calc(95vh - 120px)',
              minHeight: '400px',
              backgroundColor: 'rgba(249, 250, 251, 0.5)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {/* Loading State */}
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-10"
                >
                  <div className="flex flex-col items-center gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-full border-4"
                      style={{ 
                        borderColor: 'rgba(229, 231, 235, 0.8)',
                        borderTopColor: jadeColor
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <p 
                      className="text-sm font-semibold"
                      style={{ color: textSecondary }}
                    >
                      Loading CV...
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CV Frame */}
            <div className="w-full h-full p-3 sm:p-6">
              <motion.div 
                className="w-full h-full overflow-hidden rounded-xl sm:rounded-2xl shadow-lg border bg-white"
                style={{ 
                  borderColor: `${jadeColor}25`,
                  boxShadow: `0 10px 40px rgba(0,0,0,0.08), 0 0 0 1px ${jadeColor}10`,
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: 'center center'
                }}
                animate={{ 
                  scale: zoom / 100,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <iframe
                  src={cvUrl}
                  className="w-full h-full"
                  style={{
                    border: 'none',
                    background: 'white',
                  }}
                  title="Dana Raga - Curriculum Vitae"
                  onLoad={handleIframeLoad}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Footer Info */}
          <motion.div
            className="px-4 sm:px-6 py-3 backdrop-blur-sm border-t text-center"
            style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderTopColor: `${jadeColor}15`
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p 
              className="text-xs flex items-center justify-center gap-2 flex-wrap"
              style={{ color: textMuted }}
            >
              <span>Press <kbd 
                className="px-1.5 py-0.5 rounded text-xs font-semibold"
                style={{ 
                  backgroundColor: `${jadeColor}15`,
                  color: jadeDark,
                  border: `1px solid ${jadeColor}25`
                }}
              >Esc</kbd> to close</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Use zoom controls to adjust size</span>
              <span>•</span>
              <span>Last updated: June 14, 2025</span>
            </p>
          </motion.div>

          {/* Floating Decorative Elements */}
          <motion.div
            className="absolute top-6 right-24 w-2 h-2 rounded-full opacity-25"
            style={{ backgroundColor: jadeLight }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-12 left-12 w-1.5 h-1.5 rounded-full opacity-20"
            style={{ backgroundColor: jadeColor }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CVViewer;