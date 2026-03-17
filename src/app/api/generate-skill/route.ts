import { NextResponse } from 'next/server'
import OpenAI from 'openai'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { category, skillLevel, interests } = body
    
    // We would initialize OpenAI here if the Key is provided:
    const apiKey = process.env.OPENAI_API_KEY
    if (apiKey && apiKey !== "dummy_key") {
      const openai = new OpenAI({ apiKey })
      const response = await openai.chat.completions.create({
        model: "gpt-4-turbo",
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `You are an expert micro-learning content creator. Generate a highly actionable 3-minute skill lesson.
            Format the response precisely as JSON matching this structure:
            {
              "title": "Skill title",
              "summary": "1 sentence hook",
              "lesson": "2-3 paragraphs explaining the core concept practically.",
              "example": "A real-world scenario applying this concept.",
              "challenge": "A 1-minute actionable mental or physical challenge.",
              "quiz": [
                { "question": "", "options": ["", "", "", ""], "answer": "" } // exactly 2
              ]
            }`
          },
          {
            role: "user",
            content: `Generate a new micro-skill for category: ${category}, level: ${skillLevel}, user interests: ${interests?.join(', ')}.`
          }
        ]
      })
      
      const parsedContent = JSON.parse(response.choices[0].message.content || "{}")
      return NextResponse.json(parsedContent)
    }

    // MOCK RESPONSE for development when API KEY is not set
    const mockResponse = {
      title: `AI-Generated: ${category || 'Productivity'} Mastery`,
      summary: `Learn a key ${skillLevel || 'Beginner'} concept in ${category || 'Productivity'} in under 3 minutes.`,
      lesson: "This is a dynamically generated lesson stub. Once the OpenAI API key is provided in the environment variables, this will contain a deep, insightful 3-minute lesson tailored to your specific interests and skill level.\n\nMicro-learning principles dictate that we focus on one actionable takeaway at a time.",
      example: "In a real world scenario, you would apply this principle immediately. For instance, if you learned 'Time Blocking', you'd open your calendar right now and schedule your next 2 hours.",
      challenge: "Write down 3 ways you can apply this placeholder concept to your daily workflow.",
      quiz: [
        {
          question: "What is the core benefit of micro-learning?",
          options: ["It takes hours.", "It focuses on one actionable takeaway.", "It requires a textbook.", "It is boring."],
          answer: "It focuses on one actionable takeaway."
        },
        {
          question: "How should you apply the example given?",
          options: ["Wait until next year.", "Read it and forget it.", "Apply it immediately to your workflow.", "Only use it in artificial settings."],
          answer: "Apply it immediately to your workflow."
        }
      ]
    }

    // Simulate AI delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    return NextResponse.json(mockResponse)
    
  } catch (error) {
    console.error("Error generating skill:", error)
    return NextResponse.json({ error: "Failed to generate skill" }, { status: 500 })
  }
}
