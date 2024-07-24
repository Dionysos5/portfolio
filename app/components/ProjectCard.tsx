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
    <div>
      <Link href={`/projects/${"weather"}`}>
        <Image
          src={`/images/${projectName}.png`}
          alt={title}
          width={256}
          height={256}
          className="rounded-md"
        />
      </Link>
      <p className="mt-2 text-sm text-center">{title}</p>
    </div>
  );
}
