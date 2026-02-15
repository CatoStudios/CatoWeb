const social = [
  {squery:'discord', slink:"https://discord.gg/Yaq5HWP3h2"},
  {squery:'twitch', slink:"https://www.twitch.tv/catoklysm/"},
  {squery:'pronounspage', slink:"https://en.pronouns.page/@Catoklysm"},
  {squery:'telegram', slink:"https://t.me/catoklysm"},
  {squery:'bluesky', slink:"https://bsky.app/profile/catoklysm.bsky.social"},
  {squery:'fluxer', slink:"https://fluxer.gg/1IyLQiOb"}
];

const url = new URL(document.location);

window.addEventListener('load', () => {
  let query = url.searchParams.get('q');
  if (query) {
    query = query.toLowerCase();
    const match = social.find(content => content.squery === query);
    if (match) {
      window.location.href = match.slink; // direct redirect
      return;
    }
  }
  // fallback redirect if nothing matches
  window.location.href = "https://catostudios.github.io/CatoWeb/links";
});

