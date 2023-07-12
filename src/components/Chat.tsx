'use client';

import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { useChat } from 'ai/react';

export interface ChatProps { };

export function Chat(props: ChatProps) {
     const { messages, input, handleInputChange, handleSubmit } = useChat({
          api: '/api/chat'
     });

     return (
          <Card className='w-[440px]'>
               <CardHeader>
                    <CardTitle>ChatAI</CardTitle>
                    <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
               </CardHeader>
               <CardContent>
                    <ScrollArea className='h-[600px] w-full pr-4'>
                         {
                              messages.map((message) => {
                                   return (
                                        <div key={message.id} className='flex gap-3 text-slate-600 text-sm mb-4'>
                                             {message.role === 'user' && (
                                                  <Avatar>
                                                       <AvatarFallback>LC</AvatarFallback>
                                                       <AvatarImage src='https://github.com/lukeverso.png' />
                                                  </Avatar>
                                             )}
                                             {message.role === 'user' && (
                                                  <Avatar>
                                                       <AvatarFallback>AI</AvatarFallback>
                                                       <AvatarImage src='https://media.istockphoto.com/id/1221348467/pt/vetorial/chat-bot-ai-and-customer-service-support-concept-vector-flat-person-illustration-smiling.jpg?s=612x612&w=0&k=20&c=IevYlC7RJxtaOXLB3t41gCcsQ_NpI57n6tANT38Emak=' />
                                                  </Avatar>
                                             )}
                                             <p className='leading-relaxed'>
                                                  <span className='block font-bold text-slate-800'>
                                                       {message.role === 'user' ? 'Usuário' : 'AI'}:
                                                  </span>
                                                  {message.content}
                                             </p>
                                        </div>
                                   )
                              })
                         }
                    </ScrollArea>
               </CardContent>
               <CardFooter>
                    <form className='w-full flex gap-2' onSubmit={handleSubmit}>
                         <Input placeholder='How can I help you?' value={input} onChange={handleInputChange} />
                         <Button type='submit'>Send</Button>
                    </form>
               </CardFooter>
          </Card>
     );
};