export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "J. Wilk",
    location: "Tucson",
    rating: 5,
    text: "Simply the best in Tucson! The best at customer service after the sale, price points on products, water knowledge, and the best experience in construction and installation.",
  },
  {
    id: "2",
    name: "Christopher Stamos",
    location: "Tucson",
    rating: 5,
    text: "Great service and competitive pricing. They showed up when they said they would and the service technician was very patient in answering all of my questions!",
  },
  {
    id: "3",
    name: "Mary Keerins",
    location: "Tucson",
    rating: 5,
    text: "Quick and efficient service. Estimate and actual cost right on target. I trust them to know what is needed and complete it every time.",
  },
  {
    id: "4",
    name: "Amanda Hardwick",
    location: "Tucson",
    rating: 5,
    text: "We loved our pool/spa combination. The patio they poured was gorgeous and inviting. They walked us through picking out every little detail so that it was a perfect fit for us.",
  },
  {
    id: "5",
    name: "Rollinde Prager",
    location: "Tucson",
    rating: 5,
    text: "Patio Pools built my pool in 2005 and have serviced it ever since. The tech took the time to identify the problem and fix it. Outstanding service.",
  },
];
