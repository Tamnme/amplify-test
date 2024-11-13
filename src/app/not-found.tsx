import { Link } from '@/components/ui/link';

export const dynamic = 'force-dynamic';

const NotFoundPage = () => {
  return (
    <html lang="us">
      <body>
        <div className="mt-52 flex flex-col items-center font-semibold">
          <h1>404 - Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link href="/" replace>
            Go to Home
          </Link>
        </div>
      </body>
    </html>
  );
};

export default NotFoundPage;
