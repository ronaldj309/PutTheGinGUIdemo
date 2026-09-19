import type { DeskHotspot } from './hotspots';

type HotspotProps = {
  hotspot: DeskHotspot;
  showOutline: boolean;
  onSelect: (source: string, action: string) => void;
};

export default function Hotspot({
  hotspot,
  showOutline,
  onSelect,
}: HotspotProps) {
  const hasMenu = (hotspot.items?.length ?? 0) > 0;

  return (
    <div
      className="group absolute"
      style={{
        left: `${hotspot.left}%`,
        top: `${hotspot.top}%`,
        width: `${hotspot.width}%`,
        height: `${hotspot.height}%`,
      }}
    >
      <button
        type="button"
        className={`h-full w-full rounded-sm bg-transparent ${
          showOutline
            ? 'ring-amber-400/70 ring-2'
            : 'hover:ring-amber-300/80 focus-visible:ring-amber-300/80 hover:ring-2 focus-visible:ring-2'
        }`}
        aria-label={
          hasMenu
            ? `${hotspot.objectLabel}. Hover for ${hotspot.hoverText} actions`
            : `${hotspot.objectLabel}. ${hotspot.hoverText}`
        }
        onClick={() => {
          if (!hasMenu) {
            onSelect(hotspot.objectLabel, hotspot.hoverText);
          }
        }}
      />

      <div
        role="tooltip"
        className="absolute bottom-full left-1/2 z-20 w-max max-w-[min(20rem,80vw)] -translate-x-1/2 pt-0 pb-2 opacity-0 pointer-events-none transition-opacity duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto"
      >
        <div className="bg-popover text-popover-foreground border-border rounded-lg border px-3 py-2 text-xs leading-snug shadow-md">
          {hasMenu ? (
            <>
              <p className="text-muted-foreground mb-1.5 text-[10px] font-medium tracking-wide uppercase">
                {hotspot.hoverText}
              </p>
              <ul className="flex flex-col gap-0.5">
                {hotspot.items?.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      className="hover:bg-muted w-full rounded px-1.5 py-1 text-left font-medium"
                      onClick={() => onSelect(hotspot.objectLabel, item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <span className="font-medium">{hotspot.hoverText}</span>
          )}
        </div>
      </div>
    </div>
  );
}
