"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PropertyCard } from "@/components/property-card"

const properties = [
  {
    title: "Luxury Apartment",
    location: "New York, NY",
    price: 2500,
    image: "/placeholder.svg",
    tags: ["Pet Friendly", "Remote Work Ready", "Gym Access"],
  },
  {
    title: "Modern Loft",
    location: "San Francisco, CA",
    price: 3200,
    image: "/placeholder.svg",
    tags: ["City View", "Smart Home", "Parking"],
  },
  {
    title: "Waterfront Villa",
    location: "Miami, FL",
    price: 5000,
    image: "/placeholder.svg",
    tags: ["Pool", "Beach Access", "24/7 Security"],
  },
]

export function PropertyGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <PropertyCard {...property} />
        </motion.div>
      ))}
    </div>
  )
}

