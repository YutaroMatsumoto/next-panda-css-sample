import { wrap } from "@/styled-system/patterns";

/**
 * 要素感にスペースを追加するために利用するもの。
 * 以下はデフォルト値
 * display: flex;
 * gap: 10px;
 * columnGap -> cssの column-gap
 * rowGap -> cssの row-gap
 */
export default function Wrap() {
  return (
    <main>
      <div
        className={wrap({
          gap: "6",
          columnGap: "20px",
          rowGap: "20px",
          align: "center",
        })}
      >
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
    </main>
  );
}
