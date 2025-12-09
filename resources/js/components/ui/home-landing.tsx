"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Shield,
  Globe,
  Users,
  Rocket,
  Menu,
  X,
  Code,
  Terminal,
  Cloud,
  Server,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePage, Link } from "@inertiajs/react"
import { route } from "ziggy-js"
import { SharedData } from "@/types"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function HomeLanding() {
  const { auth } = usePage<SharedData>().props
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      icon: <Terminal className="h-6 w-6" />,
      title: "Real-world Scenarios",
      description: "Learn by doing with projects that mimic actual production environments and challenges.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Infrastructure as Code",
      description: "Master Terraform, Ansible, and modern IaC practices used by top tech companies.",
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Native",
      description: "Deep dive into Kubernetes, Docker, and microservices architecture.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Driven",
      description: "Join a community of cloud engineers learning, sharing, and growing together.",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Career Growth",
      description: "Build a portfolio of hands-on projects to showcase your skills to future employers.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Step-by-Step Guides",
      description: "Follow detailed tutorials and guides that break down complex concepts into manageable steps.",
    },
  ]

  const resources = [
    {
      title: "Kubernetes Roadmap",
      description: "A comprehensive guide to mastering Kubernetes, from basics to advanced cluster management.",
      link: route("k8s-roadmap"),
      tag: "Guide",
      image: "/images/k8s-roadmap/roadmap1.png",
    },
    {
      title: "Azure Exam Study Guide",
      description: "Prepare for the Microsoft Azure Administrator certification with this focused study guide.",
      link: route("az-104"),
      tag: "Certification",
      image: "/images/az104/laptop.png",
    },
    {
      title: "Terraform Explained",
      description: "Understand Infrastructure as Code with Terraform through clear explanations and examples.",
      link: route("terraform-explained"),
      tag: "Project",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/960px-Terraform_Logo.svg.png",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
          scrollY > 50 ? "shadow-sm" : ""
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Rocket className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">The Shawn Shop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Why Learn Here
            </a>
            <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            {auth?.user ? (
              <Button asChild>
                <Link href={route("dashboard")}>Dashboard</Link>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link href={route("login")}>Sign In</Link>
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a
                href="#features"
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Learn Here
              </a>
              <a
                href="#resources"
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </a>
              {auth?.user ? (
                <Button asChild className="w-full">
                  <Link href={route("dashboard")}>Dashboard</Link>
                </Button>
              ) : (
                <Button asChild variant="outline" className="w-full">
                  <Link href={route("login")}>Sign In</Link>
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Master the Cloud with
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {" "}
                Hands-on Projects
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              Learn Kubernetes, Terraform, Azure, and more through real-world scenarios and step-by-step tutorials.
              Bridge the gap between theory and practice.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                <Link href={route("login")}>
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto" asChild>
                <a href="#features">Explore Path</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive resources designed to help you master cloud engineering.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured Learning Resources
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start your journey with these popular guides and roadmaps.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3"
          >
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="rounded-lg border bg-card shadow-sm flex flex-col justify-between overflow-hidden"
              >
                {resource.image && (
                  <div className="relative w-full h-48 bg-muted flex-shrink-0 flex items-center justify-center">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div>
                    <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {resource.tag}
                    </div>
                    <h3 className="mb-2 text-xl font-bold">{resource.title}</h3>
                    <p className="mb-4 text-muted-foreground">{resource.description}</p>
                  </div>
                  <Button asChild variant="outline" className="w-full mt-auto">
                    <Link href={resource.link}>Access Now</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to launch your cloud career?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Join thousands of engineers mastering cloud technologies through hands-on practice.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 h-auto"
                asChild
              >
                <Link href={route("login")}>
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-slate-900 text-white hover:bg-slate-800 border-none"
                asChild
              >
                <a href="#features">Explore Now</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
                <Rocket className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="font-semibold">The Shawn Shop</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} The Shawn Shop. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}


