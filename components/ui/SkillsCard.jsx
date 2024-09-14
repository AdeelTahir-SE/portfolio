import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Image from "next/image";
  
  export default function SkillsCard({ title, description, img }) {
    return (
      <Card className="shadow-lg rounded-lg overflow-hidden max-w-44 hover:scale-110 cursor-pointer">
        <CardHeader className="bg-purple-600 text-white p-4">
          <CardTitle className="text-center text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-4">
          <Image
            src={img}
            alt={`Picture representing ${title}`}
            width={80}
            height={80}
            className="w-20 h-20 md:w-24 md:h-24 mb-4"
          />
          <CardDescription className="text-center text-gray-700 dark:text-gray-200">{description}</CardDescription>
        </CardContent>
       
      </Card>
    );
  }
  