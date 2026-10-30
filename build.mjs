import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'game.js', 'theme.js']) {
  copyFileSync(file, `dist/${file}`);
}
