import Footer from "../components/footer";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Meta />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
