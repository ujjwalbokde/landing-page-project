import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Card className="w-full bg-black max-w-md text-white shadow-lg rounded-xl p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent className="bg-black">
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="mt-1 bg-gray-700 border-gray-600" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="mt-1 bg-gray-700 border-gray-600" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <a href="#" className="text-blue-400 text-sm hover:underline">Forgot password?</a>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition">Sign In</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
