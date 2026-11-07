export const site = {
  title: 'Hale blog',
  description: 'News and write-ups from Hale: OpenVitals, OpenWatch and OpenBridge.',
  url: 'https://blog.hale.ngo',
  repository: 'https://github.com/Hale-MTU/blog'
}

// Front matter dates carry no time zone and parse as UTC midnight, so they are
// printed in UTC too; a local zone west of UTC would show the day before.
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  })
}
