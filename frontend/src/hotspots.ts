export type DeskHotspot = {
  id: string;
  /** Accessible name for the object on the desk. */
  objectLabel: string;
  /** Position as percent of the 16:9 desk image. */
  left: number;
  top: number;
  width: number;
  height: number;
  /** Single-line hover text, used when `items` is omitted. */
  hoverText: string;
  /** Menu shown on hover (In / Out / modem). */
  items?: string[];
};

/**
 * Hit boxes measured on the 1280×720 desk illustration.
 * They are percentages so they stay aligned as the image scales.
 */
export const DESK_HOTSPOTS: DeskHotspot[] = [
  {
    id: 'nameplate',
    objectLabel: 'Name plate',
    left: 14.2,
    top: 67.8,
    width: 13.6,
    height: 7.2,
    hoverText: 'DocsGPT',
  },
  {
    id: 'telephone',
    objectLabel: 'Telephone',
    left: 27.0,
    top: 53.5,
    width: 15.2,
    height: 23.5,
    hoverText: 'Voice I/O',
  },
  {
    id: 'in-tray',
    objectLabel: 'In tray',
    left: 40.0,
    top: 50.2,
    width: 17.6,
    height: 18.8,
    hoverText: 'In',
    items: [
      'Chat from Keyboard',
      'Chat from File',
      'Chat from Obsidian',
      'Augmented sources from file',
      'Augmented sources from Obsidian',
    ],
  },
  {
    id: 'out-tray',
    objectLabel: 'Out tray',
    left: 40.0,
    top: 69.0,
    width: 17.6,
    height: 13.5,
    hoverText: 'Out',
    items: ['File', 'Chat box', 'Obsidian'],
  },
  {
    id: 'toolbox',
    objectLabel: 'Toolbox',
    left: 56.6,
    top: 59.8,
    width: 17.0,
    height: 15.0,
    hoverText: 'Settings',
  },
  {
    id: 'modem',
    objectLabel: 'Modem',
    left: 73.2,
    top: 61.8,
    width: 18.4,
    height: 18.0,
    hoverText: 'Enable, Disable',
    items: ['Enable', 'Disable'],
  },
];
