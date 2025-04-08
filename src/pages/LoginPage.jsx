import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import imgLogin from "../assets/login/sifaegro.svg";
import { Link, useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/emplacamiento", { replace: true });
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <Card className="overflow-hidden">
          <CardContent className="grid p-0 md:grid-cols-2">
            <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Bienvenido</h1>
                  <p className="text-balance text-muted-foreground">
                    Inicia sesión con tu cuenta de SifaeGro
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Contraseña</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button onClick={onLogin} type="button" className="w-full">
                  Login
                </Button>
              </div>
            </form>
            <div className="relative hidden bg-muted md:block">
              <img
                src={imgLogin}
                alt="Image"
                className="absolute inset-0 h-full w-full object-contain dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
