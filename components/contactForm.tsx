"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Form } from "@nextui-org/form";
import { Input, Textarea } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import { z } from "zod";

import { Container } from "./container";
import { SectionWrapper } from "./sectionWrapper";

import { siteConfig } from "@/config/site";

const sectionWrapperProps = {
  title: siteConfig?.contact?.title,
  subtitle: siteConfig?.contact?.subtitle,
  classNames: {
    childrenWrapper: "w-full lg:w-3/4",
  },
};

const inputSize = "sm";

const schema = z.object({
  name: z.string().min(1, { message: "שדה חובה" }).trim(),
  email: z
    .string()
    .min(1, { message: "שדה חובה" })
    .refine((value) => validator.isEmail(value), { message: "אימייל לא תקין" }),
  phoneNumber: z
    .string()
    .min(1, { message: "שדה חובה" })
    .refine((value) => validator.isMobilePhone(value, "he-IL"), {
      message: "מספר טלפון לא תקין",
    }),
  message: z.string().trim(),
  botcheck: z.string().max(0),
});

export const ContactForm = () => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (data: z.infer<typeof schema>) =>
      axios.post("/api/send-email", data),
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    await mutation.mutateAsync(data);
    form.reset();
  };

  const getModalMessage = useMemo(() => {
    if (mutation.isError) {
      return {
        header: "שגיאה בשליחת ההודעה",
        body: "אנא נסה שוב מאוחר יותר",
      };
    }

    return {
      header: "הודעה נשלחה בהצלחה!",
      body: "תודה על הפנייה, נחזור אליך בהקדם",
    };
  }, [mutation.isSuccess, mutation.isError]);

  return (
    <>
      <Modal
        isKeyboardDismissDisabled
        backdrop="blur"
        isOpen={mutation.isSuccess || mutation.isError}
        placement="center"
        onClose={() => mutation.reset()}
      >
        <ModalContent>
          <ModalHeader>{getModalMessage?.header}</ModalHeader>
          <ModalBody>{getModalMessage?.body}</ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
      <Container>
        <SectionWrapper {...sectionWrapperProps}>
          <Form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <Input className="hidden" {...form.register("botcheck")} />
            <Input
              isClearable
              isRequired
              errorMessage={form.formState.errors?.name?.message}
              isDisabled={mutation.isPending}
              isInvalid={!!form.formState.errors?.name}
              label="שם"
              size={inputSize}
              {...form.register("name")}
            />
            <Input
              isClearable
              isRequired
              errorMessage={form.formState.errors?.email?.message}
              isDisabled={mutation.isPending}
              isInvalid={!!form.formState.errors?.email}
              label="אימייל"
              size={inputSize}
              {...form.register("email")}
            />
            <Input
              isClearable
              isRequired
              errorMessage={form.formState.errors?.phoneNumber?.message}
              isDisabled={mutation.isPending}
              isInvalid={!!form.formState.errors?.phoneNumber}
              label="מספר טלפון"
              size={inputSize}
              {...form.register("phoneNumber")}
            />
            <Textarea
              isClearable
              errorMessage={form.formState.errors?.message?.message}
              isDisabled={mutation.isPending}
              isInvalid={!!form.formState.errors?.message}
              label="הודעה"
              placeholder="ספרי לנו קצת עלייך..."
              {...form.register("message")}
            />
            <Button
              className="mt-1 w-full"
              color="primary"
              isLoading={mutation.isPending}
              type="submit"
            >
              שלח
            </Button>
          </Form>
        </SectionWrapper>
      </Container>
    </>
  );
};
