---
title: "A gentle introduction to authentication systems for the web"
date: "2024-11-26"
---

---

# Table of contents

- [Introduction](#introduction)
- [What is authentication?](#what-is-authentication)
- [What is an authentication system?](#what-is-an-authentication-system)
- [Simple authentication systems](#simple-authentication-systems)
  - [HTTP Basic Authentication](#http-basic-authentication)
  - [HTTP Digest Authentication](#http-digest-authentication)
- [User account creation, password storage and verifying user credentials](#account-creation-and-password-storage)
- [Session-Based Authentication](#session-authentication)
  Possible subtopics (things to potentially cover):
  - Login
  - Cookies
  - Logout
  - Session hijacking
  - Session fixation
  - Session timeout
  - CSRF protection
  - Pros and cons of session-based authentication
- [Token-Based Authentication](#token-authentication)
  Possible subtopics (things to potentially cover):
  - JWT
  - Storing tokens client side
  - Pros and cons of token-based authentication
- [Hybrid Authentication - Combining session and token-based authentication systems](#hybrid-authentication)
- [Password reset and recovery](#password-reset-and-recovery)
- [Passwordless Authentication](#passwordless-authentication)
- [Multi-Factor Authentication](#multi-factor-authentication)
- [OpenID and OAuth2](#openid-and-oauth2)
- [Conclusion](#conclusion)

## Introduction

Authentication is an important part of many websites and web applications. The basic ideas behind it are simple enough but implementing these ideas from the ground up in a secure and user-friendly way can be quite daunting. I've always held a fascination for authentication systems and I've spent a lot of time reading about them and experimenting with different approaches. In this post, I'll try to explain some of the basic concepts behind authentication systems and the different approaches that can be taken to implement them.

## What is authentication?

Authentication is the action of proving something to be true, genuine or valid.

## What is an authentication system?

(\*\*If you've ever used the internet, you've probably encountered a login form at some point. You've probably also encountered a "Forgot your password?" link. These are all part of an authentication system.)
