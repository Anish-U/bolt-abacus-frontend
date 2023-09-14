import Link from 'next/link';

const Custom404Page = () => {
  return (
    <main className="h-screen flex justify-around items-center flex-col">
      <div className="text-center">
        <h1 className="text-lg font-medium font-sans">404 : Page Not Found</h1>
        <Link className="text-gold" href="/">
          Back to home page
        </Link>
      </div>
    </main>
  );
};

export default Custom404Page;
