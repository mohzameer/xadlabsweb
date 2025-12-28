---
layout: post
title: "ThinkPost - An AI free thinking tool"
date: 2025-12-28
category: product
preview: "ThinkPost is an AI sans text editor and a drawing tool for thinking"
---

# ThinkPost - AI sans text editor and a drawing tool for thinking

I wanted a tool to have text editing on one side and drawing on the other to think through ideas easily. I usually think with writing as well as drawing. The only tool that came close is eraser.io and that wasn't general purpose. So I had to build my own. I have let it free for now, as I dont have any running costs. I did not want AI pomps anywhere near this app as I believe we need spaces without gen AI and it doesn't add any value to this app. If I wanted an AI, I would just open Grok on another tab for discussion.

I had built a version of it on 2022 with react, editor.js, firebase and JoyUI. I had four collapse panels instead of two in the screen, and each panel on the right side can be turned into either a text editor, maths editor, code editor or a drawing editor. Idea was that you are able to move text blocks across these split panels as you think through them. I built any feature I could think of, like different type of panels, archiving, sharing, too many exporting formats and completely bloated the whole thing. I wanted to build collaboration with real time users. Editor.js was not a great solution for it and my architecture made it impossible with firebase bloating which had piled up. After a year I let it go.

I got sometime late december and I quickly rebuilt the whole app completely stripped down to the essentials that I use. Motivation for the efforts was that I wanted a space to think about a new project of mine.
It is architected for collaboration, but haven't implemented it yet. I built it this time using self hosted versions in mind, so react, supabase and mantine for UI.

App will give you an easy comfortable place in the web to just relax and write something, have a quick drawing on it and even quickly switch between different documents from the side bar.

Do try it at [thinkpostapp.com](https://thinkpostapp.com)