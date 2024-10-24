import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { InfoIcon } from "lucide-react";

type HoverCardProps = {
  content: string;
};

const HoverInfoCard: React.FC<HoverCardProps> = ({ content }) => {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <InfoIcon className="w-4 h-4" />
      </HoverCardTrigger>
      <HoverCardContent className="bg-primary border-none font-sans text-sm w-72 p-2 text-secondary">
        {content}
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverInfoCard;
