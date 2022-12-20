import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header style={{ position: "sticky", top: "0", backgroundColor: "lightslategray" }}>
        <nav style={{ padding: "24px" }}>
          <ul style={{ display: "flex", gap: "16px", color: "whitesmoke", listStyleType: "none" }}>
            <Link href="./">
              <li>Home</li>
            </Link>
            <Link href="./textgradient">
              <li>Text-gradient</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
