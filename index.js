
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Welcome to Medhex Consulting</h1>
      <p>Your trusted partner in risk management, compliance, and due diligence.</p>
      <Link href="/about">About us</Link>
    </div>
  );
}
