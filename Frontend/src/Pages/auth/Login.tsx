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
import { Separator } from "@/Components/ui/separator";

export default function Login() {
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
              Welcome back
            </h1>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Sign in to continue your interview preparation.
            </p>
          </div>

        </CardHeader>

        <CardContent>

          <form className="space-y-5">

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

              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-zinc-300"
                >
                  Password
                </Label>

                <button
                  type="button"
                  className="text-xs text-zinc-500 transition hover:text-indigo-400"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-11 border-white/10 bg-white/[0.04] pr-11 text-white placeholder:text-zinc-600 focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 transition hover:text-zinc-300"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Sign in */}
            <Button
              type="submit"
              className="h-11 w-full bg-indigo-600 font-medium text-white hover:bg-indigo-500"
            >
              Sign in
            </Button>

          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <Separator className="flex-1 bg-white/10" />

            <span className="text-xs text-zinc-600">
              OR
            </span>

            <Separator className="flex-1 bg-white/10" />
          </div>

          {/* Google */}
          <Button
            type="button"
            variant="outline"
            className="h-11 w-full border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.08] hover:text-white"
          >
            <span className="mr-2 text-base font-semibold">
              G
            </span>

            Continue with Google
          </Button>

          {/* Signup */}
          <p className="mt-7 text-center text-sm text-zinc-500">
            Don't have an account?{" "}

            <Link
              to="/signup"
              className="font-medium text-indigo-400 transition hover:text-indigo-300"
            >
              Create account
            </Link>
          </p>

        </CardContent>
      </Card>
    </AuthLayout>
  );
}