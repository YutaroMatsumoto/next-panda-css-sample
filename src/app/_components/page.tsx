import { Button } from "@/src/components/Button";
import { css } from "@/styled-system/css";
import { container } from "@/styled-system/patterns";

export default function Home() {
  return (
    <main>
      <div className={container()}>
        <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Hello 🐼!
        </div>
        <Button />
      </div>
    </main>
  );
}
