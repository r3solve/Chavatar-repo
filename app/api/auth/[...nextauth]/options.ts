import { sign } from "crypto";
import type { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import GithubProvider from 'next-auth/providers/github'

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
        name:'credentails',
        credentials: {
            username:{
                label:"Username",
                type:"text",
                placeholder:"your username"
            },
            password: {
                label:"password",
                type:"password",
                placeholder:"Password"
            }
        },
        async authorize(credentails) {
            const user = {id:'32', username:"james", password:"password"}
            if (credentails?.username === user.username && credentails?.password == user.password){
                return user
            }else {
                return null
            }
        }
    })
  ],

};