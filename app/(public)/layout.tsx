

export default function GlobalLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <h1>Layout Global</h1>
        {children}
      </main>
    </>
  );
}