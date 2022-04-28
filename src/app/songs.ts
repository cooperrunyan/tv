export default hydrateLinks([
  { name: 'Breed' },
  { name: 'Drain You' },
  { name: 'Come As You Are' },
  { name: 'Sliver' },
  { name: "Tourette's" },
  { name: 'Polly' },
  { name: 'Lithium' },
  { name: 'Stay Away' },
  { name: 'In Bloom' },
  { name: 'Lounge Act' },
  { name: 'Negative Creep' },
  { name: 'D-7' },
  { name: 'The Man Who Sold The World' },
  { name: 'School' },
  { name: 'Blew' },
  { name: 'Dumb' },
  { name: 'All Apologies' },
  { name: 'She' },
  { name: 'When I Come Around' },
  { name: 'Good Riddance' },
  { name: 'American Idiot' },
  { name: 'Holiday' },
  { name: "Hitchin' A Ride" },
  { name: '2000 Light Years Away' },
  { name: 'Brain Stew' },
  { name: 'Geek Stink Breath' },
  { name: 'Longview' },
  { name: 'Platypus' },
  { name: 'At The Library' },
  { name: '409 In Your Coffeemaker' },
  { name: 'Private Ale' },
  { name: 'Going To Pasalacqua' },
]);

function hydrateLinks(links: { name: string; link?: string }[]) {
  return links.map(link => {
    if (!link.link) link.link = `../assets/music/${link.name.toLowerCase()}.mp4`;
    return link;
  }) as { name: string; link: string }[];
}
