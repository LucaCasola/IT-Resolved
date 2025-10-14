"use client"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

function ContactForm({className}: React.ComponentProps<"form">) {
  return (
    <form className={cn(
      "w-full p-6",
      className
    )}>
      <FieldSet className="max-w-2xl mx-auto">
        <FieldLegend className="!text-2xl font-bold">Contact Us</FieldLegend>
        <FieldDescription>
          Please fill out the form below to get in touch with us.
        </FieldDescription>

        <FieldGroup>
          <FieldGroup className="flex flex-row gap-4">
            <Field>
              <FieldLabel htmlFor="firstName">First Name</FieldLabel>
              <Input className="bg-background" id="firstName" autoComplete="off" placeholder="John" />
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
              <Input className="bg-background" id="lastName" autoComplete="off" placeholder="Smith" />
            </Field>
          </FieldGroup>
          <Field>
            <FieldLabel htmlFor="company">Company</FieldLabel>
            <Input className="bg-background" id="company" placeholder="Example Corp" />
          </Field>
        </FieldGroup>

        <FieldSeparator />
        <FieldGroup>
          <FieldGroup className="flex flex-row gap-4">
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input className="bg-background" id="email" placeholder="you@example.com" />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input className="bg-background" id="phone" autoComplete="off" placeholder="(123) 456-7890" />
            </Field>
          </FieldGroup>
          <Field>
            <FieldLabel htmlFor="message">Message</FieldLabel>
            <Textarea className="bg-background" id="message" placeholder="Your message..." />
          </Field>
        </FieldGroup>

        <Field className="flex justify-center" orientation="horizontal">
          <Button className="p-5" type="submit">Submit</Button>
        </Field>

      </FieldSet>
    </form>
  )
}

export { ContactForm }