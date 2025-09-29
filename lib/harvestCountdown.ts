// Harvest 2025 Countdown Utility
export const HARVEST_2025_DATE = new Date('2025-10-05T00:00:00');

export interface HarvestCountdownData {
  image: string;
  title: string;
  daysLeft: number;
  isToday: boolean;
  isPast: boolean;
}

export function getHarvestCountdownData(): HarvestCountdownData {
  const now = new Date();
  const timeDiff = HARVEST_2025_DATE.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));

  // If the event has passed
  if (daysLeft < 0) {
    return {
      image: '/images/events/harvest2025-today.jpeg',
      title: 'Harvest 2025 - Thank You for Celebrating!',
      daysLeft: 0,
      isToday: false,
      isPast: true,
    };
  }

  // If it's today
  if (daysLeft === 0) {
    return {
      image: '/images/events/harvest2025-today.jpeg',
      title: 'Harvest 2025 - Today is the Day!',
      daysLeft: 0,
      isToday: true,
      isPast: false,
    };
  }

  // If it's within the countdown range (1-6 days)
  if (daysLeft >= 1 && daysLeft <= 6) {
    return {
      image: `/images/events/harvest2025-${daysLeft}.jpeg`,
      title: `Harvest 2025 - ${daysLeft} ${daysLeft === 1 ? 'Day' : 'Days'} to Go!`,
      daysLeft,
      isToday: false,
      isPast: false,
    };
  }

  // If it's more than 6 days away, show the 6-day poster
  return {
    image: '/images/events/harvest2025-6.jpeg',
    title: `Harvest 2025 - Coming October 5th, 2025`,
    daysLeft,
    isToday: false,
    isPast: false,
  };
}

export function formatCountdownText(daysLeft: number, isToday: boolean, isPast: boolean): string {
  if (isPast) return 'Thank you for celebrating with us!';
  if (isToday) return 'Join us today for our Annual Harvest Celebration!';
  if (daysLeft === 1) return 'Tomorrow is our Annual Harvest Celebration!';
  if (daysLeft <= 6) return `Only ${daysLeft} days until our Annual Harvest Celebration!`;
  return `Mark your calendars for October 5th, 2025 - our Annual Harvest Celebration!`;
}
