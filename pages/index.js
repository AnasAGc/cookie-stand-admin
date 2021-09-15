import Head from 'next/head'
import Header from '../components/Header'
import React, { useState } from 'react'
import Main from '../components/Main'
import Link from 'next/link'
import LoginForm from '../components/LoginForm'
import { useAuth } from '../contexts/auth'

export default function Home() {
  const { user, login, logout } = useAuth();
  
  return (
    <div>

      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header title={'Cookie Stand Admin'}>
        <Link href="Overview" >
          <a>Overview</a>
        </Link>
      </Header>

      {user? <Main /> : <LoginForm/> }




    </div>
  )
}
