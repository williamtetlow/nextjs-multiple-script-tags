import Link from "next/link";
import "../../testing/test";

export default function APage() {
  return (
    <div>
      <h1>This is a page - go back to homepage</h1>
      <Link href="/">
        <a>Click here</a>
      </Link>
    </div>
  );
}
