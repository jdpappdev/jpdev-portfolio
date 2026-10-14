import React, { useEffect, useRef, useState } from 'react';
import { ProjectData } from '../data/portfolioData';

interface ProjectVisualProps {
  project: ProjectData;
  className?: string;
}

const ProjectVideoPlayer: React.FC<{ video: NonNullable<ProjectData['video']> }> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || hasError || isReducedMotion) return;

    videoEl.muted = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoEl.play().catch(() => {});
          } else {
            videoEl.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoEl);
    if (videoEl.offsetParent !== null) {
      videoEl.play().catch(() => {});
    }

    return () => {
      observer.disconnect();
    };
  }, [hasError, isReducedMotion, video.src]);

  return (
    <div className="w-full max-w-[560px] mx-auto space-y-3">
      {video.label && (
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--text)] opacity-90">
          {video.label}
        </div>
      )}

      {/* Stacked Media Frame with Two Offset Back Plates and 32px desktop overlap */}
      <div className="relative lg:-mt-8 mt-0 pr-4 pb-4 sm:pr-6 sm:pb-6">
        {/* Back Plate 2: layer-2, translated 24px down-right, opacity 0.25 */}
        <div
          className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-6 sm:translate-y-6 rounded-[20px] bg-[var(--layer-2)] border border-[rgba(197,198,199,0.10)] opacity-25 pointer-events-none z-0"
          aria-hidden="true"
        />
        {/* Back Plate 1: layer-2, translated 12px down-right, opacity 0.5 */}
        <div
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 sm:translate-x-3 sm:translate-y-3 rounded-[20px] bg-[var(--layer-2)] border border-[rgba(197,198,199,0.10)] opacity-50 pointer-events-none z-[1]"
          aria-hidden="true"
        />

        {/* Front Video Frame: layer-3, radius 20px, shadow-3 */}
        <div
          className="relative z-10 rounded-[20px] bg-[var(--layer-3)] border border-[rgba(197,198,199,0.12)] shadow-[var(--shadow-3)] overflow-hidden flex items-center justify-center"
          style={{ width: '100%', aspectRatio: video.aspect || '1/1' }}
        >
          {hasError || !video.src ? (
            <div className="p-8 text-center flex items-center justify-center w-full h-full">
              <span className="font-mono text-xs text-[var(--text)] opacity-80">
                Video not available yet
              </span>
            </div>
          ) : (
            <video
              ref={videoRef}
              src={video.src}
              poster={video.poster || ''}
              autoPlay={!isReducedMotion}
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              aria-label={video.title}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover pointer-events-none"
              style={{ aspectRatio: video.aspect || '1/1' }}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>

      {video.description && (
        <p className="font-['Barlow'] text-xs text-[var(--text)] opacity-80 leading-relaxed">
          {video.description}
        </p>
      )}
    </div>
  );
};

export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, className = '' }) => {
  const { video, visualSlots } = project;
  const primarySlot = visualSlots?.primary;
  const workflowSlot = visualSlots?.workflow;
  const supportingSlot = visualSlots?.supporting;

  const hasPrimaryScreenshot = primarySlot?.status === 'screenshot' && Boolean(primarySlot.src);
  const hasWorkflowScreenshot = workflowSlot?.status === 'screenshot' && Boolean(workflowSlot.src);
  const hasSupportingScreenshot = supportingSlot?.status === 'screenshot' && Boolean(supportingSlot.src);

  return (
    <div className={`w-full ${className}`}>
      {video?.src ? (
        <ProjectVideoPlayer video={video} />
      ) : (
        (hasPrimaryScreenshot || hasWorkflowScreenshot || hasSupportingScreenshot) && (
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start gap-4 lg:gap-6">
            {hasPrimaryScreenshot && primarySlot && (
              <div className="shrink-0 flex justify-center">
                <div className="relative overflow-hidden flex flex-col justify-between items-center rounded-[24px] border border-[rgba(197,198,199,0.12)] bg-[#1F2833] h-[380px] sm:h-[430px] md:h-[480px] max-h-[480px] w-auto aspect-[9/19.5]">
                  <img
                    src={primarySlot.src}
                    srcSet={primarySlot.srcSet}
                    alt={primarySlot.alt}
                    width={primarySlot.width || 360}
                    height={primarySlot.height || 780}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover rounded-[23px] z-10"
                  />
                </div>
              </div>
            )}

            {(hasWorkflowScreenshot || hasSupportingScreenshot) && (
              <div className="grid grid-cols-2 gap-3 sm:gap-4 items-end shrink-0 justify-center">
                {hasWorkflowScreenshot && workflowSlot && (
                  <div className="relative overflow-hidden flex flex-col justify-between items-center rounded-[24px] border border-[rgba(197,198,199,0.12)] bg-[#1F2833] h-[220px] sm:h-[245px] md:h-[275px] max-h-[275px] w-auto aspect-[9/19.5]">
                    <img
                      src={workflowSlot.src}
                      srcSet={workflowSlot.srcSet}
                      alt={workflowSlot.alt}
                      width={workflowSlot.width || 216}
                      height={workflowSlot.height || 468}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover rounded-[23px] z-10"
                    />
                  </div>
                )}
                {hasSupportingScreenshot && supportingSlot && (
                  <div className="relative overflow-hidden flex flex-col justify-between items-center rounded-[24px] border border-[rgba(197,198,199,0.12)] bg-[#1F2833] h-[220px] sm:h-[245px] md:h-[275px] max-h-[275px] w-auto aspect-[9/19.5]">
                    <img
                      src={supportingSlot.src}
                      srcSet={supportingSlot.srcSet}
                      alt={supportingSlot.alt}
                      width={supportingSlot.width || 216}
                      height={supportingSlot.height || 468}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover rounded-[23px] z-10"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};
