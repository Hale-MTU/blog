export const site = {
<<<<<<< Updated upstream
  title: 'OpenVitals Blog',
  description: 'News and write-ups from the OpenVitals project.',
  url: 'https://blog.openvitals.health',
  repository: 'https://github.com/OpenVitals-MTU/blog'
=======
  title: 'Hale blog',
  description: 'News and write-ups from Hale: OpenVitals, OpenWatch and OpenBridge.',
  url: 'https://blog.hale.ngo',
  repository: 'https://github.com/Hale-MTU/blog'
>>>>>>> Stashed changes
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
