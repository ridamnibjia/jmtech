---
title: WhatsApp Business API for small businesses in India, explained without the sales pitch
description: The difference between the WhatsApp Business app and the official Cloud API, what it costs, when you actually need it, and how to send bulk messages without getting your number banned.
date: 2026-09-01
---

Every business in India runs on WhatsApp. The question I get from shop owners and small manufacturers is usually the same: "Can I send my offer to all 3,000 customers at once?" The answer is yes, but not from the WhatsApp Business app on your phone, and not with the broadcast lists. Here is the honest version.

## The three options

**WhatsApp Business app.** Free. One phone, one number, manual replies. Broadcast lists stop at 256 contacts and only reach people who have saved your number. Fine for a shop with a few hundred regulars.

**Bulk-sending tools that use your phone.** These automate the app itself with a script. They are cheap and they get numbers banned. WhatsApp detects them, and once a number is banned you lose the chats, the customer list and the number. I do not recommend them for any business you care about.

**WhatsApp Cloud API.** The official route from Meta. You send messages through their servers from software, to any number, with delivery and read receipts. This is what banks, delivery companies and larger stores use. It is also available to a one-person business.

## What the official API costs

The API itself is free. Meta charges per conversation, and the rate depends on the type of message. Marketing messages in India are the most expensive category and still cost less than a rupee each. Utility messages like order updates are cheaper. Replies to a customer who messaged you first are free within a 24-hour window.

There is no monthly fee from Meta. Third-party dashboards that resell the API charge a monthly fee on top, and that is where most of the cost usually goes. You can avoid it by running your own tool, which is what I built and released as open source.

## What you need before sending

1. **A Meta Business account** and, for volume above the starting limit, business verification with a GST certificate or similar.
2. **A phone number** that is not already on WhatsApp. Once it is on the API, it cannot be used in the app.
3. **Approved message templates.** Every marketing message has to be submitted to Meta first. They reject vague ones. "Hi {{name}}, our Diwali collection is in store, reply STOP to opt out" gets approved. "Hello, check this" does not.
4. **An opt-out.** Every marketing message needs a way for the customer to say stop, and you have to honour it. This is not optional, and it also protects your number's quality rating.

## How not to get banned

New numbers start with a low daily limit and earn a higher one by sending messages that people do not block or report. The safe way is to warm up: a few dozen messages the first day, more the next, watching the quality rating. Send during the day, not at midnight. Send to people who actually bought from you, not a purchased list. Retry failed sends slowly.

I built these rules into the tool I use for clients: a warm-up ladder, quiet hours, one-tap opt-out, and a retry schedule that respects Meta's limits. The code is public on GitHub if you want to run it yourself, and I set it up for businesses in Pali, Jodhpur and elsewhere that would rather not.

## Is it worth it for you?

If you have under 300 customers and time to message them by hand, the free app is enough. If you have a thousand or more customers, sell repeatedly to the same people, or need automatic order updates from a store, the API pays for itself with the first campaign. Book a call and I will tell you which one you need.
