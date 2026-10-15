/**
 * Lit le fichier Markdown `content/contenu.md` (éditable à la main) et le
 * transforme en données utilisables par le site.
 */

/** Découpe le document en sections `## Titre`. */
function splitSections(md) {
  const sections = {};
  let current = null;
  for (const line of md.split('\n')) {
    const h = line.match(/^##\s+(.+?)\s*$/);
    if (h && !line.startsWith('###')) {
      current = h[1].trim();
      sections[current] = [];
    } else if (current) {
      sections[current].push(line);
    }
  }
  return sections;
}

/** Paragraphes d'une section (blocs séparés par une ligne vide, hors notes `>`). */
function paragraphs(lines = []) {
  return lines
    .join('\n')
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p && !p.startsWith('>') && !p.startsWith('#'));
}

function field(lines, label) {
  const re = new RegExp(`^-\\s*${label}\\s*:\\s*(.+)$`, 'i');
  for (const l of lines) {
    const m = l.trim().match(re);
    if (m) return m[1].trim();
  }
  return '';
}

function testimonials(lines = []) {
  const items = [];
  let author = null;
  let block = [];
  const flush = () => {
    if (author === null) return;
    const quote = field(block, 'Citation');
    if (quote) {
      items.push({
        quote,
        author,
        role: field(block, 'Fonction'),
        company: field(block, 'Entreprise'),
      });
    }
  };
  for (const line of lines) {
    const h = line.match(/^###\s+(.+?)\s*$/);
    if (h) {
      flush();
      author = h[1].trim();
      block = [];
    } else {
      block.push(line);
    }
  }
  flush();
  return items;
}

function stats(lines = []) {
  return lines
    .map((l) => l.trim().match(/^-\s*(.+?)\s*\|\s*(.+)$/))
    .filter(Boolean)
    .map((m) => ({ value: m[1].trim(), label: m[2].trim() }));
}

export function parseContent(md) {
  const s = splitSections(md);
  return {
    stephen: paragraphs(s['Stephen']),
    vakomRodez: paragraphs(s['Vakom Rodez']),
    testimonials: testimonials(s['Témoignages']),
    stats: stats(s['Chiffres']),
  };
}
