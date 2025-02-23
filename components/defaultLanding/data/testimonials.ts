export interface Testimonial {
    id: number;
    quote: string;
    subQuote?: string;
    author: string;
    role: string;
    image: string;
  }

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Qui quam voluptas sit odio autem cum adipisci.",
    subQuote: "",
    author: "Dr. Jovanny Hills",
    role: "#1 trainer in the world",
    image: "https://placehold.co/300x200@2x.png?auto=format&w=200"
  },
  {
    id: 2,
    quote: "Id iusto distinctio mollitia soluta qui voluptatem.",
    subQuote: "",
    author: "Curt McDermott",
    role: "Google.Com",
    image: "https://placehold.co/300x200@2x.png?auto=format&w=200"
  }
];