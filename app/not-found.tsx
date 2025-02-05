import { Link } from "@heroui/link";

import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-[7.5rem] font-semibold leading-[8rem]">404</h1>
      <div>
        <p className="mb-1 text-xl">הדף שחיפשתם לא נמצא</p>
        <Link className="text-xl" href="/" underline="hover">
          חזרו לדף הבית
        </Link>
      </div>
    </Container>
  );
}
