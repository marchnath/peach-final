import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Анастасия",
    username: "★★★★★",
    body: "Маникюр идеальный, атмосфера супер. Спасибо, Peach Beauty!",
    img: "https://avatar.vercel.sh/anastasia",
  },
  {
    name: "Екатерина",
    username: "★★★★★",
    body: "Отличный сервис, мастера супер!",
    img: "https://avatar.vercel.sh/ekaterina",
  },
  {
    name: "Мария",
    username: "★★★★★",
    body: "Лучший салон! Персонал и сервис — просто невероятные!",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Дмитрий",
    username: "★★★★★",
    body: "Стильно, уютно, профессионально!",
    img: "https://avatar.vercel.sh/dmitry",
  },
  {
    name: "Ольга",
    username: "★★★★★",
    body: "Лучший салон в городе!",
    img: "https://avatar.vercel.sh/olga",
  },
  {
    name: "Игорь",
    username: "★★★★★",
    body: "Все на высшем уровне!",
    img: "https://avatar.vercel.sh/igor",
  },
  {
    name: "Светлана",
    username: "★★★★★",
    body: "Всегда довольна результатом. Спасибо команде Peach Beauty!",
    img: "https://avatar.vercel.sh/svetlana",
  },
  {
    name: "Александр",
    username: "★★★★★",
    body: "Отличное обслуживание, рекомендую!",
    img: "https://avatar.vercel.sh/alexander",
  },
  {
    name: "Елена",
    username: "★★★★★",
    body: "Все просто идеально!",
    img: "https://avatar.vercel.sh/elena",
  },
  {
    name: "Максим",
    username: "★★★★★",
    body: "Очень доволен, обязательно вернусь!",
    img: "https://avatar.vercel.sh/maxim",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl bg- border  p-4",
        // light styles
        "border-gray-300/[.1] bg-gray-100/[.01] hover:bg-gray-200/[.05]"
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-amber-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-none  md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
}
