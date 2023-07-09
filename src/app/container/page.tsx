import { container } from "@/styled-system/patterns";

export default function ContainerPage() {
  return (
    <main>
      <div className={container()}>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
      </div>
    </main>
  );
}
