import { Lema } from '../../components/lema/Lema';


export default function GlobalLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <Lema/>
        {children}
      </main>
    </>
  );
}