"use client"

import Image from "next/image"
import { ScrollReveal } from "./scroll-reveal"

interface PortfolioItem {
  id: number
  title: string
  description: string
  image_url: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "AI Dashboard Design",
    description: "Built with v0 and Cursor for a modern SaaS platform",
    image_url: "/modern-ai-dashboard-interface.jpg",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack Next.js application with Stripe integration",
    image_url: "/sleek-ecommerce-product-page.jpg",
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "React Native app for fitness tracking and social features",
    image_url: "/fitness-app-interface.png",
  },
  {
    id: 4,
    title: "Brand Identity System",
    description: "Complete visual identity for a tech startup",
    image_url: "/modern-brand-identity.png",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description: "Real-time data visualization with interactive charts",
    image_url: "/analytics-dashboard.png",
  },
  {
    id: 6,
    title: "Landing Page Collection",
    description: "High-converting landing pages for various industries",
    image_url: "/modern-landing-page.png",
  },
]

export function PortfolioSection() {
  if (portfolioItems.length === 0) {
    return (
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Portfolio</h2>
          </ScrollReveal>
          <div className="text-center text-muted-foreground">
            <p>No portfolio items yet. Check back soon!</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Portfolio</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.1} direction="up">
              <div className="group relative overflow-hidden rounded-lg border border-border bg-card h-full">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image_url || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  {item.description && <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
