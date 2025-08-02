
export default function GlobalLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout Global</h1>
      {children}
    </div>
  );
}