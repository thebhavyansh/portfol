"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRef } from "react"
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const form = useRef();
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [state, handleSubmit] = useForm("xkgjwvyg");
  if (state.succeeded) {
      return <p className="text-center text-lg text-lime-400">Thanks for messaging</p>;
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_up92gxo', 'template_9vh1mgy', form.current, {
        publicKey: '3EZfN2qwNJ3nImQzH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email send Successfull")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
 

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit}  className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required />
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-sm text-center mt-4 text-muted-foreground">{message}</p>}
      </form>
    </Card>
  )
}

