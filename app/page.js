import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>My Name is Suman Singha</h2>

      <Button>Hello</Button>
      <UserButton />
    </div>
  );
}
