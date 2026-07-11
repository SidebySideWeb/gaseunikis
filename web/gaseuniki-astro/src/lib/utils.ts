export interface OpeningHoursSlot {
  day: string;
  hours: string;
}

export interface SchemaOpeningHours {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

const dayMap: Record<string, string[]> = {
  Δευτέρα: ['Monday'],
  Τρίτη: ['Tuesday'],
  Τετάρτη: ['Wednesday'],
  Πέμπτη: ['Thursday'],
  Παρασκευή: ['Friday'],
  Σάββατο: ['Saturday'],
  Κυριακή: ['Sunday'],
  'Δευτέρα - Παρασκευή': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  'Δευτ - Παρ': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
};

export function parseOpeningHours(slots: OpeningHoursSlot[]): SchemaOpeningHours[] {
  return slots
    .filter((slot) => slot.hours !== 'Κλειστά')
    .map((slot) => {
      const [opens, closes] = slot.hours.split(' - ').map((part) => part?.trim() ?? '');
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: dayMap[slot.day] ?? [],
        opens,
        closes,
      };
    })
    .filter((entry) => entry.dayOfWeek.length > 0 && entry.opens && entry.closes);
}

export function stripUndefined<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}
