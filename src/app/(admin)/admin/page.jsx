
import Link from 'next/link';
import AdminTitle from '../lib/title';

 
export default async function Page() {
  
    return (
      <main className="flex min-h-screen flex-col">
        <div className="flex items-center justify-center">
          <AdminTitle text={'Aдмін панель'}/>
          {/* ... */}
        </div>
      </main>
    );
  }
