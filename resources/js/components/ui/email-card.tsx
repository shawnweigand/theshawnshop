import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"
import { router, usePage } from "@inertiajs/react"
import { route } from "ziggy-js"

interface EmailCardProps {
  title?: string;
  description?: string;
  leadRoute?: string;
  redirectUrl?: string;
}

export default function EmailCard({
  title = "Email Subscription Card",
  description = "A minimal, polished interface",
  leadRoute = "default",
  redirectUrl
}: EmailCardProps) {
  const { flash, errors } = usePage().props as any;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    lead_route: leadRoute,
    redirect_url: redirectUrl
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle flash messages and errors from the server
  useEffect(() => {
    if (flash?.success) {
      setSuccess(flash.success);
      setError('');

      // Clear form on success
      setFormData({
        name: '',
        email: '',
        lead_route: leadRoute,
        redirect_url: redirectUrl
      });
    }

    if (flash?.error) {
      setError(flash.error);
      setSuccess('');
    }
  }, [flash, leadRoute, redirectUrl]);

  // Handle validation errors from the server
  useEffect(() => {
    if (errors?.name) {
      setError(errors.name);
    } else if (errors?.email) {
      setError(errors.email);
    } else if (errors?.lead_route) {
      setError(errors.lead_route);
    } else if (errors?.error) {
      setError(errors.error);
    }
  }, [errors]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    // Use Inertia.js router.post for better Laravel integration
    // Don't preserve scroll when redirecting to thank you page
    router.post(route('email.submit'), formData, {
      preserveScroll: true,
      onFinish: () => {
        setIsSubmitting(false);
      }
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full bg-background flex items-center justify-center pb-4 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-foreground/20 blur-2xl"></div>
      </div>

      <div className="w-full max-w-md space-y-6 relative z-10">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="gradient-border">
          <Card className="p-6 space-y-4 shadow-lg shadow-primary/5 border-0">
            {success && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-md">
                <p className="text-sm text-green-600">{success}</p>
              </div>
            )}

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                First Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your first name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full input-border focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all duration-200"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full input-border focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all duration-200"
              />
            </div>

            <div className="flex items-center justify-center">
              <Button
                type="submit"
                size="sm"
                disabled={isSubmitting}
                className="px-6 bg-primary hover:bg-primary/90 transition-all duration-200 shadow-sm"
              >
                {isSubmitting ? 'Submitting...' : 'Start Now'}
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  )
}
