import ContactForm from "../components/ContactForm";

export function generateMetadata() {
  return {
    title: "Contact",
    description: "Contact form",
  };
}
export default function Projects() {
  return (
    <article className="flex flex-col gap-6 max-w-screen-sm ">
      <ContactForm />
    </article>
  );
}
