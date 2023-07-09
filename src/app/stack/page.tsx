import { stack } from "@/styled-system/patterns";

/**
 * デフォルトは以下の通り
 * display: flex
 * flex-direction: column
 * gap: 10px
 * paddingはflexbox自体のpadding
 *
 */
export default function StackPage() {
  return (
    <main>
      <div className={stack({ direction: "row", gap: "6", padding: "4" })}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
    </main>
  );
}
