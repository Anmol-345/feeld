import fs from 'fs';
import path from 'path';

export async function getServerSideProps({ res }) {
  const htmlPath = path.join(process.cwd(), 'public', 'feeld', 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(html);
  return { props: {} };
}

export default function Home() {
  return null;
}
