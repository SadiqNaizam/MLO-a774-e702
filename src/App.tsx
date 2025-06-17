import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Assuming a generic Homepage exists for the '/' route as a fallback
// If not, create a simple one or adjust the '/' route.
// For this task, we'll assume one might exist or '/' could be LoginPage.
// Let's make '/' the LoginPage for now if no other homepage is defined.
// import Homepage from "./pages/Homepage"; // Example: if you have a general homepage

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordResetRequestPage from "./pages/PasswordResetRequestPage";
import NotFound from "./pages/NotFound"; // Always Must Include

const queryClient = new QueryClient();

// Placeholder for a generic homepage, if you don't have one yet.
// You can replace this with your actual Homepage component if it exists.
const PlaceholderHomepage = () => {
    console.log('PlaceholderHomepage loaded');
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
            <p className="text-lg mb-8">This is a placeholder homepage.</p>
            <div className="space-x-4">
                <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</Link>
                <Link to="/register" className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">Register</Link>
            </div>
        </div>
    );
}


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Adjust the index route as per your application's needs */}
          {/* Using LoginPage as the index route if no other homepage is specified */}
          <Route path="/" element={<PlaceholderHomepage />} /> 
          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/reset-password" element={<PasswordResetRequestPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} /> {/* Always Include This Line As It Is. */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;