import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import AuthLayout from "@/Components/auth/AuthLayout";

import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout>
      <Card className="w-full max-w-[430px] ring-white/10 bg-[#0b0d11]/90 text-white shadow-[0_25px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl">

        <CardHeader className="space-y-6 pb-5">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#b8905a]/40 bg-[#b8905a]/10">
              <span className="text-sm font-semibold text-[#c9a36a]">
                IQ
              </span>
            </div>

            <span className="text-lg font-semibold tracking-tight">
              InterviewIQ
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Create your account
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Start preparing smarter with InterviewIQ.
            </p>
          </div>

        </CardHeader>

        <CardContent>

          <form className="space-y-4">

            {/* Name */}
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-zinc-300"
              >
                Full name
              </Label>

              <Input
                id="name"
                type="text"
                placeholder="Your name"
                className="h-11 border-white/10 bg-white/[0.04] text-white placeholder:text-zinc-600 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-zinc-300"
              >
                Email address
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 border-white/10 bg-white/[0.04] text-white placeholder:text-zinc-600 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-zinc-300"
              >
                Password
              </Label>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="h-11 border-white/10 bg-white/[0.04] pr-11 text-white placeholder:text-zinc-600 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                />
  
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-zinc-300"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <p className="pt-1 text-xs leading-5 text-zinc-500">
              By creating an account, you agree to our{" "}
              <button
                type="button"
                className="text-zinc-300 hover:text-white"
              >
                Terms of Service
              </button>{" "}
              and{" "}
              <button
                type="button"
                className="text-zinc-300 hover:text-white"
              >
                Privacy Policy
              </button>
              .
            </p>

            {/* Create account */}
            <Button
              type="submit"
              className="h-11 w-full bg-indigo-600 font-medium text-white hover:bg-indigo-500"
            >
              Create account
            </Button>

          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-zinc-500">
            Already have an account?{" "}

            <Link
              to="/login"
              className="font-medium text-indigo-400 transition hover:text-indigo-300"
            >
              Sign in
            </Link>
          </p>

        </CardContent>
      </Card>
    </AuthLayout>
  );
}