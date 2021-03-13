import {Song} from '../components/song';
import {LargeTitle} from '../components/large-title';
import Link from 'next/link';
import {GetServerSideProps} from 'next';
import {Activity} from '../components/activity';

interface IndexProps {
  isWin: boolean;
}

export default function Index({isWin}: IndexProps) {
  const emoji = !isWin && (
    <span role="img" aria-label="GB Flag">
      🇬🇧
    </span>
  );

  return (
    <div className="flex h-full flex-col p-10">
      <div className="flex">
        <Link href="/about" passHref>
          <a className="flex-1">About me</a>
        </Link>
        <p>TypeScript + React + Node.js</p>
      </div>
      <div className="flex flex-1">
        <div className="flex justify-center flex-col">
          <LargeTitle>Alistair Smith</LargeTitle>
          <h2>Full-stack TypeScript engineer from the UK {emoji}</h2>
          <Activity />
        </div>
        <div className="flex-1" />
      </div>
      <div className="flex">
        <p className="flex-1">
          Currently working at <a href="https://edge.gg">Edge</a>
        </p>
        <Song />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<IndexProps> = (ctx) => {
  return Promise.resolve({
    props: {isWin: /Win/i.test(ctx.req.headers['user-agent'] || '')},
  });
};