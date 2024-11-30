"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import * as z from "zod";

// import { Button, Card, CardContent, CardHeader, Input, Label, Textarea } from "shadcn-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  fullName: z.string().nonempty("Full name is required"),

  password: z.string().nonempty("Password is required"),

  address: z.string().nonempty("Address is required"),

  phoneNumber: z.string().nonempty("Phone number is required"),

  email: z.string().email("Invalid email address"),

  nin: z.string().nonempty("NIN is required"),
});

const RegistrationForm = () => {
  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    // Handle form submission

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <h2 className="text-lg font-medium">User Registration</h2>

          <div className="flex items-center gap-2">
            <Button variant="outline">Back</Button>

            <Button type="submit">Submit</Button>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>

              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                {...register("fullName")}
              />

              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password")}
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="address">Address</Label>

              <Textarea
                id="address"
                placeholder="Enter your address"
                {...register("address")}
              />

              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>

              <Input
                id="phoneNumber"
                type="text"
                placeholder="Enter your phone number"
                {...register("phoneNumber")}
              />

              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="nin">NIN</Label>

              <Input
                id="nin"
                type="text"
                placeholder="Enter your NIN"
                {...register("nin")}
              />

              {errors.nin && (
                <p className="text-red-500 text-sm">{errors.nin.message}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  );
};

export default RegistrationForm;
