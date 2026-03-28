export interface SkillData {
  slug: string
  title: string
  category: string
  categoryIcon: string
  summary: string
  lesson: string
  example: string
  challenge: string
  quiz: { question: string; options: string[]; answer: string }[]
}

function s(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
}

export const ALL_SKILLS: SkillData[] = [
  // === Thinking & Productivity ===
  {
    slug: s("The 2-Minute Rule"), title: "The 2-Minute Rule", category: "Thinking & Productivity", categoryIcon: "🧠",
    summary: "If it takes less than 2 minutes, do it now—instantly kill procrastination.",
    lesson: "The 2-Minute Rule comes from David Allen's Getting Things Done (GTD) methodology. The principle is simple: if a task takes less than two minutes to complete, do it immediately instead of adding it to your to-do list.\n\nWhy does this work?\n1. It eliminates the mental overhead of tracking small tasks.\n2. It creates momentum—doing one small thing makes you want to do the next.\n3. It prevents small tasks from piling up into an overwhelming mountain.\n\nExamples of 2-minute tasks:\n• Reply to a short email\n• Put dishes in the dishwasher\n• File a document\n• Make a quick phone call\n• Wipe down a counter",
    example: "You check your email and see a message from a colleague asking for a file. Instead of flagging it for later, you attach the file and reply immediately. Done in 45 seconds. That task is now off your mental plate forever.",
    challenge: "Look around you right now. Find 3 tasks that would take less than 2 minutes each. Do all three RIGHT NOW before continuing. Notice how good it feels to clear them instantly.",
    quiz: [
      { question: "What is the core principle of the 2-Minute Rule?", options: ["Schedule all tasks for tomorrow", "If it takes less than 2 minutes, do it now", "Break big tasks into 2-minute chunks", "Only work for 2 minutes at a time"], answer: "If it takes less than 2 minutes, do it now" },
      { question: "Why does the 2-Minute Rule help with procrastination?", options: ["It forces you to work faster", "It eliminates mental overhead of tracking small tasks", "It makes you skip difficult tasks", "It reduces your workload by half"], answer: "It eliminates mental overhead of tracking small tasks" }
    ]
  },
  {
    slug: s("Brain Dump Reset"), title: "Brain Dump Reset", category: "Thinking & Productivity", categoryIcon: "🧠",
    summary: "Clear mental clutter and regain focus in under 5 minutes.",
    lesson: "A Brain Dump is the practice of writing down every single thought, task, worry, and idea that's occupying your mind—without filtering or organizing.\n\nHow to do it:\n1. Grab paper or open a blank document.\n2. Set a timer for 3-5 minutes.\n3. Write everything on your mind—tasks, worries, ideas, random thoughts.\n4. Don't judge, organize, or prioritize. Just dump.\n5. When done, review and circle the 1-3 most important items.\n\nWhy it works: Your brain has limited working memory (about 4-7 items). When you try to hold more, you feel overwhelmed and anxious. Writing things down frees up mental RAM.",
    example: "Before a big meeting, you feel scattered. You take 3 minutes to write: 'Reply to Sarah, buy groceries, presentation slide 4 needs fixing, call dentist, research competitor pricing, water plants.' Suddenly your mind is clear and you can focus on what matters most.",
    challenge: "Set a 3-minute timer right now. Write down EVERYTHING on your mind—no matter how small or silly. Then circle the ONE thing that matters most today.",
    quiz: [
      { question: "What is the first step of a Brain Dump?", options: ["Organize your thoughts by priority", "Write everything down without filtering", "Delete unnecessary tasks", "Meditate for 5 minutes"], answer: "Write everything down without filtering" },
      { question: "How many items can working memory typically hold?", options: ["1-2 items", "4-7 items", "10-15 items", "Unlimited items"], answer: "4-7 items" }
    ]
  },
  {
    slug: s("The Next Action Trick"), title: "The \"Next Action\" Trick", category: "Thinking & Productivity", categoryIcon: "🧠",
    summary: "Stop feeling overwhelmed by knowing exactly what to do next.",
    lesson: "When you write 'Work on project' on your to-do list, your brain doesn't know where to start. The Next Action Trick solves this.\n\nFor every task, ask: 'What is the very next physical action I need to take?'\n\nBad: 'Plan vacation'\nGood: 'Open Google and search flights to Barcelona for June 15-22'\n\nBad: 'Do taxes'\nGood: 'Open email and find W-2 from employer'\n\nThe key word is PHYSICAL—what will your body actually do? Open a browser, pick up a phone, walk to a room, type a message.\n\nThis eliminates the hidden planning step that causes procrastination.",
    example: "Instead of staring at 'Write report' on your list, you rewrite it as 'Open Google Docs and type the first paragraph header.' Suddenly, starting feels effortless because there's zero ambiguity.",
    challenge: "Look at your to-do list (or think of your biggest pending task). Rewrite it as a specific PHYSICAL next action. Make it so clear that a stranger could do it.",
    quiz: [
      { question: "What makes a 'next action' effective?", options: ["It should be vague and flexible", "It should be a specific physical action", "It should cover the entire project", "It should take at least an hour"], answer: "It should be a specific physical action" },
      { question: "Why does 'Work on project' cause procrastination?", options: ["It's too easy", "It contains a hidden planning step", "Projects are always boring", "It's too specific"], answer: "It contains a hidden planning step" }
    ]
  },
  {
    slug: s("5-Minute Deep Focus"), title: "5-Minute Deep Focus", category: "Thinking & Productivity", categoryIcon: "🧠",
    summary: "Enter a distraction-free state almost instantly.",
    lesson: "Deep focus doesn't require hours of preparation. The 5-Minute Deep Focus technique gets you into flow quickly:\n\n1. Remove all distractions: Phone on silent, close unnecessary tabs, put on headphones.\n2. Set a 5-minute timer.\n3. Commit to working on ONE thing for just 5 minutes.\n4. Start immediately—don't plan, just begin.\n\nThe magic: Once you start, your brain's task-positive network activates. After 5 minutes, you'll usually want to keep going. The hardest part is always the first minute.\n\nThis leverages the Zeigarnik Effect—your brain naturally wants to complete tasks it has started.",
    example: "You've been avoiding writing an email for an hour. You set a 5-minute timer and start typing. After 5 minutes, you've written half the email and your brain wants to finish it. You continue for another 3 minutes and it's done.",
    challenge: "Pick one task you've been avoiding. Set a 5-minute timer right now and START. Don't think about finishing—just work for 5 minutes. Notice what happens when the timer goes off.",
    quiz: [
      { question: "What psychological effect makes the 5-Minute technique work?", options: ["The Dunning-Kruger Effect", "The Zeigarnik Effect", "The Hawthorne Effect", "The Placebo Effect"], answer: "The Zeigarnik Effect" },
      { question: "What is the hardest part of deep focus?", options: ["The last minute", "Maintaining focus for hours", "The first minute of starting", "Finding the right music"], answer: "The first minute of starting" }
    ]
  },
  {
    slug: s("Decision Shortcut 10-10-10 Rule"), title: "Decision Shortcut (10-10-10 Rule)", category: "Thinking & Productivity", categoryIcon: "🧠",
    summary: "Make better decisions without overthinking.",
    lesson: "The 10-10-10 Rule, created by Suzy Welch, is a framework for making decisions quickly and wisely.\n\nWhen facing a decision, ask yourself:\n1. How will I feel about this in 10 MINUTES?\n2. How will I feel about this in 10 MONTHS?\n3. How will I feel about this in 10 YEARS?\n\nThis creates instant perspective:\n• 10 minutes captures your emotional reaction\n• 10 months reveals medium-term consequences\n• 10 years shows what truly matters\n\nMost decisions that feel agonizing in the moment become irrelevant within 10 months. This rule helps you see that clearly.",
    example: "Should you speak up in a meeting with a controversial idea? In 10 minutes, you might feel nervous. In 10 months, people will respect that you shared your perspective. In 10 years, it won't matter at all—so go for it!",
    challenge: "Think of a decision you're currently struggling with. Apply the 10-10-10 rule right now. Write down your answers for each timeframe. Does the answer become clearer?",
    quiz: [
      { question: "What are the three timeframes in the 10-10-10 Rule?", options: ["10 seconds, 10 minutes, 10 hours", "10 minutes, 10 months, 10 years", "10 days, 10 weeks, 10 months", "10 hours, 10 days, 10 weeks"], answer: "10 minutes, 10 months, 10 years" },
      { question: "What does the 10-10-10 Rule primarily help with?", options: ["Memorizing information", "Gaining perspective on decisions", "Improving physical health", "Learning new languages"], answer: "Gaining perspective on decisions" }
    ]
  },
  // === Digital & Tech ===
  {
    slug: s("Google Like a Pro"), title: "Google Like a Pro", category: "Digital & Tech", categoryIcon: "💻",
    summary: "Find exactly what you need using simple search tricks.",
    lesson: "Most people use Google at 10% of its power. Here are search operators that will transform how you find information:\n\n1. Use quotes for exact phrases: \"exact phrase here\"\n2. Use minus to exclude words: recipe -mushrooms\n3. Use site: to search within a website: site:reddit.com best laptop 2024\n4. Use filetype: to find specific files: filetype:pdf machine learning guide\n5. Use before:/after: for date ranges: climate change after:2023\n6. Use OR for alternatives: best laptop OR notebook 2024\n7. Use * as a wildcard: \"the * of happiness\"\n\nBonus: Use Google's 'Tools' button to filter by time period for fresh results.",
    example: "Instead of searching 'good restaurants near me', try: best restaurants site:reddit.com \"your city\" after:2023. You'll get real recommendations from real people, not paid ads.",
    challenge: "Try these three searches right now:\n1. Search for a PDF guide on any topic: filetype:pdf [your topic]\n2. Search Reddit for advice: site:reddit.com [your question]\n3. Exclude something: [recipe you like] -[ingredient you hate]",
    quiz: [
      { question: "How do you search for an exact phrase on Google?", options: ["Put it in parentheses", "Put it in quotes", "Add 'exact:' before it", "Type it in all caps"], answer: "Put it in quotes" },
      { question: "How do you search within a specific website?", options: ["website:[url]", "in:[url]", "site:[url]", "from:[url]"], answer: "site:[url]" }
    ]
  },
  {
    slug: s("Write Better AI Prompts"), title: "Write Better AI Prompts", category: "Digital & Tech", categoryIcon: "💻",
    summary: "Get smarter answers from AI with one simple structure.",
    lesson: "The quality of AI output depends entirely on your input. Use the RICE framework:\n\nR - Role: Tell the AI who to be ('Act as a senior marketing expert')\nI - Instruction: Be specific about what you want ('Write 5 email subject lines')\nC - Context: Provide background ('for a B2B SaaS product launching a new feature')\nE - Examples: Show what good looks like ('Similar to: \"Your workflow just got 10x faster\"')\n\nOther tips:\n• Ask for step-by-step reasoning\n• Specify the format you want (bullet points, table, essay)\n• Iterate—refine your prompt based on the output\n• Use 'Explain like I'm 5' for complex topics",
    example: "Bad prompt: 'Write me an email'\nGood prompt: 'Act as a professional copywriter. Write a follow-up email to a potential client who attended our webinar but hasn't responded. Keep it under 100 words, friendly but professional. Include a clear call-to-action.'",
    challenge: "Open any AI tool and try the RICE framework. Give it a Role, a specific Instruction, Context about your situation, and an Example of what you want. Compare the output to a simple prompt.",
    quiz: [
      { question: "What does RICE stand for in AI prompting?", options: ["Read, Interpret, Create, Edit", "Role, Instruction, Context, Examples", "Research, Implement, Check, Execute", "Request, Input, Command, Evaluate"], answer: "Role, Instruction, Context, Examples" },
      { question: "What is the most common mistake in AI prompting?", options: ["Being too specific", "Being too vague", "Using too many examples", "Asking follow-up questions"], answer: "Being too vague" }
    ]
  },
  {
    slug: s("Keyboard Shortcut Boost"), title: "Keyboard Shortcut Boost", category: "Digital & Tech", categoryIcon: "💻",
    summary: "Save hours weekly using just a few key combos.",
    lesson: "Learning just 10 keyboard shortcuts can save you 8+ days per year. Here are the essential ones:\n\nUniversal:\n• Ctrl+C / Ctrl+V — Copy/Paste\n• Ctrl+Z / Ctrl+Y — Undo/Redo\n• Ctrl+F — Find in page\n• Ctrl+T — New browser tab\n• Ctrl+W — Close current tab\n• Ctrl+Shift+T — Reopen closed tab\n• Alt+Tab — Switch between apps\n\nPower moves:\n• Ctrl+L — Jump to address bar\n• Ctrl+Shift+V — Paste without formatting\n• Win+V — Clipboard history\n• Ctrl+D — Bookmark current page\n\nThe trick to learning shortcuts: Every time you reach for your mouse, ask yourself 'Is there a keyboard shortcut for this?' and look it up.",
    example: "You accidentally close an important browser tab. Instead of panicking and searching your history, you press Ctrl+Shift+T and it's instantly back. Total time saved: 30 seconds. Over a year, that adds up to hours.",
    challenge: "For the next 30 minutes, try to avoid using your mouse for these actions: opening/closing tabs, copying/pasting, and switching between apps. Use only keyboard shortcuts.",
    quiz: [
      { question: "What shortcut reopens a recently closed browser tab?", options: ["Ctrl+T", "Ctrl+Shift+T", "Ctrl+Z", "Alt+F4"], answer: "Ctrl+Shift+T" },
      { question: "What does Ctrl+Shift+V do?", options: ["Paste with formatting", "Paste without formatting", "View clipboard", "Select all"], answer: "Paste without formatting" }
    ]
  },
  {
    slug: s("Spot Fake Websites"), title: "Spot Fake Websites", category: "Digital & Tech", categoryIcon: "💻",
    summary: "Avoid scams instantly with quick checks anyone can do.",
    lesson: "Fake websites cost people billions every year. Here's how to spot them in seconds:\n\n1. Check the URL carefully: Look for misspellings (amaz0n.com, go0gle.com). Legitimate sites use HTTPS (lock icon).\n2. Look for contact info: Real businesses have phone numbers, addresses, and multiple contact methods.\n3. Check the domain age: Brand new domains (< 6 months) are suspicious. Use whois.com to check.\n4. Read the 'About' page: Vague or missing about pages are red flags.\n5. Too-good-to-be-true deals: 90% off luxury items? It's a scam.\n6. Check for grammar errors: Professional companies don't have spelling mistakes on their website.\n7. Verify with search: Google the company name + 'scam' or 'review'.",
    example: "You get an email saying 'Your Netflix account is suspended' with a link to 'netf1ix-support.com'. Red flags: misspelled domain, urgency tactics, and the email doesn't match Netflix's official address. You go directly to netflix.com instead of clicking the link.",
    challenge: "Visit 3 websites you've never been to before. Run through the checklist above for each one. Can you identify any red flags? Practice this quick scan whenever you visit a new site.",
    quiz: [
      { question: "What's the first thing to check on a suspicious website?", options: ["The color scheme", "The URL for misspellings", "The number of products", "The font size"], answer: "The URL for misspellings" },
      { question: "Why are extremely low prices a red flag?", options: ["Stores never have sales", "Real discounts are always small", "Scammers use unrealistic deals to lure victims", "Low prices mean low quality"], answer: "Scammers use unrealistic deals to lure victims" }
    ]
  },
  {
    slug: s("Clean Your Inbox Fast"), title: "Clean Your Inbox Fast", category: "Digital & Tech", categoryIcon: "💻",
    summary: "Go from chaos to organized in minutes.",
    lesson: "The Inbox Zero method adapted for real people:\n\n1. Unsubscribe ruthlessly: Open your inbox, search for 'unsubscribe', and unsubscribe from everything you haven't read in 30 days.\n2. Use the 4 D's for every email:\n   • Delete: If it's not relevant\n   • Do: If it takes < 2 minutes\n   • Delegate: If someone else should handle it\n   • Defer: Star/snooze it for later\n3. Create only 3 folders: Action Required, Waiting, and Reference.\n4. Process email in batches: Check email 2-3 times per day, not continuously.\n5. Use filters: Auto-sort newsletters, notifications, and recurring emails.\n\nThe goal isn't an empty inbox—it's an inbox where everything has been decided on.",
    example: "You open your inbox with 200 unread emails. You spend 10 minutes mass-unsubscribing from newsletters. Then you quickly scan through, deleting obvious junk, replying to quick ones, and starring 5 that need real attention. Your inbox drops to 5 actual tasks.",
    challenge: "Open your email right now. Find 5 newsletters or promotional emails you never read. Unsubscribe from all 5. Then apply the 4 D's to your 10 most recent emails.",
    quiz: [
      { question: "What are the 4 D's of email processing?", options: ["Draft, Design, Deliver, Done", "Delete, Do, Delegate, Defer", "Download, Discuss, Decide, Discard", "Document, Distribute, Develop, Deploy"], answer: "Delete, Do, Delegate, Defer" },
      { question: "How many folders does the simplified system recommend?", options: ["1", "3", "7", "10"], answer: "3" }
    ]
  },
  // === Money & Life Admin ===
  {
    slug: s("The 50-30-20 Money Split"), title: "The 50/30/20 Money Split", category: "Money & Life Admin", categoryIcon: "💰",
    summary: "Instantly structure your finances without spreadsheets.",
    lesson: "The 50/30/20 rule, popularized by Senator Elizabeth Warren, is the simplest budgeting framework:\n\n50% NEEDS: Rent, groceries, utilities, insurance, minimum debt payments—things you must pay.\n30% WANTS: Dining out, entertainment, subscriptions, hobbies—things you enjoy but could live without.\n20% SAVINGS: Emergency fund, investments, extra debt payments—your future self.\n\nHow to start:\n1. Calculate your after-tax monthly income.\n2. Multiply by 0.5, 0.3, and 0.2.\n3. Compare against your actual spending.\n4. Adjust gradually—you don't need to be perfect on day one.\n\nThe beauty of this rule is its simplicity. No complex categories, no spreadsheets, no guilt.",
    example: "You earn $4,000/month after tax. That means: $2,000 for needs, $1,200 for wants, $800 for savings. You check your spending and realize you're spending $1,800 on wants. You find $600 to cut and redirect to savings.",
    challenge: "Calculate your 50/30/20 split right now based on your income. Then check your last month's spending—which category are you overspending in?",
    quiz: [
      { question: "In the 50/30/20 rule, what percentage goes to needs?", options: ["20%", "30%", "50%", "60%"], answer: "50%" },
      { question: "Which category includes dining out and entertainment?", options: ["Needs", "Wants", "Savings", "Investments"], answer: "Wants" }
    ]
  },
  {
    slug: s("Quick Expense Audit"), title: "Quick Expense Audit", category: "Money & Life Admin", categoryIcon: "💰",
    summary: "Find where your money is leaking in 5 minutes.",
    lesson: "Most people have 'money leaks'—small recurring charges they've forgotten about. Here's how to find them:\n\n1. Open your bank/credit card app.\n2. Sort transactions from the last 30 days by amount.\n3. Highlight any recurring charge you didn't consciously choose this month.\n4. For each one, ask: 'Did I use this in the last 2 weeks?'\n5. If no, cancel or downgrade it.\n\nCommon money leaks:\n• Unused gym memberships\n• Streaming services you don't watch\n• Premium app tiers you don't need\n• Insurance you're overpaying for\n• Subscriptions from free trials",
    example: "You scan your statement and find: a $15/month meditation app you haven't opened in 3 months, a $10 cloud storage upgrade you don't need, and a $30 gym membership when you work out at home. That's $55/month or $660/year back in your pocket.",
    challenge: "Open your bank app right now. Find the last 30 days of transactions. Can you spot at least one recurring charge you forgot about or no longer need?",
    quiz: [
      { question: "What's the key question to ask about each recurring charge?", options: ["Is it expensive?", "Did I use this in the last 2 weeks?", "Is it older than a year?", "Do my friends use it?"], answer: "Did I use this in the last 2 weeks?" },
      { question: "What are 'money leaks'?", options: ["Large one-time purchases", "Small forgotten recurring charges", "Investment losses", "Tax penalties"], answer: "Small forgotten recurring charges" }
    ]
  },
  {
    slug: s("Subscription Cleanup"), title: "Subscription Cleanup", category: "Money & Life Admin", categoryIcon: "💰",
    summary: "Cancel what you don't need and save money instantly.",
    lesson: "The average person spends $200+/month on subscriptions—and uses less than half of them.\n\nThe 3-Step Cleanup:\n1. LIST: Write down every subscription (check email for 'receipt' or 'subscription').\n2. RANK: Rate each 1-5 on how much you actually use it.\n3. ACT: Cancel anything rated 1-2. Downgrade anything rated 3.\n\nPro tips:\n• Many services offer a discount if you try to cancel\n• Share family plans with friends/family to split costs\n• Use free alternatives: YouTube instead of Spotify, library apps instead of Audible\n• Set calendar reminders before free trials end",
    example: "You list 12 subscriptions totaling $180/month. After rating them, you cancel 4 (never use), downgrade 2 (don't need premium), and keep 6. New total: $95/month. You just saved $1,020/year.",
    challenge: "Search your email for 'subscription' or 'receipt'. List every active subscription you find. Rate each one 1-5 on actual usage. Cancel at least one right now.",
    quiz: [
      { question: "What's the first step in subscription cleanup?", options: ["Cancel everything", "List all subscriptions", "Upgrade to annual plans", "Ask friends what they use"], answer: "List all subscriptions" },
      { question: "What should you do with subscriptions rated 3 out of 5?", options: ["Cancel them", "Keep them as is", "Downgrade them", "Upgrade them"], answer: "Downgrade them" }
    ]
  },
  {
    slug: s("Price Check Trick"), title: "Price Check Trick", category: "Money & Life Admin", categoryIcon: "💰",
    summary: "Avoid overpaying using a simple comparison habit.",
    lesson: "Before any purchase over $20, use the 3-Tab Rule:\n\n1. Open 3 browser tabs with the product from different stores.\n2. Check for coupon codes (search '[store name] coupon code').\n3. Check price history (use camelcamelcamel.com for Amazon).\n4. Wait 24 hours for purchases over $50.\n\nOther tricks:\n• Add items to cart and leave—many stores send discount emails within 24 hours\n• Check if your credit card offers price protection\n• Buy refurbished for electronics (often 30-50% cheaper)\n• Use browser extensions like Honey or Rakuten for automatic discounts\n• Check if the store has a student/military discount",
    example: "You want a $150 pair of headphones. You check 3 stores: Amazon ($150), Best Buy ($140), manufacturer's site ($150 but 10% email signup discount = $135). You save $15 in 2 minutes of comparison.",
    challenge: "Think of something you plan to buy soon. Open 3 tabs and compare prices. Search for a coupon code. Did you find a better deal?",
    quiz: [
      { question: "What is the 3-Tab Rule?", options: ["Having only 3 browser tabs open", "Comparing prices across 3 stores", "Buying 3 of everything", "Waiting 3 days before buying"], answer: "Comparing prices across 3 stores" },
      { question: "What should you do for purchases over $50?", options: ["Buy immediately", "Wait 24 hours", "Only buy on weekends", "Always buy the cheapest option"], answer: "Wait 24 hours" }
    ]
  },
  {
    slug: s("Split Bills Fairly"), title: "Split Bills Fairly", category: "Money & Life Admin", categoryIcon: "💰",
    summary: "Never overpay in group expenses again.",
    lesson: "Splitting bills doesn't have to be awkward. Here are strategies:\n\n1. The Proportional Split: Each person pays for what they ordered. Simple and fair.\n2. The Venmo Method: One person pays, everyone else Venmos their share immediately (not 'later').\n3. The Rotation Method: For regular group dinners, take turns paying the full bill.\n4. The 'I'll Get This, You Get Next' Rule: Works great for pairs.\n\nHow to handle awkward situations:\n• If someone orders expensive items: 'Let's just pay for what we got'\n• If someone 'forgets': Send a polite Venmo request\n• For shared appetizers: Split equally, but exclude individual entrees\n\nKey rule: Settle up IMMEDIATELY. Debts that linger destroy friendships.",
    example: "At dinner, three friends order meals costing $15, $25, and $40 plus $20 in shared appetizers. Instead of splitting $100 three ways ($33 each), they split apps equally ($6.67 each) and pay for their own meals. Fair for everyone.",
    challenge: "Think of the last group expense you had. Was it split fairly? If you owe someone, settle up right now. If someone owes you, send a friendly reminder.",
    quiz: [
      { question: "What's the most important rule about group expenses?", options: ["Always split equally", "The richest person pays", "Settle up immediately", "Never talk about money"], answer: "Settle up immediately" },
      { question: "When is the Rotation Method best used?", options: ["One-time events", "Regular group dinners", "Large parties", "Business meetings"], answer: "Regular group dinners" }
    ]
  },
  // === Social & Communication ===
  {
    slug: s("Remember Names Easily"), title: "Remember Names Easily", category: "Social & Communication", categoryIcon: "🗣️",
    summary: "Use a simple trick to never forget names again.",
    lesson: "The #1 reason we forget names: we never actually heard them. We're too focused on ourselves during introductions.\n\nThe NAME Method:\nN - Notice: Actually listen when they say their name.\nA - Ask: 'Is that spelled the usual way?' or 'What a great name, where's it from?'\nM - Mention: Use their name 2-3 times in the first conversation.\nE - End: Say their name when you say goodbye: 'Great meeting you, Sarah!'\n\nBonus techniques:\n• Associate their name with someone you know (Sarah looks like my cousin Sarah)\n• Create a visual (Mike + microphone)\n• Write it down immediately after the conversation",
    example: "You meet someone named David at a networking event. You say: 'David, nice to meet you! So David, what do you do?' Later: 'David, that's really interesting. Great talking to you, David!' You've now heard and said his name 5 times. You'll remember it.",
    challenge: "Next time you meet someone new, use the NAME method. Notice their name, Ask about it, Mention it 3 times in conversation, and End with it. See how naturally it sticks.",
    quiz: [
      { question: "Why do most people forget names?", options: ["Names are too complicated", "They never actually heard the name", "They have bad memory", "Names don't matter"], answer: "They never actually heard the name" },
      { question: "How many times should you use someone's name in first conversation?", options: ["Once", "2-3 times", "10 times", "Never"], answer: "2-3 times" }
    ]
  },
  {
    slug: s("The Pause Power Move"), title: "The Pause Power Move", category: "Social & Communication", categoryIcon: "🗣️",
    summary: "Sound more confident by speaking slightly slower.",
    lesson: "The most powerful communication tool is silence. Confident speakers use strategic pauses:\n\n1. The Pre-Answer Pause: When asked a question, wait 2 seconds before answering. This signals thoughtfulness, not uncertainty.\n2. The Emphasis Pause: Pause BEFORE your key point. It creates anticipation.\n3. The Replacement Pause: Replace filler words (um, like, you know) with silence.\n\nWhy pauses work:\n• They give your brain time to form better responses\n• They make you appear more confident and credible\n• They give listeners time to absorb what you said\n• They convey authority—rushed speech signals nervousness\n\nPractice: Record yourself talking for 1 minute. Count your filler words. Then re-record, replacing each filler with a 1-second pause.",
    example: "In a meeting, your boss asks 'What do you think about this proposal?' Instead of a rushed 'Um, yeah, I think it's good,' you pause for 2 seconds, then say: 'I think it's strong overall. One area we should explore further is the timeline.' You sound 10x more credible.",
    challenge: "In your next conversation, try to replace every 'um' and 'uh' with a brief silence. Notice how it changes the way people respond to you.",
    quiz: [
      { question: "What does the Pre-Answer Pause signal?", options: ["Confusion", "Nervousness", "Thoughtfulness", "Disagreement"], answer: "Thoughtfulness" },
      { question: "What should you replace filler words with?", options: ["Longer filler words", "Silence", "Hand gestures", "Louder speaking"], answer: "Silence" }
    ]
  },
  {
    slug: s("Ask Better Questions"), title: "Ask Better Questions", category: "Social & Communication", categoryIcon: "🗣️",
    summary: "Make conversations instantly more interesting.",
    lesson: "Great conversationalists aren't great talkers—they're great askers. The secret: ask open-ended follow-up questions.\n\nBad questions (closed): 'Did you like the movie?' → 'Yes'\nGood questions (open): 'What was the most surprising part of the movie?' → Long, interesting answer\n\nThe Follow-Up Formula:\n• 'What made you decide to...?'\n• 'How did that make you feel?'\n• 'What was the hardest part about...?'\n• 'If you could do it over, what would you change?'\n• 'What surprised you most about...?'\n\nThe 2:1 Rule: Ask 2 questions for every 1 statement you make. People love talking about themselves—let them.",
    example: "Instead of 'How was your vacation?', ask 'What was the highlight of your trip?' They tell you about an amazing restaurant. Follow up: 'What made it so special?' Now you're having a real conversation.",
    challenge: "In your next conversation, use the 2:1 rule: ask 2 questions for every 1 thing you share. Notice how the conversation quality changes.",
    quiz: [
      { question: "What makes a question 'open-ended'?", options: ["It has many words", "It can't be answered with yes/no", "It's about opinions only", "It starts with 'do'"], answer: "It can't be answered with yes/no" },
      { question: "What is the 2:1 Rule?", options: ["Talk twice as much as you listen", "Ask 2 questions for every 1 statement", "Wait 2 seconds before responding", "Speak to 2 people at once"], answer: "Ask 2 questions for every 1 statement" }
    ]
  },
  {
    slug: s("Exit Conversations Smoothly"), title: "Exit Conversations Smoothly", category: "Social & Communication", categoryIcon: "🗣️",
    summary: "Leave without awkwardness or excuses.",
    lesson: "Ending conversations gracefully is a skill most people lack. Here are proven exit strategies:\n\n1. The Callback Exit: Reference something they said. 'Well, good luck with that presentation tomorrow! I should let you go.'\n2. The Introduction Exit: 'Oh, have you met Sarah? Let me introduce you!' Then gracefully step away.\n3. The Task Exit: 'I need to grab a drink/food/use the restroom. Great talking to you!'\n4. The Future Bridge: 'We should continue this conversation! Can I get your LinkedIn/number?'\n5. The Honest Exit: 'I've really enjoyed this conversation. I need to head out, but this was great.'\n\nKey rules:\n• Always end on a positive note\n• Use the person's name when leaving\n• Don't apologize for leaving—be confident about it\n• Give a brief reason (it doesn't need to be elaborate)",
    example: "You've been talking to someone for 10 minutes at an event and need to move on. You say: 'Mike, this has been great. I'm going to grab a coffee but let's definitely connect on LinkedIn!' Clean, warm, and no awkwardness.",
    challenge: "Practice the Callback Exit in your next conversation. When you're ready to leave, reference something specific they mentioned and wrap up naturally.",
    quiz: [
      { question: "What should you always do when leaving a conversation?", options: ["Apologize for leaving", "Promise to call them", "End on a positive note", "Explain in detail why you're leaving"], answer: "End on a positive note" },
      { question: "What is the 'Future Bridge' exit?", options: ["Promising to return in the future", "Suggesting continuing the conversation later", "Talking about future events", "Building a bridge to a new topic"], answer: "Suggesting continuing the conversation later" }
    ]
  },
  {
    slug: s("Compliment Like a Pro"), title: "Compliment Like a Pro", category: "Social & Communication", categoryIcon: "🗣️",
    summary: "Give compliments that actually feel genuine.",
    lesson: "Most compliments are generic and forgettable. Great compliments are specific, earned, and about choices (not appearance).\n\nThe Formula: Compliment the CHOICE, not the TRAIT.\n\nBad: 'You're smart.' (Trait—feels hollow)\nGood: 'The way you structured that presentation was brilliant.' (Choice—feels specific and earned)\n\nBad: 'Nice shirt.' (Generic)\nGood: 'That color combination is really creative. You have great style.' (Specific)\n\nRules for authentic compliments:\n1. Be specific: What exactly impressed you?\n2. Compliment effort/choices: Things they worked for\n3. Mean it: Never give a compliment you don't believe\n4. Don't follow with a 'but' (that erases the compliment)\n5. Compliment people behind their back—it always gets back to them",
    example: "Instead of telling a colleague 'Good job,' say 'The way you handled that difficult client question in the meeting showed real expertise. That wasn't easy.' They'll remember this compliment for months.",
    challenge: "Give one specific, choice-based compliment to someone today. Don't say 'good job'—describe exactly what they did well and why it impressed you.",
    quiz: [
      { question: "What makes a compliment feel genuine?", options: ["Being loud about it", "Being specific about choices", "Complimenting appearance", "Giving many compliments at once"], answer: "Being specific about choices" },
      { question: "What should you never follow a compliment with?", options: ["A question", "A smile", "The word 'but'", "Another compliment"], answer: "The word 'but'" }
    ]
  },
  // === Confidence & Presence ===
  {
    slug: s("Fix Your Posture Instantly"), title: "Fix Your Posture Instantly", category: "Confidence & Presence", categoryIcon: "🧍‍♂️",
    summary: "Look more confident in under 10 seconds.",
    lesson: "Good posture isn't just about health—it changes how others perceive you and how you feel.\n\nThe String Technique:\nImagine a string attached to the top of your head, gently pulling you upward. This single visualization fixes most posture issues.\n\nThe Posture Checklist:\n1. Ears over shoulders\n2. Shoulders back and down (not up near ears)\n3. Chest slightly lifted\n4. Core lightly engaged\n5. Weight even on both feet\n\nWhy it matters:\n• People with good posture are rated as more confident and competent\n• It actually improves your mood (embodied cognition)\n• It reduces back pain and headaches\n• It makes you look taller and more present",
    example: "Before a job interview, you do a quick posture check in the elevator mirror: pull shoulders back, lift chest slightly, stand tall. You walk in looking confident and composed instead of slouched and nervous.",
    challenge: "Right now: sit up straight, pull your shoulders back, and imagine that string pulling the top of your head upward. Hold for 30 seconds. Notice how different you feel. Set 3 posture reminders on your phone today.",
    quiz: [
      { question: "What is the 'String Technique'?", options: ["Tying a string around your waist", "Imagining a string pulling the top of your head up", "Using a resistance band", "Measuring your height with string"], answer: "Imagining a string pulling the top of your head up" },
      { question: "Good posture affects which of these?", options: ["Only physical health", "Only appearance", "Mood, perception, and health", "Only how tall you look"], answer: "Mood, perception, and health" }
    ]
  },
  {
    slug: s("Eye Contact Rule 3 Seconds"), title: "Eye Contact Rule (3 Seconds)", category: "Confidence & Presence", categoryIcon: "🧍‍♂️",
    summary: "Build trust without making it weird.",
    lesson: "Eye contact is the #1 trust-building tool, but too much feels aggressive and too little feels shifty.\n\nThe 3-Second Rule: Hold eye contact for about 3 seconds, then briefly look away (to the side, never down). Repeat.\n\nThe Triangle Technique: Alternate your gaze between the person's left eye, right eye, and mouth. This creates natural, comfortable eye contact without staring.\n\nKey guidelines:\n• Maintain eye contact ~60-70% of the time while listening\n• Maintain ~40-50% while speaking\n• When you look away, look to the side (looking down signals submission)\n• Nod slightly while maintaining eye contact to show engagement\n\nPractice: Try maintaining eye contact with a cashier or barista during your next interaction.",
    example: "During a one-on-one meeting, instead of staring at your laptop, you hold eye contact with your colleague using the triangle technique. They feel heard and valued. The conversation is 3x more productive.",
    challenge: "In your next conversation, consciously practice the 3-second rule. Hold eye contact for 3 seconds, look briefly to the side, then back. Notice how it feels different from your usual pattern.",
    quiz: [
      { question: "How long should you hold eye contact before looking away?", options: ["1 second", "3 seconds", "10 seconds", "Never look away"], answer: "3 seconds" },
      { question: "Where should you look when you break eye contact?", options: ["At the floor", "At your phone", "To the side", "At their forehead"], answer: "To the side" }
    ]
  },
  {
    slug: s("The Slow Walk Effect"), title: "The \"Slow Walk\" Effect", category: "Confidence & Presence", categoryIcon: "🧍‍♂️",
    summary: "Appear more calm and in control immediately.",
    lesson: "How you walk communicates more than you think. Rushed walking signals anxiety and low status. Deliberate walking signals confidence.\n\nThe Slow Walk principles:\n1. Reduce your walking speed by ~20%. Not a crawl—just slightly slower than usual.\n2. Take slightly longer strides.\n3. Keep your arms relaxed at your sides (not crossed or in pockets).\n4. Let your arms swing naturally.\n5. Lead with your chest, not your head.\n\nWhy this works:\n• Confident people don't rush—they move with purpose\n• Slower movement makes you appear thoughtful and in control\n• It actually reduces your own stress and anxiety\n• People unconsciously assign higher status to slower movers\n\nWhere to practice: Walking into meetings, entering a room at a party, or walking through your office.",
    example: "You're late to a meeting. Instead of rushing in flustered, you slow down right before the door, take a breath, and walk in calmly. Everyone perceives you as collected, not panicked. You say 'Thanks for your patience' instead of 'Sorry I'm late.'",
    challenge: "For the rest of today, consciously walk 20% slower than usual. Notice how it changes your internal state and how people react to you.",
    quiz: [
      { question: "Why does slow walking signal confidence?", options: ["It shows you don't care about time", "Confident people move with purpose, not urgency", "It's a sign of laziness", "Walking fast is always better"], answer: "Confident people move with purpose, not urgency" },
      { question: "What should you lead with when walking?", options: ["Your head", "Your feet", "Your chest", "Your arms"], answer: "Your chest" }
    ]
  },
  {
    slug: s("Stop Saying Um"), title: "Stop Saying \"Um\"", category: "Confidence & Presence", categoryIcon: "🧍‍♂️",
    summary: "Replace filler words with silence for authority.",
    lesson: "Filler words (um, uh, like, you know, basically, actually) undermine your credibility. The fix is simple but requires practice.\n\nThe Technique: Every time you feel the urge to say 'um', say NOTHING instead. Just pause.\n\nWhy silence is powerful:\n• Pauses make you sound thoughtful and deliberate\n• Your brain uses the pause to form better thoughts\n• Listeners perceive you as more intelligent and confident\n• Great speakers use silence as a tool—Obama, Steve Jobs, and MLK were all masterful pause-users\n\nHow to practice:\n1. Record yourself speaking for 2 minutes on any topic.\n2. Count your filler words.\n3. Re-record, replacing each filler with a 1-2 second pause.\n4. Compare: which version sounds more authoritative?\n\nThe goal isn't perfection—even reducing filler words by 50% makes a big difference.",
    example: "Before: 'So, um, basically what I think is, like, we should, you know, probably change the um, strategy.' After: 'What I think is... [pause] we should change the strategy.' Same message, 10x more impactful.",
    challenge: "Record yourself explaining what you do for work (1 minute). Count every filler word. Then re-record, pausing instead of using fillers. Listen to the difference.",
    quiz: [
      { question: "What should you replace filler words with?", options: ["Speaking louder", "A strategic pause", "The word 'so'", "Faster speech"], answer: "A strategic pause" },
      { question: "Why does reducing filler words make you seem more credible?", options: ["It makes speeches shorter", "It shows you think before speaking", "It's a sign of intelligence", "Both B and C"], answer: "Both B and C" }
    ]
  },
  {
    slug: s("First Impression Hack"), title: "First Impression Hack", category: "Confidence & Presence", categoryIcon: "🧍‍♂️",
    summary: "Make people like you within seconds.",
    lesson: "Research shows first impressions are formed in 7 seconds. Here's how to nail them:\n\nThe SOFTEN Technique:\nS - Smile: A genuine smile activates mirror neurons in others—they smile back.\nO - Open posture: Uncross arms, face them directly.\nF - Forward lean: Lean slightly toward the person to show interest.\nT - Touch: A firm (not crushing) handshake.\nE - Eye contact: The 3-second rule.\nN - Nod: Small nods show you're listening and agreeing.\n\nBonus tips:\n• Say their name when you meet: 'Great to meet you, Sarah'\n• Ask a question within 30 seconds (shows genuine interest)\n• Mirror their energy level (don't be overly excited if they're calm)\n• Be fully present—put your phone away completely",
    example: "You meet your partner's parents for the first time. Instead of a nervous wave, you smile warmly, extend your hand for a firm handshake, make eye contact, and say 'Mr. and Mrs. Johnson, I've heard so many great things about you.' Instant positive impression.",
    challenge: "Practice the SOFTEN technique in your next interaction with someone new. Focus especially on the genuine smile and open posture. Notice how they respond.",
    quiz: [
      { question: "How quickly are first impressions formed?", options: ["30 seconds", "2 minutes", "7 seconds", "1 minute"], answer: "7 seconds" },
      { question: "What does the 'O' in SOFTEN stand for?", options: ["Outgoing personality", "Open posture", "Optimistic attitude", "Observant behavior"], answer: "Open posture" }
    ]
  },
  // === Health & Energy ===
  {
    slug: s("The 5-Minute Energy Reset"), title: "The 5-Minute Energy Reset", category: "Health & Energy", categoryIcon: "🏋️",
    summary: "Beat fatigue without caffeine.",
    lesson: "When energy dips (usually 2-4 PM), most people reach for coffee. Here's a better approach:\n\nThe 5-Minute Reset Protocol:\n1. STAND UP and stretch your arms overhead for 20 seconds.\n2. Take 10 deep breaths (4 seconds in, 4 seconds hold, 6 seconds out).\n3. Splash cold water on your face or hold cold water against your wrists.\n4. Do 20 jumping jacks or march in place.\n5. Look at something far away for 20 seconds (resets your eyes).\n\nWhy the energy dip happens:\n• Your circadian rhythm naturally dips after lunch\n• Sitting reduces blood flow to your brain\n• Screen fatigue accumulates throughout the day\n• Dehydration often masquerades as tiredness\n\nThe key insight: Movement, cold, and breathing are faster energy boosters than caffeine.",
    example: "It's 3 PM and you're fighting to keep your eyes open. Instead of your third coffee, you stand up, do 10 deep breaths, splash cold water on your wrists, and do 20 jumping jacks in the hallway. You return to your desk alert and clear-headed.",
    challenge: "Right now, stand up and do the 5-Minute Reset. All 5 steps. Notice your energy level before and after on a scale of 1-10.",
    quiz: [
      { question: "What is the suggested breathing pattern for the reset?", options: ["Breathe as fast as possible", "4 in, 4 hold, 6 out", "Hold breath for 30 seconds", "10 rapid breaths"], answer: "4 in, 4 hold, 6 out" },
      { question: "What often masquerades as tiredness?", options: ["Hunger", "Boredom", "Dehydration", "Cold temperature"], answer: "Dehydration" }
    ]
  },
  {
    slug: s("Hydration Check"), title: "Hydration Check", category: "Health & Energy", categoryIcon: "🏋️",
    summary: "Know instantly if you're dehydrated.",
    lesson: "75% of people are chronically dehydrated. Here's how to check and fix it:\n\nThe Skin Pinch Test:\nPinch the skin on the back of your hand. If it snaps back instantly, you're hydrated. If it stays tented for more than 2 seconds, you need water.\n\nThe Color Test:\nCheck your urine color: Pale yellow = hydrated. Dark yellow/amber = dehydrated. Clear = possibly overhydrated.\n\nHow much to drink:\n• Base: Half your body weight in ounces (e.g., 160 lbs = 80 oz)\n• Add 16 oz for every hour of exercise\n• Add 8 oz for every caffeinated drink\n\nHydration hacks:\n• Start your day with 16 oz of water before anything else\n• Keep a water bottle visible at all times\n• Set hourly reminders\n• Eat water-rich foods (cucumber, watermelon, oranges)",
    example: "You have a headache at 2 PM. Before taking ibuprofen, you realize you've only had one glass of water today. You drink 16 oz of water and the headache is gone in 20 minutes. It was dehydration all along.",
    challenge: "Do the skin pinch test right now. Then check: how much water have you had today? If less than half your body weight in ounces, go drink a full glass of water right now.",
    quiz: [
      { question: "What does dark yellow urine indicate?", options: ["Good hydration", "Overhydration", "Dehydration", "Nothing"], answer: "Dehydration" },
      { question: "How much water should you drink first thing in the morning?", options: ["A sip is fine", "16 oz", "1 gallon", "Only drink when thirsty"], answer: "16 oz" }
    ]
  },
  {
    slug: s("Stretch for Desk Pain"), title: "Stretch for Desk Pain", category: "Health & Energy", categoryIcon: "🏋️",
    summary: "Relieve stiffness and tension quickly.",
    lesson: "Sitting at a desk creates predictable pain patterns. Here are 5 stretches you can do at your desk:\n\n1. Neck Release: Drop your right ear to your right shoulder, hold 15 seconds. Repeat left side.\n2. Chest Opener: Clasp hands behind your back, push chest forward, look up. Hold 15 seconds.\n3. Seated Twist: Sit up straight, twist right, hold the back of your chair. Hold 15 seconds each side.\n4. Hip Flexor Stretch: Stand up, step right foot forward in a lunge. Push hips forward. 15 seconds each.\n5. Wrist Circles: Extend arms, make 10 slow circles in each direction.\n\nThe 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds. Then do ONE of these stretches.\n\nSet a recurring 30-minute timer as a stretch reminder.",
    example: "After 2 hours of coding, your shoulders are up by your ears and your neck is stiff. You do the neck release and chest opener at your desk. 60 seconds later, the tension is gone and you can think more clearly.",
    challenge: "Do all 5 desk stretches right now, holding each for 15 seconds. Set a recurring 30-minute reminder to do at least one stretch throughout the day.",
    quiz: [
      { question: "What is the 20-20-20 rule?", options: ["Work 20 hours, rest 20 hours", "Every 20 min, look 20 feet away for 20 seconds", "Do 20 pushups every 20 minutes", "Take 20 breaks of 20 seconds"], answer: "Every 20 min, look 20 feet away for 20 seconds" },
      { question: "How long should you hold each desk stretch?", options: ["3 seconds", "15 seconds", "2 minutes", "5 minutes"], answer: "15 seconds" }
    ]
  },
  {
    slug: s("Power Breathing"), title: "Power Breathing", category: "Health & Energy", categoryIcon: "🏋️",
    summary: "Reduce stress and calm your mind fast.",
    lesson: "Your breath is the fastest way to control your nervous system. Here are 3 breathing techniques:\n\n1. Box Breathing (for calm focus):\n   Inhale 4 seconds → Hold 4 seconds → Exhale 4 seconds → Hold 4 seconds. Repeat 4 times.\n   Used by Navy SEALs before high-pressure situations.\n\n2. 4-7-8 Breathing (for relaxation):\n   Inhale 4 seconds → Hold 7 seconds → Exhale 8 seconds. Repeat 3 times.\n   Activates your parasympathetic nervous system.\n\n3. Energizing Breath (for alertness):\n   Quick, sharp inhales through the nose, forceful exhales through the mouth. 10 seconds on, 10 seconds rest. Repeat 3 times.\n\nWhy breathing works: Slow exhales activate the vagus nerve, switching your body from 'fight or flight' to 'rest and digest.'",
    example: "You're about to give a presentation and your heart is racing. You step aside and do 4 rounds of box breathing (about 1 minute). Your heart rate drops, your hands stop shaking, and you walk on stage calm and collected.",
    challenge: "Try box breathing right now: 4 seconds in, 4 seconds hold, 4 seconds out, 4 seconds hold. Do 4 complete cycles. Rate your stress before and after.",
    quiz: [
      { question: "Which breathing technique is used by Navy SEALs?", options: ["4-7-8 Breathing", "Box Breathing", "Energizing Breath", "Wim Hof Method"], answer: "Box Breathing" },
      { question: "Why do slow exhales calm you down?", options: ["They use more oxygen", "They activate the vagus nerve", "They make you dizzy", "They build lung capacity"], answer: "They activate the vagus nerve" }
    ]
  },
  {
    slug: s("Sleep Fast Trick"), title: "Sleep Fast Trick", category: "Health & Energy", categoryIcon: "🏋️",
    summary: "Fall asleep quicker using a simple method.",
    lesson: "The Military Sleep Method was developed to help soldiers fall asleep in 2 minutes under any conditions:\n\n1. Relax your entire face—muscles, tongue, jaw. Let go of all tension.\n2. Drop your shoulders. Then relax your arms one side at a time.\n3. Exhale and relax your chest.\n4. Relax your legs—thighs first, then calves.\n5. Clear your mind for 10 seconds. Imagine you're lying in a canoe on a calm lake with clear blue sky above. Or imagine you're in a warm, dark, velvet hammock.\n\nIf thoughts come, repeat 'don't think, don't think' for 10 seconds.\n\nSupporting habits:\n• No screens 30 minutes before bed\n• Keep room cool (65-68°F / 18-20°C)\n• No caffeine after 2 PM\n• Same bedtime every night (±30 minutes)",
    example: "You're lying in bed with a racing mind. You start the military method: relax face, drop shoulders, release arms, relax legs, then visualize the calm lake. Within 3 minutes, you're drifting off instead of tossing for an hour.",
    challenge: "Tonight, try the Military Sleep Method. Follow all 5 steps exactly. Track how long it takes you to fall asleep compared to your usual time.",
    quiz: [
      { question: "What's the first step of the Military Sleep Method?", options: ["Close your eyes", "Relax your entire face", "Count sheep", "Take sleeping pills"], answer: "Relax your entire face" },
      { question: "What's the ideal room temperature for sleep?", options: ["75-80°F", "65-68°F", "55-60°F", "Temperature doesn't matter"], answer: "65-68°F" }
    ]
  },
  // === Learning & Growth ===
  {
    slug: s("Learn Faster with Feynman"), title: "Learn Faster with Feynman", category: "Learning & Growth", categoryIcon: "🎯",
    summary: "Understand anything by explaining it simply.",
    lesson: "The Feynman Technique is named after Richard Feynman, a Nobel Prize-winning physicist known for explaining complex ideas simply.\n\n4 Steps:\n1. CHOOSE a concept you want to learn.\n2. EXPLAIN it as if teaching a 12-year-old. Use simple language, no jargon.\n3. IDENTIFY GAPS: Where did you struggle to explain? Those are your knowledge gaps.\n4. REVIEW and SIMPLIFY: Go back to the source, fill the gaps, then simplify your explanation further.\n\nWhy it works:\n• Teaching forces deep understanding (you can't explain what you don't understand)\n• Simple language reveals hidden complexity\n• It moves knowledge from passive recognition to active recall\n• It builds genuine understanding vs. surface-level memorization",
    example: "Learning about blockchain: Instead of saying 'It's a decentralized distributed ledger,' you explain: 'Imagine a shared Google Doc that records every transaction, and no single person can edit it without everyone agreeing. That's basically blockchain.' If you can explain it that simply, you understand it.",
    challenge: "Pick one concept you learned recently. Explain it in writing as if teaching a curious 12-year-old. Where did you get stuck? Go fill those gaps.",
    quiz: [
      { question: "What's the core idea of the Feynman Technique?", options: ["Memorize by repetition", "Explain concepts simply as if to a child", "Read textbooks multiple times", "Watch video tutorials"], answer: "Explain concepts simply as if to a child" },
      { question: "What do gaps in your explanation reveal?", options: ["That you're a bad teacher", "Areas you don't fully understand", "The topic is too hard", "You need a better textbook"], answer: "Areas you don't fully understand" }
    ]
  },
  {
    slug: s("Memory Anchor Trick"), title: "Memory Anchor Trick", category: "Learning & Growth", categoryIcon: "🎯",
    summary: "Remember more using association.",
    lesson: "Your brain remembers associations, not isolated facts. The Memory Anchor technique connects new information to something you already know.\n\nTechniques:\n1. Visual Association: Create a vivid mental image. To remember that 'mitochondria is the powerhouse of the cell,' picture tiny power plants inside a cell.\n2. Location Method (Memory Palace): Associate items with locations in a familiar place (your home). Item 1 = front door, Item 2 = living room, etc.\n3. Story Chain: Connect items in a story. To remember a grocery list (milk, bread, eggs), picture a cow (milk) surfing on a giant bread slice over a sea of eggs.\n4. Acronyms & Mnemonics: ROY G BIV for rainbow colors, 'Every Good Boy Does Fine' for music notes.\n\nThe more absurd, emotional, or vivid the association, the better you'll remember it.",
    example: "You need to remember that the chemical symbol for Gold is Au. You picture a golden Audi (Au-di) car. Now every time you think of gold, you see that golden Audi. You'll never forget Au = Gold.",
    challenge: "Try the Memory Palace: Pick 5 things you need to remember today. Associate each with a room in your home. Walk through your home mentally tonight and recall all 5.",
    quiz: [
      { question: "Why do vivid or absurd associations work better?", options: ["They're funnier", "The brain remembers emotional and unusual things better", "They take longer to create", "They don't—serious associations work better"], answer: "The brain remembers emotional and unusual things better" },
      { question: "What is a Memory Palace?", options: ["A castle for studying", "Associating items with locations in a familiar place", "A special notebook", "A meditation technique"], answer: "Associating items with locations in a familiar place" }
    ]
  },
  {
    slug: s("Skim Smarter"), title: "Skim Smarter", category: "Learning & Growth", categoryIcon: "🎯",
    summary: "Extract key ideas from any text in minutes.",
    lesson: "You don't need to read every word. Smart skimming extracts 80% of value in 20% of the time.\n\nThe SKIP Method:\nS - Scan headings and subheadings first (they're the skeleton of the content).\nK - Key sentences: Read the first and last sentence of each paragraph (they contain the main point and conclusion).\nI - Images and diagrams: They often summarize entire sections visually.\nP - Pull out highlights: Bold text, bullet points, and numbered lists are pre-highlighted by the author.\n\nWhen to skim vs. deep read:\n• Skim: News articles, blog posts, reports, emails, textbook chapters (first pass)\n• Deep read: Instructions, contracts, poetry, code, study material (second pass)\n\nThe two-pass approach: Skim first to get the big picture, then deep-read only the sections that matter.",
    example: "You have a 20-page report to review before a meeting in 30 minutes. You skim: read the executive summary, scan all headings, read the conclusion, and check key data tables. You now know the main points and can contribute meaningfully.",
    challenge: "Find a long article online. Apply the SKIP method: scan headings, read first/last sentences of paragraphs, check images, pull highlights. See how much you can learn in 3 minutes.",
    quiz: [
      { question: "What does SKIP stand for?", options: ["Scan, Knowledge, Interpret, Process", "Scan, Key sentences, Images, Pull highlights", "Speed, Knowledge, Insight, Practice", "Study, Keep, Ignore, Proceed"], answer: "Scan, Key sentences, Images, Pull highlights" },
      { question: "Which sentences contain the most information in a paragraph?", options: ["Middle sentences", "Random sentences", "First and last sentences", "The longest sentences"], answer: "First and last sentences" }
    ]
  },
  {
    slug: s("Avoid Information Overload"), title: "Avoid Information Overload", category: "Learning & Growth", categoryIcon: "🎯",
    summary: "Filter what actually matters instantly.",
    lesson: "We consume more information in a day than people in the 1500s consumed in a lifetime. Here's how to filter:\n\nThe 3-Filter System:\n1. RELEVANT? Does this directly affect my life, work, or goals in the next 30 days?\n2. ACTIONABLE? Can I do something with this information?\n3. UNIQUE? Is this genuinely new insight, or just a repackaged version of something I already know?\n\nIf the answer to all three is 'no,' skip it.\n\nPractical steps:\n• Unfollow accounts that don't pass the 3 filters\n• Set specific times for news/social media (not all day)\n• Use the 'Two-Article Rule': Read max 2 articles on any trending topic\n• Ask 'Will this matter in a week?' before clicking\n• Batch your information consumption into specific time blocks",
    example: "You see 10 articles about a trending tech topic. You ask: Is it relevant to my work? (Yes) Can I act on it? (Maybe) Is it new info? Only 2 articles have unique perspectives. You read those 2 and skip the other 8. You saved 40 minutes.",
    challenge: "Audit your content consumption: List 5 sources you check daily (apps, sites, feeds). Apply the 3 filters to each. Unfollow or unsubscribe from at least 2 that don't pass.",
    quiz: [
      { question: "What are the 3 filters for information?", options: ["Fun, Free, Fast", "Relevant, Actionable, Unique", "New, Popular, Trending", "Short, Simple, Shareable"], answer: "Relevant, Actionable, Unique" },
      { question: "What is the Two-Article Rule?", options: ["Read only 2 articles per day", "Read max 2 articles on any trending topic", "Write 2 articles per week", "Share 2 articles daily"], answer: "Read max 2 articles on any trending topic" }
    ]
  },
  {
    slug: s("Turn Notes into Action"), title: "Turn Notes into Action", category: "Learning & Growth", categoryIcon: "🎯",
    summary: "Stop collecting info—start applying it.",
    lesson: "Most people take notes that never get used again. The solution: Progressive Summarization + Action Tags.\n\nProgressive Summarization (by Tiago Forte):\n1. Layer 1: Save the note (highlight what's interesting)\n2. Layer 2: Bold the most important parts\n3. Layer 3: Highlight the critical insights\n4. Layer 4: Write a one-line summary in your own words\n5. Layer 5: Create an action item from the insight\n\nAction Tags: End every note with:\n• 🎯 ACTION: What will I do with this information?\n• ⏰ WHEN: By when will I do it?\n• 📊 MEASURE: How will I know it worked?\n\nThe key insight: Notes are useless if they don't change your behavior. Every note should lead to an action.",
    example: "You read a great article about productivity. Instead of saving and forgetting it, you add: '🎯 ACTION: Try the 2-minute rule for one week. ⏰ WHEN: Starting Monday. 📊 MEASURE: Track how many small tasks I complete daily.' Now the knowledge becomes behavior.",
    challenge: "Find a note you took recently that you haven't acted on. Apply the Action Tag system: define one specific action, set a deadline, and determine how you'll measure success.",
    quiz: [
      { question: "What makes most notes useless?", options: ["They're too short", "They never lead to action", "They're handwritten", "They use too many colors"], answer: "They never lead to action" },
      { question: "What are the three Action Tags?", options: ["Save, Share, Delete", "Action, When, Measure", "Read, Write, Review", "Why, How, What"], answer: "Action, When, Measure" }
    ]
  },
  // === Modern Life Hacks ===
  {
    slug: s("Pack Like a Minimalist"), title: "Pack Like a Minimalist", category: "Modern Life Hacks", categoryIcon: "⚡",
    summary: "Never overpack again with one rule.",
    lesson: "The 1-2-3-4-5 Packing Rule for any trip up to a week:\n\n1 hat\n2 pairs of shoes (wearing 1, packing 1)\n3 bottoms (pants/shorts/skirts)\n4 tops\n5 pairs of socks and underwear\n\nPlus essentials: 1 jacket, toiletries bag, charger.\n\nPro tips:\n• Roll clothes instead of folding (saves 30% space)\n• Choose a color scheme—all items should mix and match\n• Wear your bulkiest items on the plane\n• Pack a ziplock bag for dirty laundry\n• One outfit can work for multiple occasions with accessories\n\nThe 'Lay Out and Remove' Method:\n1. Lay out everything you think you need.\n2. Remove half of it.\n3. You're now packed correctly.",
    example: "For a 5-day trip, you lay out 8 shirts, 4 pants, 3 jackets. You apply the rule: 4 tops, 3 bottoms, 1 jacket. You roll them into a carry-on. No checked luggage, no overpacking stress, and you still look great every day.",
    challenge: "Think of your next trip (or a hypothetical weekend getaway). Apply the 1-2-3-4-5 rule and see if you can fit everything into a carry-on bag.",
    quiz: [
      { question: "What is the 1-2-3-4-5 packing rule?", options: ["Pack for 5 scenarios", "1 hat, 2 shoes, 3 bottoms, 4 tops, 5 underwear", "Pack 15 items total", "Spend 5 minutes packing"], answer: "1 hat, 2 shoes, 3 bottoms, 4 tops, 5 underwear" },
      { question: "What saves 30% of packing space?", options: ["Vacuum bags", "Rolling clothes instead of folding", "Buying smaller clothes", "Using compression cubes"], answer: "Rolling clothes instead of folding" }
    ]
  },
  {
    slug: s("Find Anything Faster"), title: "Find Anything Faster", category: "Modern Life Hacks", categoryIcon: "⚡",
    summary: "Organize your space using one simple system.",
    lesson: "The 'Home Base' system: Every item you own gets one specific 'home.' When you're done using it, it goes back to its home. That's it.\n\nHow to set it up:\n1. For each item you use daily, assign a specific spot (keys → bowl by door, wallet → nightstand).\n2. Label it if needed.\n3. Always return it to its home after use—no exceptions.\n\nThe 5-Minute Tidy:\n• Set a 5-minute timer at the end of each day.\n• Walk through your space and return everything to its home.\n• This prevents clutter from accumulating.\n\nFor digital files:\n• Use the PARA system: Projects / Areas / Resources / Archive\n• Everything gets filed into one of these 4 folders\n• Anything more complex creates decision fatigue",
    example: "You can never find your keys. You buy a small bowl, put it by the front door, and commit to always dropping your keys there. After 1 week of habit, you never lose your keys again. Apply this to wallet, phone, glasses, etc.",
    challenge: "Pick the 3 items you lose most often. Assign each a 'home base' location right now. For the next week, always return them to their home after use.",
    quiz: [
      { question: "What is the 'Home Base' system?", options: ["A home organization app", "Every item gets one specific permanent spot", "Organizing by room", "Buying storage containers"], answer: "Every item gets one specific permanent spot" },
      { question: "What is the PARA system for?", options: ["Physical organizing", "Digital file organization", "Email management", "Time management"], answer: "Digital file organization" }
    ]
  },
  {
    slug: s("Screenshot Organization Hack"), title: "Screenshot Organization Hack", category: "Modern Life Hacks", categoryIcon: "⚡",
    summary: "Never lose important info in your gallery again.",
    lesson: "Screenshots are how we save information—but they become a graveyard of forgotten images.\n\nThe Screenshot Workflow:\n1. CAPTURE: Take the screenshot as usual.\n2. PROCESS (within 24 hours): Ask—do I still need this?\n   • If yes: Move to a folder or note app.\n   • If no: Delete immediately.\n3. ORGANIZE: Create 3-5 screenshot folders:\n   • 📝 References (addresses, codes, instructions)\n   • 💡 Ideas (inspiration, things to try)\n   • 🛒 Shopping (products, prices to compare)\n   • 📋 Tasks (things to do from screenshots)\n\nWeekly cleanup:\n• Every Sunday, spend 5 minutes reviewing your screenshot folder.\n• Process anything unprocessed.\n• Delete anything no longer relevant.\n\nPro tip: Use your phone's built-in text recognition to search screenshots by their text content.",
    example: "You screenshot a recipe, a product recommendation, and a funny meme. Instead of them drowning in 500 other screenshots, you immediately move the recipe to 'References,' the product to 'Shopping,' and the meme stays in your camera roll. You can find the recipe months later.",
    challenge: "Open your phone's screenshot folder. Delete any screenshots older than 30 days that you no longer need. Create 3 organized folders and sort the remaining screenshots.",
    quiz: [
      { question: "How soon should you process a screenshot?", options: ["Immediately", "Within 24 hours", "Within a month", "Never—just keep them all"], answer: "Within 24 hours" },
      { question: "How many screenshot folders should you create?", options: ["1", "3-5", "10+", "None—use search"], answer: "3-5" }
    ]
  },
  {
    slug: s("Quick Decision Filter"), title: "Quick Decision Filter", category: "Modern Life Hacks", categoryIcon: "⚡",
    summary: "Know if something is worth your time instantly.",
    lesson: "We make ~35,000 decisions per day. Decision fatigue is real. Use these filters to decide faster:\n\nThe Hell Yes or No Rule (by Derek Sivers):\nIf your reaction to an opportunity isn't 'HELL YES!', then it's a no. This applies to invitations, projects, purchases, and commitments.\n\nThe Energy Audit:\nAsk: 'Will this give me energy or drain my energy?' Choose energy-giving activities whenever possible.\n\nThe Regret Minimization Framework (by Jeff Bezos):\nImagine yourself at age 80 looking back. Which choice will you regret least?\n\nThe 5-Second Rule (for small decisions):\nCan't decide between two options? Count 5-4-3-2-1 and go with your gut. For low-stakes decisions, speed beats perfection.\n\nThe Cost Test:\nConvert the price to hours of work. A $100 dinner = X hours of your time. Is it worth it?",
    example: "A friend invites you to an event this weekend. Your reaction is 'meh, maybe.' That's not 'HELL YES,' so it's a no. You decline politely and spend the time on something you're genuinely excited about. No guilt, no FOMO—just better time usage.",
    challenge: "Think of 3 commitments you're lukewarm about. Apply the 'Hell Yes or No' filter. Can you say no to at least one of them?",
    quiz: [
      { question: "What is the 'Hell Yes or No' rule?", options: ["Say yes to everything", "If it's not an enthusiastic yes, it's a no", "Always say no first", "Only say yes to free things"], answer: "If it's not an enthusiastic yes, it's a no" },
      { question: "What is the Cost Test?", options: ["Checking the price tag", "Converting price to hours of work", "Comparing with competitors", "Only buying on sale"], answer: "Converting price to hours of work" }
    ]
  },
  {
    slug: s("Reset Your Day in 5 Minutes"), title: "Reset Your Day in 5 Minutes", category: "Modern Life Hacks", categoryIcon: "⚡",
    summary: "Recover from a bad mood or low productivity.",
    lesson: "Having a bad day doesn't mean the whole day is lost. The Day Reset protocol:\n\n1. STOP (30 seconds): Acknowledge that things aren't going well. Say 'I'm having a rough patch, not a rough day.'\n2. MOVE (60 seconds): Stand up, stretch, walk to another room. Physical movement breaks mental patterns.\n3. BREATHE (60 seconds): Take 10 deep breaths. Box breathing or 4-7-8.\n4. REFRAME (60 seconds): Write down 3 things that ARE going well today, no matter how small.\n5. RESTART (60 seconds): Pick the ONE most important task. Set a 25-minute timer and begin.\n\nWhy it works:\n• It breaks the negative momentum\n• Movement and breathing reset your nervous system\n• Gratitude shifts your perspective\n• A fresh micro-goal gives you direction\n\nYou can reset your day at ANY time—2 PM, 4 PM, even 8 PM.",
    example: "It's 2 PM. Your morning was terrible—missed a deadline, spilled coffee, got a frustrating email. Instead of writing off the day, you do the 5-minute reset: walk to the kitchen, breathe, write '1. Had a good breakfast, 2. Weather is nice, 3. Got one task done this morning.' You set a 25-minute timer and tackle your top priority. The afternoon becomes productive.",
    challenge: "Right now, do the 5-minute Day Reset. Even if you're having a good day, practice it so it becomes automatic when you need it.",
    quiz: [
      { question: "What's the first step of the Day Reset?", options: ["Start working harder", "Acknowledge the rough patch without catastrophizing", "Take a nap", "Call a friend"], answer: "Acknowledge the rough patch without catastrophizing" },
      { question: "When can you reset your day?", options: ["Only in the morning", "Only before noon", "At any time", "Only on weekdays"], answer: "At any time" }
    ]
  },
  // === Criminology ===
  {
    slug: s("Routine Activity Theory"), title: "Routine Activity Theory", category: "Criminology", categoryIcon: "🕵️",
    summary: "Crime happens when 3 things align: motivated offender + suitable target + lack of guardian.",
    lesson: "A quick introduction to Routine Activity Theory. Crime happens when 3 things align: motivated offender + suitable target + lack of guardian.",
    example: "Applying Routine Activity Theory in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Routine Activity Theory today and write it down.",
    quiz: [
      { question: "What is the core idea of Routine Activity Theory?", options: ["Option A", "Crime happens when 3 things align: motivated offender + suitable target + lack of guardian.", "Option C", "Option D"], answer: "Crime happens when 3 things align: motivated offender + suitable target + lack of guardian." },
      { question: "How can you apply Routine Activity Theory?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Types of Crime"), title: "Types of Crime", category: "Criminology", categoryIcon: "🕵️",
    summary: "Violent, property, white-collar, cybercrime-each has different motives and patterns.",
    lesson: "A quick introduction to Types of Crime. Violent, property, white-collar, cybercrime-each has different motives and patterns.",
    example: "Applying Types of Crime in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Types of Crime today and write it down.",
    quiz: [
      { question: "What is the core idea of Types of Crime?", options: ["Option A", "Violent, property, white-collar, cybercrime-each has different motives and patterns.", "Option C", "Option D"], answer: "Violent, property, white-collar, cybercrime-each has different motives and patterns." },
      { question: "How can you apply Types of Crime?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Criminal Profiling Basics"), title: "Criminal Profiling Basics", category: "Criminology", categoryIcon: "🕵️",
    summary: "Behavior patterns can hint at personality traits, but it's not 100% accurate.",
    lesson: "A quick introduction to Criminal Profiling Basics. Behavior patterns can hint at personality traits, but it's not 100% accurate.",
    example: "Applying Criminal Profiling Basics in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Criminal Profiling Basics today and write it down.",
    quiz: [
      { question: "What is the core idea of Criminal Profiling Basics?", options: ["Option A", "Behavior patterns can hint at personality traits, but it's not 100% accurate.", "Option C", "Option D"], answer: "Behavior patterns can hint at personality traits, but it's not 100% accurate." },
      { question: "How can you apply Criminal Profiling Basics?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Philosophy ===
  {
    slug: s("Stoicism in 1 Minute"), title: "Stoicism in 1 Minute", category: "Philosophy", categoryIcon: "🗿",
    summary: "Focus only on what you can control. Ignore the rest.",
    lesson: "A quick introduction to Stoicism in 1 Minute. Focus only on what you can control. Ignore the rest.",
    example: "Applying Stoicism in 1 Minute in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Stoicism in 1 Minute today and write it down.",
    quiz: [
      { question: "What is the core idea of Stoicism in 1 Minute?", options: ["Option A", "Focus only on what you can control. Ignore the rest.", "Option C", "Option D"], answer: "Focus only on what you can control. Ignore the rest." },
      { question: "How can you apply Stoicism in 1 Minute?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Utilitarianism"), title: "Utilitarianism", category: "Philosophy", categoryIcon: "🗿",
    summary: "The best action = the one that maximizes overall happiness.",
    lesson: "A quick introduction to Utilitarianism. The best action = the one that maximizes overall happiness.",
    example: "Applying Utilitarianism in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Utilitarianism today and write it down.",
    quiz: [
      { question: "What is the core idea of Utilitarianism?", options: ["Option A", "The best action = the one that maximizes overall happiness.", "Option C", "Option D"], answer: "The best action = the one that maximizes overall happiness." },
      { question: "How can you apply Utilitarianism?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("The Trolley Problem"), title: "The Trolley Problem", category: "Philosophy", categoryIcon: "🗿",
    summary: "Would you sacrifice 1 person to save 5? Ethics isn't always clear.",
    lesson: "A quick introduction to The Trolley Problem. Would you sacrifice 1 person to save 5? Ethics isn't always clear.",
    example: "Applying The Trolley Problem in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of The Trolley Problem today and write it down.",
    quiz: [
      { question: "What is the core idea of The Trolley Problem?", options: ["Option A", "Would you sacrifice 1 person to save 5? Ethics isn't always clear.", "Option C", "Option D"], answer: "Would you sacrifice 1 person to save 5? Ethics isn't always clear." },
      { question: "How can you apply The Trolley Problem?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Statistics ===
  {
    slug: s("Mean vs Median"), title: "Mean vs Median", category: "Statistics", categoryIcon: "📈",
    summary: "Mean = average, Median = middle value (better for skewed data)",
    lesson: "A quick introduction to Mean vs Median. Mean = average, Median = middle value (better for skewed data)",
    example: "Applying Mean vs Median in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Mean vs Median today and write it down.",
    quiz: [
      { question: "What is the core idea of Mean vs Median?", options: ["Option A", "Mean = average, Median = middle value (better for skewed data)", "Option C", "Option D"], answer: "Mean = average, Median = middle value (better for skewed data)" },
      { question: "How can you apply Mean vs Median?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Correlation != Causation"), title: "Correlation != Causation", category: "Statistics", categoryIcon: "📈",
    summary: "Just because two things move together doesn't mean one causes the other.",
    lesson: "A quick introduction to Correlation != Causation. Just because two things move together doesn't mean one causes the other.",
    example: "Applying Correlation != Causation in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Correlation != Causation today and write it down.",
    quiz: [
      { question: "What is the core idea of Correlation != Causation?", options: ["Option A", "Just because two things move together doesn't mean one causes the other.", "Option C", "Option D"], answer: "Just because two things move together doesn't mean one causes the other." },
      { question: "How can you apply Correlation != Causation?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Standard Deviation"), title: "Standard Deviation", category: "Statistics", categoryIcon: "📈",
    summary: "Measures how spread out data is from the average.",
    lesson: "A quick introduction to Standard Deviation. Measures how spread out data is from the average.",
    example: "Applying Standard Deviation in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Standard Deviation today and write it down.",
    quiz: [
      { question: "What is the core idea of Standard Deviation?", options: ["Option A", "Measures how spread out data is from the average.", "Option C", "Option D"], answer: "Measures how spread out data is from the average." },
      { question: "How can you apply Standard Deviation?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Biology ===
  {
    slug: s("DNA Basics"), title: "DNA Basics", category: "Biology", categoryIcon: "🧬",
    summary: "DNA stores instructions for building proteins.",
    lesson: "A quick introduction to DNA Basics. DNA stores instructions for building proteins.",
    example: "Applying DNA Basics in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of DNA Basics today and write it down.",
    quiz: [
      { question: "What is the core idea of DNA Basics?", options: ["Option A", "DNA stores instructions for building proteins.", "Option C", "Option D"], answer: "DNA stores instructions for building proteins." },
      { question: "How can you apply DNA Basics?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Natural Selection"), title: "Natural Selection", category: "Biology", categoryIcon: "🧬",
    summary: "Survival of traits that improve reproduction.",
    lesson: "A quick introduction to Natural Selection. Survival of traits that improve reproduction.",
    example: "Applying Natural Selection in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Natural Selection today and write it down.",
    quiz: [
      { question: "What is the core idea of Natural Selection?", options: ["Option A", "Survival of traits that improve reproduction.", "Option C", "Option D"], answer: "Survival of traits that improve reproduction." },
      { question: "How can you apply Natural Selection?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Cells 101"), title: "Cells 101", category: "Biology", categoryIcon: "🧬",
    summary: "Cells = basic unit of life (prokaryotic vs eukaryotic).",
    lesson: "A quick introduction to Cells 101. Cells = basic unit of life (prokaryotic vs eukaryotic).",
    example: "Applying Cells 101 in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Cells 101 today and write it down.",
    quiz: [
      { question: "What is the core idea of Cells 101?", options: ["Option A", "Cells = basic unit of life (prokaryotic vs eukaryotic).", "Option C", "Option D"], answer: "Cells = basic unit of life (prokaryotic vs eukaryotic)." },
      { question: "How can you apply Cells 101?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Geography ===
  {
    slug: s("Plate Tectonics"), title: "Plate Tectonics", category: "Geography", categoryIcon: "🌍",
    summary: "Earth's crust is made of moving plates -> earthquakes & volcanoes.",
    lesson: "A quick introduction to Plate Tectonics. Earth's crust is made of moving plates -> earthquakes & volcanoes.",
    example: "Applying Plate Tectonics in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Plate Tectonics today and write it down.",
    quiz: [
      { question: "What is the core idea of Plate Tectonics?", options: ["Option A", "Earth's crust is made of moving plates -> earthquakes & volcanoes.", "Option C", "Option D"], answer: "Earth's crust is made of moving plates -> earthquakes & volcanoes." },
      { question: "How can you apply Plate Tectonics?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Climate vs Weather"), title: "Climate vs Weather", category: "Geography", categoryIcon: "🌍",
    summary: "Weather = short-term, Climate = long-term patterns",
    lesson: "A quick introduction to Climate vs Weather. Weather = short-term, Climate = long-term patterns",
    example: "Applying Climate vs Weather in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Climate vs Weather today and write it down.",
    quiz: [
      { question: "What is the core idea of Climate vs Weather?", options: ["Option A", "Weather = short-term, Climate = long-term patterns", "Option C", "Option D"], answer: "Weather = short-term, Climate = long-term patterns" },
      { question: "How can you apply Climate vs Weather?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Population Density"), title: "Population Density", category: "Geography", categoryIcon: "🌍",
    summary: "People per area affects economy, housing, and resources.",
    lesson: "A quick introduction to Population Density. People per area affects economy, housing, and resources.",
    example: "Applying Population Density in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Population Density today and write it down.",
    quiz: [
      { question: "What is the core idea of Population Density?", options: ["Option A", "People per area affects economy, housing, and resources.", "Option C", "Option D"], answer: "People per area affects economy, housing, and resources." },
      { question: "How can you apply Population Density?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Engineering ===
  {
    slug: s("Systems Thinking"), title: "Systems Thinking", category: "Engineering", categoryIcon: "⚙️",
    summary: "Everything is connected-optimize the whole, not just parts.",
    lesson: "A quick introduction to Systems Thinking. Everything is connected-optimize the whole, not just parts.",
    example: "Applying Systems Thinking in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Systems Thinking today and write it down.",
    quiz: [
      { question: "What is the core idea of Systems Thinking?", options: ["Option A", "Everything is connected-optimize the whole, not just parts.", "Option C", "Option D"], answer: "Everything is connected-optimize the whole, not just parts." },
      { question: "How can you apply Systems Thinking?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Trade-offs"), title: "Trade-offs", category: "Engineering", categoryIcon: "⚙️",
    summary: "Better performance often = higher cost or complexity.",
    lesson: "A quick introduction to Trade-offs. Better performance often = higher cost or complexity.",
    example: "Applying Trade-offs in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Trade-offs today and write it down.",
    quiz: [
      { question: "What is the core idea of Trade-offs?", options: ["Option A", "Better performance often = higher cost or complexity.", "Option C", "Option D"], answer: "Better performance often = higher cost or complexity." },
      { question: "How can you apply Trade-offs?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Feedback Loops"), title: "Feedback Loops", category: "Engineering", categoryIcon: "⚙️",
    summary: "Systems improve (or fail) based on feedback.",
    lesson: "A quick introduction to Feedback Loops. Systems improve (or fail) based on feedback.",
    example: "Applying Feedback Loops in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Feedback Loops today and write it down.",
    quiz: [
      { question: "What is the core idea of Feedback Loops?", options: ["Option A", "Systems improve (or fail) based on feedback.", "Option C", "Option D"], answer: "Systems improve (or fail) based on feedback." },
      { question: "How can you apply Feedback Loops?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Cinema ===
  {
    slug: s("Rule of Thirds"), title: "Rule of Thirds", category: "Cinema", categoryIcon: "🎞️",
    summary: "Divide screen into 3x3 grid for better composition.",
    lesson: "A quick introduction to Rule of Thirds. Divide screen into 3x3 grid for better composition.",
    example: "Applying Rule of Thirds in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Rule of Thirds today and write it down.",
    quiz: [
      { question: "What is the core idea of Rule of Thirds?", options: ["Option A", "Divide screen into 3x3 grid for better composition.", "Option C", "Option D"], answer: "Divide screen into 3x3 grid for better composition." },
      { question: "How can you apply Rule of Thirds?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Show, Don't Tell"), title: "Show, Don't Tell", category: "Cinema", categoryIcon: "🎞️",
    summary: "Visual storytelling > dialogue.",
    lesson: "A quick introduction to Show, Don't Tell. Visual storytelling > dialogue.",
    example: "Applying Show, Don't Tell in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Show, Don't Tell today and write it down.",
    quiz: [
      { question: "What is the core idea of Show, Don't Tell?", options: ["Option A", "Visual storytelling > dialogue.", "Option C", "Option D"], answer: "Visual storytelling > dialogue." },
      { question: "How can you apply Show, Don't Tell?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Shot Types"), title: "Shot Types", category: "Cinema", categoryIcon: "🎞️",
    summary: "Close-up = emotion, Wide shot = context",
    lesson: "A quick introduction to Shot Types. Close-up = emotion, Wide shot = context",
    example: "Applying Shot Types in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Shot Types today and write it down.",
    quiz: [
      { question: "What is the core idea of Shot Types?", options: ["Option A", "Close-up = emotion, Wide shot = context", "Option C", "Option D"], answer: "Close-up = emotion, Wide shot = context" },
      { question: "How can you apply Shot Types?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Personal Finance ===
  {
    slug: s("50/30/20 Rule"), title: "50/30/20 Rule", category: "Personal Finance", categoryIcon: "💰",
    summary: "50% needs, 30% wants, 20% savings.",
    lesson: "A quick introduction to 50/30/20 Rule. 50% needs, 30% wants, 20% savings.",
    example: "Applying 50/30/20 Rule in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of 50/30/20 Rule today and write it down.",
    quiz: [
      { question: "What is the core idea of 50/30/20 Rule?", options: ["Option A", "50% needs, 30% wants, 20% savings.", "Option C", "Option D"], answer: "50% needs, 30% wants, 20% savings." },
      { question: "How can you apply 50/30/20 Rule?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Compound Interest"), title: "Compound Interest", category: "Personal Finance", categoryIcon: "💰",
    summary: "Money grows exponentially over time.",
    lesson: "A quick introduction to Compound Interest. Money grows exponentially over time.",
    example: "Applying Compound Interest in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Compound Interest today and write it down.",
    quiz: [
      { question: "What is the core idea of Compound Interest?", options: ["Option A", "Money grows exponentially over time.", "Option C", "Option D"], answer: "Money grows exponentially over time." },
      { question: "How can you apply Compound Interest?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Emergency Fund"), title: "Emergency Fund", category: "Personal Finance", categoryIcon: "💰",
    summary: "Save 3-6 months of expenses.",
    lesson: "A quick introduction to Emergency Fund. Save 3-6 months of expenses.",
    example: "Applying Emergency Fund in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Emergency Fund today and write it down.",
    quiz: [
      { question: "What is the core idea of Emergency Fund?", options: ["Option A", "Save 3-6 months of expenses.", "Option C", "Option D"], answer: "Save 3-6 months of expenses." },
      { question: "How can you apply Emergency Fund?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Space ===
  {
    slug: s("Light-Year"), title: "Light-Year", category: "Space", categoryIcon: "🚀",
    summary: "Distance light travels in a year (~9.46 trillion km).",
    lesson: "A quick introduction to Light-Year. Distance light travels in a year (~9.46 trillion km).",
    example: "Applying Light-Year in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Light-Year today and write it down.",
    quiz: [
      { question: "What is the core idea of Light-Year?", options: ["Option A", "Distance light travels in a year (~9.46 trillion km).", "Option C", "Option D"], answer: "Distance light travels in a year (~9.46 trillion km)." },
      { question: "How can you apply Light-Year?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Black Holes"), title: "Black Holes", category: "Space", categoryIcon: "🚀",
    summary: "Gravity so strong, not even light escape.",
    lesson: "A quick introduction to Black Holes. Gravity so strong, not even light escape.",
    example: "Applying Black Holes in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Black Holes today and write it down.",
    quiz: [
      { question: "What is the core idea of Black Holes?", options: ["Option A", "Gravity so strong, not even light escape.", "Option C", "Option D"], answer: "Gravity so strong, not even light escape." },
      { question: "How can you apply Black Holes?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Habitable Zone"), title: "Habitable Zone", category: "Space", categoryIcon: "🚀",
    summary: "Area where liquid water can exist.",
    lesson: "A quick introduction to Habitable Zone. Area where liquid water can exist.",
    example: "Applying Habitable Zone in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Habitable Zone today and write it down.",
    quiz: [
      { question: "What is the core idea of Habitable Zone?", options: ["Option A", "Area where liquid water can exist.", "Option C", "Option D"], answer: "Area where liquid water can exist." },
      { question: "How can you apply Habitable Zone?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Psychology ===
  {
    slug: s("Dopamine Loop"), title: "Dopamine Loop", category: "Psychology", categoryIcon: "🧠",
    summary: "Rewards -> repeat behavior (addiction mechanism).",
    lesson: "A quick introduction to Dopamine Loop. Rewards -> repeat behavior (addiction mechanism).",
    example: "Applying Dopamine Loop in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Dopamine Loop today and write it down.",
    quiz: [
      { question: "What is the core idea of Dopamine Loop?", options: ["Option A", "Rewards -> repeat behavior (addiction mechanism).", "Option C", "Option D"], answer: "Rewards -> repeat behavior (addiction mechanism)." },
      { question: "How can you apply Dopamine Loop?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Cognitive Bias"), title: "Cognitive Bias", category: "Psychology", categoryIcon: "🧠",
    summary: "Your brain takes shortcuts -> often wrong decisions.",
    lesson: "A quick introduction to Cognitive Bias. Your brain takes shortcuts -> often wrong decisions.",
    example: "Applying Cognitive Bias in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Cognitive Bias today and write it down.",
    quiz: [
      { question: "What is the core idea of Cognitive Bias?", options: ["Option A", "Your brain takes shortcuts -> often wrong decisions.", "Option C", "Option D"], answer: "Your brain takes shortcuts -> often wrong decisions." },
      { question: "How can you apply Cognitive Bias?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Maslow's Hierarchy"), title: "Maslow's Hierarchy", category: "Psychology", categoryIcon: "🧠",
    summary: "Needs: survival -> safety -> love -> esteem -> self-actualization.",
    lesson: "A quick introduction to Maslow's Hierarchy. Needs: survival -> safety -> love -> esteem -> self-actualization.",
    example: "Applying Maslow's Hierarchy in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Maslow's Hierarchy today and write it down.",
    quiz: [
      { question: "What is the core idea of Maslow's Hierarchy?", options: ["Option A", "Needs: survival -> safety -> love -> esteem -> self-actualization.", "Option C", "Option D"], answer: "Needs: survival -> safety -> love -> esteem -> self-actualization." },
      { question: "How can you apply Maslow's Hierarchy?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Literature ===
  {
    slug: s("Themes vs Plot"), title: "Themes vs Plot", category: "Literature", categoryIcon: "📖",
    summary: "Plot = what happens, Theme = what it means",
    lesson: "A quick introduction to Themes vs Plot. Plot = what happens, Theme = what it means",
    example: "Applying Themes vs Plot in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Themes vs Plot today and write it down.",
    quiz: [
      { question: "What is the core idea of Themes vs Plot?", options: ["Option A", "Plot = what happens, Theme = what it means", "Option C", "Option D"], answer: "Plot = what happens, Theme = what it means" },
      { question: "How can you apply Themes vs Plot?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Foreshadowing"), title: "Foreshadowing", category: "Literature", categoryIcon: "📖",
    summary: "Hints about future events.",
    lesson: "A quick introduction to Foreshadowing. Hints about future events.",
    example: "Applying Foreshadowing in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Foreshadowing today and write it down.",
    quiz: [
      { question: "What is the core idea of Foreshadowing?", options: ["Option A", "Hints about future events.", "Option C", "Option D"], answer: "Hints about future events." },
      { question: "How can you apply Foreshadowing?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Archetypes"), title: "Archetypes", category: "Literature", categoryIcon: "📖",
    summary: "Common character types (hero, mentor, villain).",
    lesson: "A quick introduction to Archetypes. Common character types (hero, mentor, villain).",
    example: "Applying Archetypes in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Archetypes today and write it down.",
    quiz: [
      { question: "What is the core idea of Archetypes?", options: ["Option A", "Common character types (hero, mentor, villain).", "Option C", "Option D"], answer: "Common character types (hero, mentor, villain)." },
      { question: "How can you apply Archetypes?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Art ===
  {
    slug: s("Color Theory"), title: "Color Theory", category: "Art", categoryIcon: "🖼",
    summary: "Warm = energy, Cool = calm",
    lesson: "A quick introduction to Color Theory. Warm = energy, Cool = calm",
    example: "Applying Color Theory in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Color Theory today and write it down.",
    quiz: [
      { question: "What is the core idea of Color Theory?", options: ["Option A", "Warm = energy, Cool = calm", "Option C", "Option D"], answer: "Warm = energy, Cool = calm" },
      { question: "How can you apply Color Theory?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Contrast"), title: "Contrast", category: "Art", categoryIcon: "🖼",
    summary: "Differences draw attention.",
    lesson: "A quick introduction to Contrast. Differences draw attention.",
    example: "Applying Contrast in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Contrast today and write it down.",
    quiz: [
      { question: "What is the core idea of Contrast?", options: ["Option A", "Differences draw attention.", "Option C", "Option D"], answer: "Differences draw attention." },
      { question: "How can you apply Contrast?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Negative Space"), title: "Negative Space", category: "Art", categoryIcon: "🖼",
    summary: "Empty space improves composition.",
    lesson: "A quick introduction to Negative Space. Empty space improves composition.",
    example: "Applying Negative Space in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Negative Space today and write it down.",
    quiz: [
      { question: "What is the core idea of Negative Space?", options: ["Option A", "Empty space improves composition.", "Option C", "Option D"], answer: "Empty space improves composition." },
      { question: "How can you apply Negative Space?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === History ===
  {
    slug: s("Cause & Effect"), title: "Cause & Effect", category: "History", categoryIcon: "🏺",
    summary: "Events happen due to multiple causes-not just one.",
    lesson: "A quick introduction to Cause & Effect. Events happen due to multiple causes-not just one.",
    example: "Applying Cause & Effect in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Cause & Effect today and write it down.",
    quiz: [
      { question: "What is the core idea of Cause & Effect?", options: ["Option A", "Events happen due to multiple causes-not just one.", "Option C", "Option D"], answer: "Events happen due to multiple causes-not just one." },
      { question: "How can you apply Cause & Effect?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Bias in History"), title: "Bias in History", category: "History", categoryIcon: "🏺",
    summary: "History is written from perspectives.",
    lesson: "A quick introduction to Bias in History. History is written from perspectives.",
    example: "Applying Bias in History in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Bias in History today and write it down.",
    quiz: [
      { question: "What is the core idea of Bias in History?", options: ["Option A", "History is written from perspectives.", "Option C", "Option D"], answer: "History is written from perspectives." },
      { question: "How can you apply Bias in History?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Revolutions Pattern"), title: "Revolutions Pattern", category: "History", categoryIcon: "🏺",
    summary: "Inequality -> unrest -> change.",
    lesson: "A quick introduction to Revolutions Pattern. Inequality -> unrest -> change.",
    example: "Applying Revolutions Pattern in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Revolutions Pattern today and write it down.",
    quiz: [
      { question: "What is the core idea of Revolutions Pattern?", options: ["Option A", "Inequality -> unrest -> change.", "Option C", "Option D"], answer: "Inequality -> unrest -> change." },
      { question: "How can you apply Revolutions Pattern?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Food ===
  {
    slug: s("Macronutrients"), title: "Macronutrients", category: "Food", categoryIcon: "🥑",
    summary: "Protein, carbs, fats = energy sources.",
    lesson: "A quick introduction to Macronutrients. Protein, carbs, fats = energy sources.",
    example: "Applying Macronutrients in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Macronutrients today and write it down.",
    quiz: [
      { question: "What is the core idea of Macronutrients?", options: ["Option A", "Protein, carbs, fats = energy sources.", "Option C", "Option D"], answer: "Protein, carbs, fats = energy sources." },
      { question: "How can you apply Macronutrients?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Maillard Reaction"), title: "Maillard Reaction", category: "Food", categoryIcon: "🥑",
    summary: "Browning = flavor (grilling, frying).",
    lesson: "A quick introduction to Maillard Reaction. Browning = flavor (grilling, frying).",
    example: "Applying Maillard Reaction in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Maillard Reaction today and write it down.",
    quiz: [
      { question: "What is the core idea of Maillard Reaction?", options: ["Option A", "Browning = flavor (grilling, frying).", "Option C", "Option D"], answer: "Browning = flavor (grilling, frying)." },
      { question: "How can you apply Maillard Reaction?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Calories"), title: "Calories", category: "Food", categoryIcon: "🥑",
    summary: "Energy unit-intake vs burn determines weight.",
    lesson: "A quick introduction to Calories. Energy unit-intake vs burn determines weight.",
    example: "Applying Calories in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Calories today and write it down.",
    quiz: [
      { question: "What is the core idea of Calories?", options: ["Option A", "Energy unit-intake vs burn determines weight.", "Option C", "Option D"], answer: "Energy unit-intake vs burn determines weight." },
      { question: "How can you apply Calories?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Architecture ===
  {
    slug: s("Form vs Function"), title: "Form vs Function", category: "Architecture", categoryIcon: "🏛️",
    summary: "Design must balance beauty and usability.",
    lesson: "A quick introduction to Form vs Function. Design must balance beauty and usability.",
    example: "Applying Form vs Function in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Form vs Function today and write it down.",
    quiz: [
      { question: "What is the core idea of Form vs Function?", options: ["Option A", "Design must balance beauty and usability.", "Option C", "Option D"], answer: "Design must balance beauty and usability." },
      { question: "How can you apply Form vs Function?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Load Distribution"), title: "Load Distribution", category: "Architecture", categoryIcon: "🏛️",
    summary: "Structures must evenly spread weight.",
    lesson: "A quick introduction to Load Distribution. Structures must evenly spread weight.",
    example: "Applying Load Distribution in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Load Distribution today and write it down.",
    quiz: [
      { question: "What is the core idea of Load Distribution?", options: ["Option A", "Structures must evenly spread weight.", "Option C", "Option D"], answer: "Structures must evenly spread weight." },
      { question: "How can you apply Load Distribution?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Materials Matter"), title: "Materials Matter", category: "Architecture", categoryIcon: "🏛️",
    summary: "Concrete, steel, wood all behave differently.",
    lesson: "A quick introduction to Materials Matter. Concrete, steel, wood all behave differently.",
    example: "Applying Materials Matter in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Materials Matter today and write it down.",
    quiz: [
      { question: "What is the core idea of Materials Matter?", options: ["Option A", "Concrete, steel, wood all behave differently.", "Option C", "Option D"], answer: "Concrete, steel, wood all behave differently." },
      { question: "How can you apply Materials Matter?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Fashion ===
  {
    slug: s("Fit > Brand"), title: "Fit > Brand", category: "Fashion", categoryIcon: "👠",
    summary: "Well-fitted cheap clothes > expensive bad fit.",
    lesson: "A quick introduction to Fit > Brand. Well-fitted cheap clothes > expensive bad fit.",
    example: "Applying Fit > Brand in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Fit > Brand today and write it down.",
    quiz: [
      { question: "What is the core idea of Fit > Brand?", options: ["Option A", "Well-fitted cheap clothes > expensive bad fit.", "Option C", "Option D"], answer: "Well-fitted cheap clothes > expensive bad fit." },
      { question: "How can you apply Fit > Brand?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Color Matching"), title: "Color Matching", category: "Fashion", categoryIcon: "👠",
    summary: "Neutral colors are easiest to style.",
    lesson: "A quick introduction to Color Matching. Neutral colors are easiest to style.",
    example: "Applying Color Matching in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Color Matching today and write it down.",
    quiz: [
      { question: "What is the core idea of Color Matching?", options: ["Option A", "Neutral colors are easiest to style.", "Option C", "Option D"], answer: "Neutral colors are easiest to style." },
      { question: "How can you apply Color Matching?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Capsule Wardrobe"), title: "Capsule Wardrobe", category: "Fashion", categoryIcon: "👠",
    summary: "Few versatile pieces > many random outfits.",
    lesson: "A quick introduction to Capsule Wardrobe. Few versatile pieces > many random outfits.",
    example: "Applying Capsule Wardrobe in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Capsule Wardrobe today and write it down.",
    quiz: [
      { question: "What is the core idea of Capsule Wardrobe?", options: ["Option A", "Few versatile pieces > many random outfits.", "Option C", "Option D"], answer: "Few versatile pieces > many random outfits." },
      { question: "How can you apply Capsule Wardrobe?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Music ===
  {
    slug: s("Rhythm"), title: "Rhythm", category: "Music", categoryIcon: "🎵",
    summary: "Timing of beats.",
    lesson: "A quick introduction to Rhythm. Timing of beats.",
    example: "Applying Rhythm in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Rhythm today and write it down.",
    quiz: [
      { question: "What is the core idea of Rhythm?", options: ["Option A", "Timing of beats.", "Option C", "Option D"], answer: "Timing of beats." },
      { question: "How can you apply Rhythm?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Melody vs Harmony"), title: "Melody vs Harmony", category: "Music", categoryIcon: "🎵",
    summary: "Melody = main tune, Harmony = supporting notes",
    lesson: "A quick introduction to Melody vs Harmony. Melody = main tune, Harmony = supporting notes",
    example: "Applying Melody vs Harmony in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Melody vs Harmony today and write it down.",
    quiz: [
      { question: "What is the core idea of Melody vs Harmony?", options: ["Option A", "Melody = main tune, Harmony = supporting notes", "Option C", "Option D"], answer: "Melody = main tune, Harmony = supporting notes" },
      { question: "How can you apply Melody vs Harmony?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Chord Progressions"), title: "Chord Progressions", category: "Music", categoryIcon: "🎵",
    summary: "Patterns that create emotional feel.",
    lesson: "A quick introduction to Chord Progressions. Patterns that create emotional feel.",
    example: "Applying Chord Progressions in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Chord Progressions today and write it down.",
    quiz: [
      { question: "What is the core idea of Chord Progressions?", options: ["Option A", "Patterns that create emotional feel.", "Option C", "Option D"], answer: "Patterns that create emotional feel." },
      { question: "How can you apply Chord Progressions?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Religion ===
  {
    slug: s("Core Purpose"), title: "Core Purpose", category: "Religion", categoryIcon: "🙏",
    summary: "Explains existence, morality, and meaning.",
    lesson: "A quick introduction to Core Purpose. Explains existence, morality, and meaning.",
    example: "Applying Core Purpose in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Core Purpose today and write it down.",
    quiz: [
      { question: "What is the core idea of Core Purpose?", options: ["Option A", "Explains existence, morality, and meaning.", "Option C", "Option D"], answer: "Explains existence, morality, and meaning." },
      { question: "How can you apply Core Purpose?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Rituals"), title: "Rituals", category: "Religion", categoryIcon: "🙏",
    summary: "Repeated actions that reinforce belief.",
    lesson: "A quick introduction to Rituals. Repeated actions that reinforce belief.",
    example: "Applying Rituals in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Rituals today and write it down.",
    quiz: [
      { question: "What is the core idea of Rituals?", options: ["Option A", "Repeated actions that reinforce belief.", "Option C", "Option D"], answer: "Repeated actions that reinforce belief." },
      { question: "How can you apply Rituals?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Sacred Texts"), title: "Sacred Texts", category: "Religion", categoryIcon: "🙏",
    summary: "Guidelines for followers.",
    lesson: "A quick introduction to Sacred Texts. Guidelines for followers.",
    example: "Applying Sacred Texts in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Sacred Texts today and write it down.",
    quiz: [
      { question: "What is the core idea of Sacred Texts?", options: ["Option A", "Guidelines for followers.", "Option C", "Option D"], answer: "Guidelines for followers." },
      { question: "How can you apply Sacred Texts?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Artificial Intelligence ===
  {
    slug: s("Machine Learning"), title: "Machine Learning", category: "Artificial Intelligence", categoryIcon: "✨",
    summary: "AI learns patterns from data.",
    lesson: "A quick introduction to Machine Learning. AI learns patterns from data.",
    example: "Applying Machine Learning in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Machine Learning today and write it down.",
    quiz: [
      { question: "What is the core idea of Machine Learning?", options: ["Option A", "AI learns patterns from data.", "Option C", "Option D"], answer: "AI learns patterns from data." },
      { question: "How can you apply Machine Learning?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Neural Networks"), title: "Neural Networks", category: "Artificial Intelligence", categoryIcon: "✨",
    summary: "Models inspired by the human brain.",
    lesson: "A quick introduction to Neural Networks. Models inspired by the human brain.",
    example: "Applying Neural Networks in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Neural Networks today and write it down.",
    quiz: [
      { question: "What is the core idea of Neural Networks?", options: ["Option A", "Models inspired by the human brain.", "Option C", "Option D"], answer: "Models inspired by the human brain." },
      { question: "How can you apply Neural Networks?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Prompt Engineering"), title: "Prompt Engineering", category: "Artificial Intelligence", categoryIcon: "✨",
    summary: "Better input = better AI output.",
    lesson: "A quick introduction to Prompt Engineering. Better input = better AI output.",
    example: "Applying Prompt Engineering in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Prompt Engineering today and write it down.",
    quiz: [
      { question: "What is the core idea of Prompt Engineering?", options: ["Option A", "Better input = better AI output.", "Option C", "Option D"], answer: "Better input = better AI output." },
      { question: "How can you apply Prompt Engineering?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Paleontology ===
  {
    slug: s("Fossilization"), title: "Fossilization", category: "Paleontology", categoryIcon: "🦴",
    summary: "Remains preserved in rock over time.",
    lesson: "A quick introduction to Fossilization. Remains preserved in rock over time.",
    example: "Applying Fossilization in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Fossilization today and write it down.",
    quiz: [
      { question: "What is the core idea of Fossilization?", options: ["Option A", "Remains preserved in rock over time.", "Option C", "Option D"], answer: "Remains preserved in rock over time." },
      { question: "How can you apply Fossilization?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Dinosaur Eras"), title: "Dinosaur Eras", category: "Paleontology", categoryIcon: "🦴",
    summary: "Triassic -> Jurassic -> Cretaceous.",
    lesson: "A quick introduction to Dinosaur Eras. Triassic -> Jurassic -> Cretaceous.",
    example: "Applying Dinosaur Eras in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Dinosaur Eras today and write it down.",
    quiz: [
      { question: "What is the core idea of Dinosaur Eras?", options: ["Option A", "Triassic -> Jurassic -> Cretaceous.", "Option C", "Option D"], answer: "Triassic -> Jurassic -> Cretaceous." },
      { question: "How can you apply Dinosaur Eras?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Extinction Events"), title: "Extinction Events", category: "Paleontology", categoryIcon: "🦴",
    summary: "Mass die-offs reshape life.",
    lesson: "A quick introduction to Extinction Events. Mass die-offs reshape life.",
    example: "Applying Extinction Events in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Extinction Events today and write it down.",
    quiz: [
      { question: "What is the core idea of Extinction Events?", options: ["Option A", "Mass die-offs reshape life.", "Option C", "Option D"], answer: "Mass die-offs reshape life." },
      { question: "How can you apply Extinction Events?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Math ===
  {
    slug: s("Order of Operations"), title: "Order of Operations", category: "Math", categoryIcon: "📐",
    summary: "PEMDAS: Parentheses, Exponents, Multiply, Divide, Add, Subtract.",
    lesson: "A quick introduction to Order of Operations. PEMDAS: Parentheses, Exponents, Multiply, Divide, Add, Subtract.",
    example: "Applying Order of Operations in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Order of Operations today and write it down.",
    quiz: [
      { question: "What is the core idea of Order of Operations?", options: ["Option A", "PEMDAS: Parentheses, Exponents, Multiply, Divide, Add, Subtract.", "Option C", "Option D"], answer: "PEMDAS: Parentheses, Exponents, Multiply, Divide, Add, Subtract." },
      { question: "How can you apply Order of Operations?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Functions"), title: "Functions", category: "Math", categoryIcon: "📐",
    summary: "Input -> process -> output.",
    lesson: "A quick introduction to Functions. Input -> process -> output.",
    example: "Applying Functions in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Functions today and write it down.",
    quiz: [
      { question: "What is the core idea of Functions?", options: ["Option A", "Input -> process -> output.", "Option C", "Option D"], answer: "Input -> process -> output." },
      { question: "How can you apply Functions?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Exponents"), title: "Exponents", category: "Math", categoryIcon: "📐",
    summary: "Repeated multiplication.",
    lesson: "A quick introduction to Exponents. Repeated multiplication.",
    example: "Applying Exponents in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Exponents today and write it down.",
    quiz: [
      { question: "What is the core idea of Exponents?", options: ["Option A", "Repeated multiplication.", "Option C", "Option D"], answer: "Repeated multiplication." },
      { question: "How can you apply Exponents?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  // === Logic ===
  {
    slug: s("Deductive Reasoning"), title: "Deductive Reasoning", category: "Logic", categoryIcon: "🤔",
    summary: "General -> specific (always true if logic is valid).",
    lesson: "A quick introduction to Deductive Reasoning. General -> specific (always true if logic is valid).",
    example: "Applying Deductive Reasoning in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Deductive Reasoning today and write it down.",
    quiz: [
      { question: "What is the core idea of Deductive Reasoning?", options: ["Option A", "General -> specific (always true if logic is valid).", "Option C", "Option D"], answer: "General -> specific (always true if logic is valid)." },
      { question: "How can you apply Deductive Reasoning?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Inductive Reasoning"), title: "Inductive Reasoning", category: "Logic", categoryIcon: "🤔",
    summary: "Specific -> general (probable, not certain).",
    lesson: "A quick introduction to Inductive Reasoning. Specific -> general (probable, not certain).",
    example: "Applying Inductive Reasoning in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Inductive Reasoning today and write it down.",
    quiz: [
      { question: "What is the core idea of Inductive Reasoning?", options: ["Option A", "Specific -> general (probable, not certain).", "Option C", "Option D"], answer: "Specific -> general (probable, not certain)." },
      { question: "How can you apply Inductive Reasoning?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
  {
    slug: s("Logical Fallacies"), title: "Logical Fallacies", category: "Logic", categoryIcon: "🤔",
    summary: "Common thinking errors (e.g. strawman, ad hominem).",
    lesson: "A quick introduction to Logical Fallacies. Common thinking errors (e.g. strawman, ad hominem).",
    example: "Applying Logical Fallacies in daily life helps clarify concepts quickly.",
    challenge: "Think of an example of Logical Fallacies today and write it down.",
    quiz: [
      { question: "What is the core idea of Logical Fallacies?", options: ["Option A", "Common thinking errors (e.g. strawman, ad hominem).", "Option C", "Option D"], answer: "Common thinking errors (e.g. strawman, ad hominem)." },
      { question: "How can you apply Logical Fallacies?", options: ["It is too hard", "In daily practice", "Never", "I don't know"], answer: "In daily practice" }
    ]
  },
]

export function getSkillBySlug(slug: string): SkillData | undefined {
  return ALL_SKILLS.find(skill => skill.slug === slug)
}

export function getSkillsByCategory(category: string): SkillData[] {
  return ALL_SKILLS.filter(skill => skill.category === category)
}

