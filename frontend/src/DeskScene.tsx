import { useState } from 'react';

import Hotspot from './Hotspot';
import { DESK_HOTSPOTS } from './hotspots';

export default function DeskScene() {
  const [showOutlines, setShowOutlines] = useState(true);
  const [lastAction, setLastAction] = useState(
    'Hover an object on the desk. In, Out, and the modem open a list.',
  );

  return (
    <div className="flex h-full min-h-0 flex-col">
      <header className="flex shrink-0 flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div>
          <h1 className="text-base font-medium">Reference desk hover demo</h1>
          <p className="text-muted-foreground text-xs">
            Standalone illustration — not connected to DocsGPT.
          </p>
        </div>
        <label className="flex cursor-pointer items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showOutlines}
            onChange={(event) => setShowOutlines(event.target.checked)}
            className="accent-amber-400"
          />
          Show hit areas
        </label>
      </header>

      <div className="flex min-h-0 flex-1 items-center justify-center px-3 pb-3">
        <div className="relative aspect-video w-full max-w-[1280px] overflow-hidden rounded-md shadow-lg">
          <img
            src="/desk.jpg"
            alt="Modern library reference desk with name plate, telephone, in and out trays, red toolbox, and modem"
            className="h-full w-full object-cover"
          />
          {DESK_HOTSPOTS.map((hotspot) => (
            <Hotspot
              key={hotspot.id}
              hotspot={hotspot}
              showOutline={showOutlines}
              onSelect={(source, action) => {
                setLastAction(`${source}: ${action} (demo only)`);
              }}
            />
          ))}
        </div>
      </div>

      <p className="border-border shrink-0 border-t bg-black/40 px-4 py-2 text-sm">
        {lastAction}
      </p>
    </div>
  );
}
