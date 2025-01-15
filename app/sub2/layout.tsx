import SideNav from '@/components/layouts/LnbMenu';

export default function Sub1Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideNav />
      <section id='container'>
        <h2>Sub-2 title</h2>
        {children}
      </section>
    </>
  );
}
