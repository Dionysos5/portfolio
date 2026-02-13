import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({
  title,
  projectName,
}: {
  title: string;
  projectName: string;
}) {
  return (
    <div className=" flex  flex-col items-start">
      <Link href={`/projects/${projectName}`}>
        <Image
          src={`/images/${projectName}.png`}
          alt={title}
          width={256}
          height={256}
          className="rounded-md"
        />
      </Link>
      <p className="mt-2 pl-2 text-sm text-center sm:text-left">{title}</p>
    </div>
  );
}
