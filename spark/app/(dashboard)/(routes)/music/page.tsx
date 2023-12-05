'use client';

import axios from "axios";
import * as z from "zod";
import Heading from "@/components/heading";
import { Music } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { formSchema } from "./constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// import { ChatCompletionMessage } from "openai/resources/chat/index.mjs";

import Empty from "@/components/empty"
import Loader from "@/components/loader"
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";




export default function MusicPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionMessageParam[]>([]);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",

    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      } 
      const newMessages = [...messages, userMessage]

      const response = await axios.post('/api/conversation', {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data])

      form.reset()
    } catch (error: any) {
        // TODO: open pro Modal
        console.log(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm
             grid grid-cols-12 gap-2"
            >
            <FormField 
             name='prompt'
             render={({field}) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className='m-0 p-0'>
                  <Input 
                  className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                  disabled={isLoading}
                  placeholder="Blues style guitar solo"
                  {...field}
                  />

                </FormControl>
              </FormItem>
             )}
            />
            <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
              Generate
            </Button >
            </form>

          </Form >
          <div className="space-7-4 mt-4">
            {isLoading && (
              <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                  <Loader />
              </div>
            )}
            {messages.length === 0 && !isLoading && (
              <Empty label="no conversation started" />
            )}
            <div>
              Music will be generated here
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
