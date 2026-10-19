/**
 * NANDU'S EDITABLE CONTENT FILE
 * Change any wording here. Add real photos to public/photos and put paths like
 * '/photos/our-photo.webp' in a scrapbook item's photo field. Each scrapbook
 * item's note appears when its photo is opened. The four current photos are real;
 * their notes express Nandu's feelings without adding unconfirmed story details.
 * Optional audio: place a recording in public/audio and set voiceRecording.
 */

export const content = {
  names: { from: 'Nandu', to: 'Ammu' },
  siteTitle: 'If I Could Give You My World, Ammu',
  subtitle: 'A little universe made by Nandu, for the girl who means so much to him.',
  voiceRecording: '', // Example: '/audio/a-message-for-ammu.mp3'
  ui: {
    brand: 'N ♥ A', headerNote: 'a little world for you', menuButton: 'Explore',
    menuCaption: 'Choose a place in this little world', scrollPrompt: 'begin the journey',
    backToStart: 'Back to the beginning ↑', footer: 'For Ammu, with love.',
    closingNote: 'Made with all my heart, for you.  ✦  Nandu',
    audioLabel: 'A little message from Nandu',
  },
  navigation: [
    { id: 'distance', label: 'Distance' }, { id: 'laugh', label: 'A little laugh' },
    { id: 'reasons', label: 'Why you matter' }, { id: 'scrapbook', label: 'Our story' },
    { id: 'anniversary', label: 'September 12' }, { id: 'safe', label: 'A safe place' },
    { id: 'growth', label: 'Growing' },
    { id: 'letter', label: 'A letter' }, { id: 'future', label: 'The future' },
    { id: 'finale', label: 'My world' },
  ],
  opening: {
    eyebrow: 'A tiny universe, just for you',
    title: 'Hey, Ammu. ❤️',
    message: `It's me, Nandu.

I have so many things in my heart that I don't always know how to explain properly.

So, for once, instead of sending you another long message, I tried to turn those feelings into a little world.

There's some nonsense in here, because obviously I cannot be serious for more than five minutes.

But there's also a lot of love.

And all of this is for you.`,
    button: 'Come see my world, Ammu ✨',
    disclaimer: 'Disclaimer: Built by your favourite idiot. Emotional stability not included. Affection levels questionable. Love levels: please investigate. 😂',
    featuredPhoto: '/photos/a-moment-i-felt-close.webp',
    featuredPhotoAlt: 'Nandu and Ammu together, smiling for a photo',
    featuredPhotoLabel: 'A little piece of us ♡',
    featuredNote: 'Seeing us together makes this little world feel more like ours. I hope this photo brings you a smile, Ammu. ❤️',
    featuredNoteClose: 'Back to our little universe',
  },
  distance: {
    eyebrow: '01 / The space between',
    title: "Even when I can't see you, you're part of my world.",
    message: `Ammu, I miss being able to see you.

I miss the feeling of getting to share little moments with you instead of wishing we had more time together.

I know that when we can't see each other, when we're busy, or when we end up misunderstanding each other, things can start to feel different.

I don't want to pretend that distance is easy or that a few romantic words can replace spending time together.

I just want you to know that even during these days when we haven't been able to see each other much, you still matter deeply to me.

I want to find little ways for us to feel closer, if that's something we both want.

Not by demanding all your time. Not by making you feel guilty for being busy.

But through the little things: a meaningful conversation, a shared laugh, a thoughtful message, and making time for each other when we can.`,
    orbitLabels: ['Nandu', 'Ammu'],
    caption: 'A little space. A lot of care.',
  },
  funny: {
    eyebrow: '02 / A little pause for a smile',
    title: 'Official Report: Two Humans, One Complicated Love Story',
    intro: 'Because even in a serious love story, we deserve a tiny laugh.',
    badgeTop: 'OFFICIAL(ISH)',
    badgeMain: '100% silly',
    badgeBottom: 'still from the heart',
    reportPrompt: 'Shall we see the latest findings?',
    cards: [
      'Me trying to act normal when I miss you: absolutely unsuccessful.',
      'My brain after seeing your name on my phone: everybody stay CALM.',
      'Relationship management department: currently run by one overthinking boy and one very important girl.',
      'Me trying to explain one feeling: 17 paragraphs, 4 side quests, and a conclusion nobody requested.',
      'Missing you: the subscription I never cancelled.',
      "Our relationship's software update: better communication, fewer misunderstandings, unlimited hugs.",
    ],
    button: 'Generate a very official report ↗',
    cardOpenLabel: 'Case closed ♥',
    cardClosedLabel: 'tap to approve ↗',
    reportTitle: 'The extremely official report',
    reportTag: 'CONFIDENTIAL · VERY CUTE',
    reportSignature: 'Filed with unreasonable affection, Nandu',
    reports: [
      ['Affection: A suspiciously large amount.', 'Missing Ammu: Significant.', "Nandu's ability to be normal: Under investigation.", 'Unnecessary overthinking: Needs an update.', 'Future memories: Available to build together.'],
      ['Current mood: fondly ridiculous.', 'Thoughts of Ammu: frequent appearances.', 'Communication goal: listen first, panic never.', 'Hug inventory: imaginary but heartfelt.', 'Next chapter: written together, if we both want.'],
      ['Smiles caused by this report: hopefully one.', 'Dramatic inner monologues: several.', 'Respect for Ammu: non-negotiable.', 'Silly jokes: in stock.', 'Official conclusion: Nandu cares very much.'],
    ],
  },
  reasons: {
    eyebrow: '03 / Little constellations',
    title: 'Why you are so special to me',
    intro: 'Some reasons are easy to say. Some deserve their own little star.',
    cards: [
      'You matter to me beyond the days when everything is easy.',
      'I love the little things that make you who you are.',
      'I care about your happiness, your dreams, and your feelings.',
      "I want to know what's going on in your mind instead of guessing.",
      'I want to celebrate your achievements and support the things that matter to you.',
      'I love the idea of sharing ordinary days with you, not only extraordinary ones.',
      'I want us to laugh, learn, grow, and understand each other better.',
      "I want to make memories with you that feel like ours and nobody else's.",
    ],
    button: 'One more reason, Nandu? ❤️',
    extra: [
      'Because your feelings deserve to be heard, even when they are hard for me to hear.',
      'Because caring about you means caring about the life you want for yourself.',
      'Because I would love to know more of the small, real things that make you you.',
      'Because the ordinary future I imagine feels warmer with you in it.',
      'Because you deserve tenderness and respect on the complicated days too.',
    ],
  },
  scrapbook: {
    eyebrow: '04 / Pages still being written',
    title: 'Our story is more than our worst days',
    intro: "These are not proof that everything has always been perfect. They're little pieces of our story that I want to remember.",
    emptyLabel: 'A place for a real memory',
    note: 'Little pieces of us, with more pages still waiting to be filled.',
    memories: [
      { prompt: 'How our story began', date: '', caption: 'How our story began', note: 'I hold this little moment close. It reminds me how much our story means to me. ❤️', photo: '/photos/how-our-story-began.webp' },
      { prompt: 'A memory that always makes me smile', date: '', caption: 'A memory that always makes me smile', note: 'I look at our smiles here and find myself smiling too. I’m so glad we have this moment to remember. ✨', photo: '/photos/a-memory-that-makes-me-smile.webp' },
      { prompt: 'A little thing Ammu does that I adore', date: '', caption: 'A little thing Ammu does that I adore', note: 'Even through a screen, you can make me smile. I love this silly little moment of you. 😂❤️', photo: '/photos/a-little-thing-i-adore.webp' },
      { prompt: 'A moment when I felt especially close to her', date: '', caption: 'A moment when I felt especially close to her', note: 'I love seeing us together in this photo. It brings back the warmth of feeling close to you. ❤️', photo: '/photos/a-moment-i-felt-close.webp' },
    ],
  },
  anniversary: {
    eyebrow: '05 / A day that still matters',
    title: 'September 12th. Our day. ❤️',
    dateDisplay: '12.09.2026',
    calendarMonth: 'SEPTEMBER · 2026',
    calendarDay: '12',
    calendarCaption: 'a day I still hold close',
    message: `Ammu,

Our anniversary came on September 12th this year, and we didn't celebrate it.

I don't want to pretend it didn't happen or act like missing the celebration doesn't matter.

I wish we had been able to make that day special together.

I know a website made afterward cannot replace the day itself. But I wanted to make something for you now because our anniversary still means something to me.

It reminds me of our relationship, our memories, and the person I care about so much.

I don't want this to be an excuse or a way to avoid the things we've been struggling with.

I just wanted to acknowledge our day, tell you that it still matters to me, and give you something thoughtful from my heart.

Happy belated anniversary, Ammu.

Love,
Nandu ❤️`,
    button: 'Maybe we can make a new memory someday 🌷',
    reply: 'No perfect plan needed. No pressure. Just the hope that we can make another little memory together when it feels right for both of us.',
  },
  safe: {
    eyebrow: '06 / Come inside',
    sectionTitle: 'I want to understand you, not win',
    invitation: 'A small, quiet place to be honest.',
    enterButton: 'Step inside the little house',
    houseArtLabel: 'Open the glowing door and step inside',
    houseHint: 'The door is open whenever you feel ready. ✦',
    exitButton: 'Outside the little house',
    lampOnButton: 'Dim the lamp',
    lampOffButton: 'Light the lamp',
    roomKicker: 'A quiet place to talk',
    title: 'Ammu, I want you to feel safe being honest with me.',
    message: `I know we've had our little fights.

Sometimes we may misunderstand each other, react differently, or struggle to explain what we actually mean.

And lately, I know you've been wondering whether we really match.

I don't want to tell you that you shouldn't feel that way. I don't want to argue you out of your doubts.

I want to understand them.

If there are things that have made you feel distant from me, I want to listen properly. If there are things I need to understand or do differently, I want to take them seriously.

I want us to learn how to talk about difficult things without feeling like we have to win against each other.

You should be able to tell me when you're upset. You should be able to disagree with me. You should be able to ask for space or explain that something isn't working for you.

I want to become better at listening instead of immediately defending myself.

I want to become better at understanding what you need instead of assuming I already know.

I want you to feel loved when things are easy, but also respected when things are difficult.

And I know that I cannot simply write these words and expect you to believe them. I have to show them in the way I treat you.

You don't have to hide your doubts to protect my feelings.

I care about what you feel, even when it is difficult for me to hear.

I want to understand your world, Ammu, just as much as I want to share mine with you.`,
  },
  growth: {
    eyebrow: '07 / The work I want to do',
    title: 'Not just words. Little things I want to work on.',
    intro: 'Promises only mean something when they become choices, again and again.',
    intentions: [
      'Listen completely before responding.',
      'Avoid turning disagreements into competitions.',
      'Explain my feelings without blaming you.',
      'Give conversations room to cool down when necessary.',
      'Take responsibility for my own mistakes.',
      'Ask what you mean rather than assuming.',
      'Respect your boundaries and personal space.',
      'Make intentional time for each other when possible.',
      'Remember that understanding matters more than proving who is right.',
      "Show care consistently, not only when I'm afraid of losing you.",
    ],
    message: `I know that I cannot fix everything with a beautiful website.

I don't want to promise that I'll never make a mistake again. I want to take responsibility for learning from the mistakes I make.

I want my actions to match what I'm telling you here.

And I know a healthy relationship needs both people to be willing to communicate and work toward something better.

I want to do my part, and I want to understand what that looks like for you too.`,
  },
  letter: {
    eyebrow: '08 / Some words from my heart',
    title: 'A letter from Nandu to Ammu',
    instruction: 'For you, when you feel like opening it.',
    envelopeLabel: 'For Ammu ♡',
    paperKicker: 'A letter, just for you · ♡',
    openButton: 'Open the letter',
    closeButton: 'Fold the letter away',
    message: `My Ammu,

I don't even know where to begin because there is so much I want to tell you.

I know things haven't felt as easy between us lately. We have our little fights, we haven't been able to see each other much, and I can feel that things are not quite the same as they used to be.

I know you're starting to wonder whether we really match.

And honestly, that scares me, because you are someone I care about so deeply.

But I don't want to use that fear to put pressure on you. I don't want you to stay because you feel bad for me, and I don't want you to pretend everything is okay just because I love you.

I want you to be happy. I want you to feel understood. I want you to be able to tell me what's in your heart without worrying that I'll turn every difficult conversation into an argument.

I miss you, Ammu. I miss being able to see you and share those little moments that make being together feel special.

And I wish we had celebrated September 12th together this year. Our anniversary mattered to me, and I wanted to give you something that acknowledged it, even though the day has passed.

I keep thinking about us, about our story, and about the possibility of making things better.

When I think about you, I don't only think about romantic moments or the days when everything goes right. I think about sharing ordinary days with you, laughing at stupid things, hearing about your day, supporting your dreams, and being someone you can talk to honestly.

I want to share my world with you, but I also want to make room for yours.

I want to know what makes you happy, what worries you, what you want from life, and what you need from a relationship.

I don't want to assume that I already know everything about you just because I love you.

I want to keep learning.

I believe that two people don't have to be identical to build something meaningful. But I also understand that love needs more than feelings. It needs respect, communication, effort, and the willingness to understand each other.

I want to do my part in building those things with you.

I know I can't make you feel what you used to feel just by writing this letter. I can't ask you to forget your doubts or promise that everything will work out perfectly.

But I can be honest about my feelings.

I love you, Ammu. I care about you, and I want you in my life.

I want to have the chance to make more memories with you, celebrate the days that matter to us, laugh together, and learn how to handle the difficult moments better.

I want to be someone who makes your life feel warmer, not heavier.

And if there are things you need me to understand, I want to listen.

You don't have to give me an answer because of this website. You don't have to promise me anything.

I just wanted you to see a little of what is in my heart.

This is my world, Ammu. It isn't perfect. I'm not perfect. Our relationship hasn't been perfect either.

But the love I feel for you is real, and I want to treat it with care.

Happy belated anniversary, my Ammu. ❤️

I love you.

Your Nandu.`,
  },
  future: {
    eyebrow: '09 / A path, not a promise',
    title: 'A future we can build together',
    hopes: [
      'More time together when possible.', 'Honest conversations.',
      'Shared jokes and silly memories.', 'Celebrating anniversaries and little milestones.',
      "Supporting each other's ambitions.", 'Learning to disagree without hurting each other.',
      "Understanding each other's needs.", 'Creating memories that belong to both of us.',
    ],
    message: `I don't imagine a future where we never disagree.

I imagine a future where we learn to understand each other better.

A future where we can talk honestly, apologize when we need to, respect each other's space, and find ways to make each other feel loved.

I would love to build that kind of relationship with you, if that's something we both want.`,
  },
  finale: {
    eyebrow: '10 / The whole little universe',
    title: 'This is my world, Ammu',
    message: `Ammu,

If I could give you my world, this is a little piece of what it would look like.

There would be silly jokes, little adventures, long conversations, warm hugs, and memories we could look back on and smile about.

There would also be honest conversations, moments when we need patience, and opportunities to understand each other better.

I don't want to promise you a perfect relationship.

I want to build a relationship where both of us can feel heard, respected, loved, and free to be ourselves.

I want you to know how deeply I care about you.

And I want you to know that, even when things are difficult, I'm willing to reflect, listen, and work on my part.

You mean so much to me, Ammu.

Happy belated anniversary.

With love, hope, and a ridiculous amount of affection,

Nandu ❤️`,
    button: 'Send one little hug into the universe 🫂',
    hugReply: 'Hug sent with love. ❤️\n\nFrom Nandu, who is probably smiling at his screen right now.',
  },
} as const
