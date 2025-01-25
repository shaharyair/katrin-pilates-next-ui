"use client";

import { Card, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { useRouter } from "next/navigation";

import { Container } from "@/components/container";

export default function NotFound() {
  const router = useRouter();

  return (
    <Container className="!py-0">
      <Card
        isHoverable
        isPressable
        classNames={{
          base: "w-full lg:w-1/2 m-auto",
          body: "flex justify-center items-center flex-col gap-4",
        }}
        onPress={() => router.replace("/")}
      >
        <CardBody>
          <h1 className="text-[7.5rem] font-semibold leading-[8rem]">404</h1>
          <p className="text-xl">הדף שחיפשתם לא נמצא</p>
          <Link className="text-xl" href="/" underline="hover">
            חזרו לדף הבית
          </Link>
        </CardBody>
        <CardFooter />
      </Card>
    </Container>
  );
}
