import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface FormContainerCardProps {
  title: string;
  description?: string; // Optional description below the title
  children: React.ReactNode; // For the form inputs and buttons
  footerContent?: React.ReactNode; // For links like "Forgot password?" or "Sign up"
  className?: string; // Allow for additional custom styling
  cardClassName?: string; // Allow for custom styling of the Card component itself
}

const FormContainerCard: React.FC<FormContainerCardProps> = ({
  title,
  description,
  children,
  footerContent,
  className = 'min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4',
  cardClassName = 'w-full max-w-md',
}) => {
  console.log("Rendering FormContainerCard with title:", title);

  return (
    <div className={className}>
      <Card className={cardClassName}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
          {description && (
            <CardDescription className="mt-1">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {children}
        </CardContent>
        {footerContent && (
          <CardFooter className="flex flex-col items-center space-y-2 pt-4">
            {footerContent}
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default FormContainerCard;