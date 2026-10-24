import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
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
              className="w-full h-full object-contain pointer-events-none project-video"
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

  const isDesktopFrame = primarySlot?.frame === 'desktop';
  const isPlotline = project.id === 'plotline';

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(620);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = iframeContainerRef.current;
    if (!el) return;

    const updateWidth = () => {
      if (el) {
        setContainerWidth(el.clientWidth || 620);
      }
    };

    updateWidth();
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect && entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [isPlotline]);

  const internalWidth = 1280;
  const internalHeight = 720;
  const scale = containerWidth > 0 ? containerWidth / internalWidth : 1;

  if (isPlotline) {
    return (
      <div className={`w-full max-w-[620px] mx-auto space-y-3 ${className}`}>
        <div className="text-xs font-mono uppercase tracking-wider text-[var(--text)] opacity-90 flex items-center justify-between">
          <span>Live Interactive App Preview</span>
          <a
            href={project.liveUrl || 'https://plotline-phi.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#66FCF1] hover:underline flex items-center gap-1 font-semibold normal-case text-xs focus-ring"
            aria-label="Open Plotline in a new tab"
          >
            Open in new tab <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
        <div className="relative rounded-[20px] bg-[var(--layer-3)] border border-[rgba(197,198,199,0.15)] shadow-[var(--shadow-3)] overflow-hidden">
          {/* Browser top chrome bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B0C10]/95 border-b border-[rgba(197,198,199,0.12)]">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="px-3 py-1 rounded bg-[#1F2833] text-[11px] font-mono text-[#C5C6C7]/90 truncate max-w-[260px] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#66FCF1] animate-pulse" aria-hidden="true" />
              <span>plotline-phi.vercel.app</span>
            </div>
            <a
              href={project.liveUrl || 'https://plotline-phi.vercel.app/'}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center gap-1 text-[#66FCF1] hover:text-white text-xs font-mono transition-colors focus-ring"
              aria-label="Open Plotline application in a new tab"
            >
              <span>External</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Scaled Desktop Iframe Container with 16:9 Aspect Ratio */}
          <div
            ref={iframeContainerRef}
            className="relative w-full aspect-[16/9] bg-[#0B0C10] overflow-hidden"
          >
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0B0C10]/90 z-10 space-y-3">
                <div className="w-6 h-6 border-2 border-[#66FCF1] border-t-transparent rounded-full animate-spin" />
                <span className="font-mono text-xs text-[#C5C6C7]">Loading live Plotline app...</span>
              </div>
            )}
            <iframe
              src="https://plotline-phi.vercel.app/"
              title="Live Plotline application preview"
              loading="lazy"
              onLoad={() => setIframeLoaded(true)}
              className="absolute top-0 left-0 border-0"
              style={{
                width: `${internalWidth}px`,
                height: `${internalHeight}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
            />
          </div>
        </div>
        <p className="font-['Barlow'] text-xs text-[var(--text)] opacity-80 leading-relaxed flex items-center justify-between">
          <span>Fully interactive live preview connected to deployed application at plotline-phi.vercel.app.</span>
          <a
            href={project.liveUrl || 'https://plotline-phi.vercel.app/'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#66FCF1] sm:hidden font-mono text-[11px] inline-flex items-center gap-1 hover:underline"
          >
            Open Plotline <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {video?.src ? (
        <ProjectVideoPlayer video={video} />
      ) : isDesktopFrame && hasPrimaryScreenshot && primarySlot ? (
        (() => {
          const previewContent = (
            <div className="w-full max-w-[620px] mx-auto space-y-3 group cursor-pointer">
              {primarySlot.label && (
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--text)] opacity-90 flex items-center justify-between">
                  <span>{primarySlot.label}</span>
                  <span className="text-[#66FCF1] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold normal-case text-xs">
                    Explore live Plotline <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              )}
              <div className="relative rounded-[20px] bg-[var(--layer-3)] border border-[rgba(197,198,199,0.15)] group-hover:border-[#66FCF1]/50 shadow-[var(--shadow-3)] group-hover:shadow-[var(--glow-accent)] transition-all duration-300 overflow-hidden">
                {/* Browser top chrome bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#0B0C10]/95 border-b border-[rgba(197,198,199,0.12)]">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="px-3 py-1 rounded bg-[#1F2833] text-[11px] font-mono text-[#C5C6C7]/90 truncate max-w-[260px] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#66FCF1] animate-pulse" aria-hidden="true" />
                    <span>plotline-phi.vercel.app</span>
                  </div>
                  <div className="w-10 flex justify-end text-[#66FCF1] opacity-75 group-hover:opacity-100 transition-opacity" aria-hidden="true">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={primarySlot.src}
                    alt={primarySlot.alt}
                    width={primarySlot.width || 1200}
                    height={primarySlot.height || 675}
                    loading="lazy"
                    className="w-full h-auto object-cover block group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  {/* Subtle overlay on hover / touch interaction cue */}
                  <div className="absolute inset-0 bg-[#0B0C10]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center sm:justify-start p-4 pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[10px] bg-[#0B0C10]/95 border border-[#66FCF1]/40 text-[#66FCF1] font-mono text-xs shadow-lg backdrop-blur-md">
                      <span>Explore live Plotline</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </div>
              {primarySlot.caption && (
                <p className="font-['Barlow'] text-xs text-[var(--text)] opacity-80 leading-relaxed flex items-center justify-between">
                  <span>{primarySlot.caption}</span>
                  <span className="text-[#66FCF1] sm:hidden font-mono text-[11px] inline-flex items-center gap-1">
                    Tap to open live app <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </span>
                </p>
              )}
            </div>
          );

          if (project.liveUrl) {
            return (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Explore live Plotline application at ${project.liveUrl} (opens in new tab)`}
                className="block w-full focus-ring rounded-[22px] transition-transform duration-200 hover:-translate-y-1"
              >
                {previewContent}
              </a>
            );
          }
          return previewContent;
        })()
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
